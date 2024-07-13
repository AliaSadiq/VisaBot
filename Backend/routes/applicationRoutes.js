const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to handle user data upload
router.post('/users', userController.uploadUserData);

module.exports = router;
