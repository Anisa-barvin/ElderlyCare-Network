// routes/reminderRoutes.js
const express = require('express');
const router = express.Router();
const reminderController = require('../controllers/reminderController');

// Use a specific function from the controller
router.post('/add', reminderController.addReminder);

module.exports = router;
