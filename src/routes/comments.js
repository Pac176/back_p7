const express = require('express');
const { createComment } = require('../controllers/comments/createComment');
const { findAllComments, findAllCommentsByUserId } = require('../controllers/comments/findAllComments');
const { findOneComment } = require('../controllers/comments/findOneComment');

const router = express.Router();

// const userControllers = require("../controllers/user");
// const user = require("../middleware/validUser");
// const limiter = require("../utils/limiter");

router.get('/', findAllComments); /// fonction admin
router.get('/users/:id', findAllCommentsByUserId); /// fonction admin

// router.get('/comments/user/:id', findAllCommentsByUserId); /// fonction admin . user
router.get('/:id', findOneComment); /// fonction admin/user
router.post('/posts/:id', createComment); /// fonction admin
// router.put('/comments/:id', updateComment); /// fonction admin
router.delete("/comments/:id", ); /// fonction admin

module.exports = router;
