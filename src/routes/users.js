const express = require('express');
const { createUser } = require('../controllers/users/createUser');
const { destroyOneUser } = require('../controllers/users/destroyUser');
const { findAllUsers } = require('../controllers/users/findAllUsers');
const { findOneUser } = require('../controllers/users/findOneUserByPk');
const { updateUser } = require('../controllers/users/updateUser');
const router = express.Router();

// const userControllers = require("../controllers/user");
// const user = require("../middleware/validUser");
// const limiter = require("../utils/limiter");

// router.post('/signup' /* limiter.speedLimiter,limiter.tryLimiter,user.userSignupValidation, *//* userControllers.signup */);
// router.post('/login' /* limiter.speedLimiter,limiter.tryLimiter,user.userLoginValidation, *//* userControllers.login */);
router.get('/users', findAllUsers); /// fonction admin
router.get('/users/:id', findOneUser); /// fonction admin/user
router.post('/users', createUser); /// fonction admin
router.put('/users/:id', updateUser); /// fonction admin
router.delete('/users/:id', destroyOneUser); /// fonction admin

module.exports = router;
