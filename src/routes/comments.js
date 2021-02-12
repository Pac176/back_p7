const express = require('express');
const router = express.Router();

// const userControllers = require("../controllers/user");
// const user = require("../middleware/validUser");
// const limiter = require("../utils/limiter");

router.get('/posts', findAllPosts); /// fonction admin
router.get('/posts/user/:id', findAllPostsByUserId); /// fonction admin
router.get('/posts/:id', findOnePost); /// fonction admin/user
router.post('/posts', createPost); /// fonction admin
router.put('/posts/:id', updatePost); /// fonction admin
router.delete('/posts/:id', destroyOnePost); /// fonction admin

module.exports = router;
