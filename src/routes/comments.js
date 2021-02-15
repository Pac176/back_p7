const express = require('express');
const { createComment } = require('../controllers/comments/createComment');
const { findAllComments } = require('../controllers/comments/findAllComments');

const router = express.Router();

// const userControllers = require("../controllers/user");
// const user = require("../middleware/validUser");
// const limiter = require("../utils/limiter");

router.get('/comments', findAllComments); /// fonction admin
// router.get('/comments/user/:id', findAllCommentsByUserId); /// fonction admin . user
router.get('/comments/:id', findOneComment); /// fonction admin/user
router.post('/posts/:id/comments', createComment); /// fonction admin
// router.put('/comments/:id', updateComment); /// fonction admin
// router.delete('/comments/:id', destroyOneComments); /// fonction admin

module.exports = router;
