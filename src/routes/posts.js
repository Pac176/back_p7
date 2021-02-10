const express = require('express');
const { findAllPosts, findAllPostsByUserId } = require('../controllers/posts/findAllPosts');

const router = express.Router();

// const userControllers = require("../controllers/user");
// const user = require("../middleware/validUser");
// const limiter = require("../utils/limiter");

router.get('/posts', findAllPosts); /// fonction admin
router.get('/posts/:id', findAllPostsByUserId); /// fonction admin
// router.get('/users/:id', findOneUser); /// fonction admin/user
// router.post('/posts', createPost); /// fonction admin
// router.put('/users/:id', updateUser); /// fonction admin
// router.delete('/users/:id', destroyOneUser); /// fonction admin

module.exports = router;
