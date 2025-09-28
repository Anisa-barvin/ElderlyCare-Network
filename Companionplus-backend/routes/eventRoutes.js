// routes/eventRoutes.js

const express = require('express');
const router = express.Router();
const { addEvent, getEvents } = require('../controllers/eventController');

// Add new event
router.post('/events', addEvent);

// Get all events for a user
router.get('/events', getEvents);

module.exports = router;
