const express = require('express');
const router = express.Router();

const {
  addHealthRecord,
  getHealthHistory,
} = require('../controllers/healthController');

router.post('/add', addHealthRecord);
router.get('/history/:elderId', getHealthHistory);

module.exports = router;
