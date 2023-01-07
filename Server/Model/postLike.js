import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    likes: { type: [String], default: [] }
})

var PostLike = mongoose.model('PostLike', postSchema);

export default PostLike;
