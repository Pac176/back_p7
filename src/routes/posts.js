const express = require('express');
const { destroyOnePost } = require('../controllers/posts/destroyPost');
const { findAllPosts, findAllPostsByUserId } = require('../controllers/posts/findAllPosts');
const { findOnePost } = require('../controllers/posts/findOnePost');
const { updatePost } = require('../controllers/posts/updatePost');
//const { createPost } = require('../controllers/posts/createPost');
const router = express.Router();

// const userControllers = require("../controllers/user");
// const user = require("../middleware/validUser");
// const limiter = require("../utils/limiter");

router.get('/posts', findAllPosts); /// fonction admin
router.get('/posts/user/:id', findAllPostsByUserId); /// fonction admin
router.get('/posts/:id', findOnePost); /// fonction admin/user
//router.post('/posts', createPost); /// fonction admin
router.put('/posts/:id', updatePost); /// fonction admin
router.delete('/posts/:id', destroyOnePost); /// fonction admin

module.exports = router;
