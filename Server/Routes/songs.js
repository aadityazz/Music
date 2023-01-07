import express from 'express';

import { getPosts, getPostsBySearch, getPostsByCreator, getPost, likePost } from '../Controller/songs.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/creator', getPostsByCreator);
router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);

router.patch('/:id/likePost', auth, likePost);

export default router;
