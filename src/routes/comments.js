const express = require('express');
const { createComment } = require('../controllers/comments/createComment');
const { destroyOneComment } = require('../controllers/comments/destroyOneComment');
const { findAllComments, findAllCommentsByUserId, findAllCommentsByPostsId } = require('../controllers/comments/findAllComments');
const { findOneComment } = require('../controllers/comments/findOneComment');
const { updatecomment } = require('../controllers/comments/updateComment');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, findAllComments); /// fonction admin
router.get('/users/:id', auth, findAllCommentsByUserId); /// fonction admin
router.get('/posts/:id', auth, findAllCommentsByPostsId); /// fonction admin
router.get('/:id', auth, findOneComment); /// fonction admin/user
router.post('/', auth, createComment); /// fonction admin
router.put('/:id', auth, updatecomment); /// fonction admin
router.delete('/:id', auth, destroyOneComment); /// fonction admin

module.exports = router;
