const express = require('express');
const { destroyOnePost } = require('../controllers/posts/destroyPost');
const { findAllPosts, findAllPostsByUserId } = require('../controllers/posts/findAllPosts');
const { findOnePost } = require('../controllers/posts/findOnePost');
const { updatePost } = require('../controllers/posts/updatePost');
const { createPost } = require('../controllers/posts/createPost');
const auth = require('../middleware/auth');
const { addLikePost } = require('../controllers/posts/likePost');

const router = express.Router();

router.get('/', auth, findAllPosts);
router.get('/users/:id', auth, findAllPostsByUserId);
router.get('/:id', auth, findOnePost);
router.post('/', auth, createPost);
router.post('/like', auth, addLikePost);
router.put('/:id', auth, updatePost);
router.delete('/:id', auth, destroyOnePost);

module.exports = router;
