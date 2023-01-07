import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import songRoutes from './routes/songs.js';
import userRouter from "./Routes/user.js";

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/home', songRoutes);
app.use("/", userRouter);

app.get('/home', (req,res)=>{
    res.send('APP IS RUNNING.');
})

const PORT = 5000;
const CONNECTION_URL = "mongodb+srv://aadityazz:Aaditya@02@cluster0.nr4wkj8.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
