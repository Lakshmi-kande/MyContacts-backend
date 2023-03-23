const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validateToken = require('../middleware/validateTokenHandler');

router.post('/users/register', userController.registerUser);
router.post('/users/login', userController.loginUser);
router.get('/users/current', validateToken, userController.currentUser);

module.exports = router;
