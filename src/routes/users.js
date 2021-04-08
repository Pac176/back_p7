const express = require('express');
const { createUser } = require('../controllers/users/createUser');
const { destroyOneUser } = require('../controllers/users/destroyUser');
const { findAllUsers } = require('../controllers/users/findAllUsers');
const { findOneUser } = require('../controllers/users/findOneUserByPk');
const { login, verifyPwd } = require('../controllers/users/login');
const { signup } = require('../controllers/users/signup');
const { updateUser } = require('../controllers/users/updateUser');
const auth = require('../middleware/auth');
const { userSignupValidation, userLoginValidation, userUpdateValidation } = require('../middleware/validUsers');
const router = express.Router();

router.post('/signup', userSignupValidation, signup /* limiter.speedLimiter,limiter.tryLimiter,user.userSignupValidation, */);
router.post('/login', userLoginValidation, login /* limiter.speedLimiter,limiter.tryLimiter,user.userLoginValidation, */);
router.post('/verifypwd', verifyPwd /* limiter.speedLimiter,limiter.tryLimiter,user.userLoginValidation, */);
router.get('/', auth, findAllUsers); /// fonction admin
router.get('/:id', auth, findOneUser); /// fonction admin/user
router.post('/', auth, createUser); /// fonction admin
router.put('/:id', auth, userUpdateValidation, updateUser); /// fonction admin
router.delete('/:id', auth, destroyOneUser); /// fonction admin

module.exports = router;
