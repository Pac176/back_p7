const express = require('express');
const { destroyOnePost } = require('../controllers/posts/destroyPost');
const { findAllPosts, findAllPostsByUserId } = require('../controllers/posts/findAllPosts');
const { findOnePost } = require('../controllers/posts/findOnePost');
const { updatePost } = require('../controllers/posts/updatePost');
const { createPost } = require('../controllers/posts/createPost');
const auth = require('../middleware/auth');
const router = express.Router();

// const user = require("../middleware/validUser");

router.get('/', findAllPosts); /// fonction admin
router.get('/users/:id', findAllPostsByUserId); /// fonction admin
router.get('/:id', findOnePost); /// fonction admin/user
router.post('/', createPost); /// fonction admin
router.put('/:id', updatePost); /// fonction admin
router.delete('/:id', destroyOnePost); /// fonction admin

module.exports = router;
