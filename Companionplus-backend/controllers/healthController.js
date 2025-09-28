const HealthRecord = require('../models/HealthRecord'); // Assuming you have a HealthRecord model
const User = require('../models/User'); // Assuming you have a User model

// Add a new health record for an elder
const addHealthRecord = async (req, res) => {
  const { elderId, bloodPressure, bloodSugar, heartRate, weight, temperature, date } = req.body;
  try {
    const newRecord = new HealthRecord({
      elder: elderId,
      bloodPressure: bloodPressure,
      bloodSugar: bloodSugar,
      heartRate: heartRate,
      weight: weight,
      temperature: temperature,
      date: date || new Date(),
    });

    await newRecord.save();
    res.status(200).json({ message: 'Health record added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding health record' });
  }
};

// Get the health history of an elder
const getHealthHistory = async (req, res) => {
  const elderId = req.user.id; // Assuming user ID is in the request's authenticated session or token
  try {
    const records = await HealthRecord.find({ elder: elderId });
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching health history' });
  }
};

// Get the health dashboard for an elder
const getHealthDashboard = async (req, res) => {
  const elderId = req.user.id; // Assuming user ID is in the request's authenticated session or token
  try {
    const records = await HealthRecord.find({ elder: elderId }).sort({ date: -1 }).limit(5); // Get the 5 most recent records
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching health dashboard' });
  }
};

module.exports = {
  addHealthRecord,
  getHealthHistory,
  getHealthDashboard,
};
