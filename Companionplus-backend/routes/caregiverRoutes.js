const express = require('express');
const router = express.Router();

// Import caregiver controllers
const { searchCaregivers, requestCaregiver } = require('../controllers/caregiverController');

// Routes for caregiver matching and requests
router.get('/search', searchCaregivers);
router.post('/request', requestCaregiver);

module.exports = router;
