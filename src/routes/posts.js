const express = require('express');
const { destroyOnePost } = require('../controllers/posts/destroyPost');
const { findAllPosts, findAllPostsByUserId } = require('../controllers/posts/findAllPosts');
const { findOnePost } = require('../controllers/posts/findOnePost');
const { updatePost } = require('../controllers/posts/updatePost');
const { createPost, updateNbPosts } = require('../controllers/posts/createPost');
const auth = require('../middleware/auth');
const { addLikePost, eraseLikePost } = require('../controllers/posts/likePost');

const router = express.Router();

router.get('/', auth, findAllPosts); /// fonction admin
router.get('/users/:id', auth, findAllPostsByUserId); /// fonction admin
router.get('/:id', auth, findOnePost); /// fonction admin/user
router.post('/', auth, createPost); /// fonction admin
router.post('/like/:id', auth, addLikePost); /// fonction admin
router.delete('/like/:id', auth, eraseLikePost); /// fonction admin
router.put('/:id', auth, updatePost); /// fonction admin
router.delete('/:id', auth, destroyOnePost); /// fonction admin

module.exports = router;
