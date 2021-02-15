const express = require('express');
const { createUser } = require('../controllers/users/createUser');
const { destroyOneUser } = require('../controllers/users/destroyUser');
const { findAllUsers } = require('../controllers/users/findAllUsers');
const { findOneUser } = require('../controllers/users/findOneUserByPk');
const { login } = require('../controllers/users/login');
const { signup } = require('../controllers/users/signup');
const { updateUser } = require('../controllers/users/updateUser');
const auth = require('../middleware/auth');
const router = express.Router();

// const userControllers = require("../controllers/user");
// const user = require("../middleware/validUser");
// const limiter = require("../utils/limiter");

router.post('/signup', signup /* limiter.speedLimiter,limiter.tryLimiter,user.userSignupValidation, */);
router.post('/login', login /* limiter.speedLimiter,limiter.tryLimiter,user.userLoginValidation, */);
router.get('/', findAllUsers); /// fonction admin
router.get('/:id', findOneUser); /// fonction admin/user
router.post('/', createUser); /// fonction admin
router.put('/:id', updateUser); /// fonction admin
router.delete('/:id', destroyOneUser); /// fonction admin

module.exports = router;
