const express = require('express');
const { destroyOnePost } = require('../controllers/posts/destroyPost');
const { findAllPosts, findAllPostsByUserId } = require('../controllers/posts/findAllPosts');
const { findOnePost } = require('../controllers/posts/findOnePost');
const { updatePost } = require('../controllers/posts/updatePost');
const { createPost } = require('../controllers/posts/createPost');
const auth = require('../middleware/auth');
const router = express.Router();

// const user = require("../middleware/validUser");

router.get('/', auth, findAllPosts); /// fonction admin
router.get('/users/:id', auth, findAllPostsByUserId); /// fonction admin
router.get('/:id', auth, findOnePost); /// fonction admin/user
router.post('/', auth, createPost); /// fonction admin
router.put('/:id', auth, updatePost); /// fonction admin
router.delete('/:id', auth, destroyOnePost); /// fonction admin

module.exports = router;
