const mongoose = require('mongoose');

const healthRecordSchema = new mongoose.Schema({
  elder: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User (elder)
  bloodPressure: { type: String, required: true }, // Blood pressure (e.g., "120/80")
  bloodSugar: { type: String, required: true }, // Blood sugar level (e.g., "Normal")
  heartRate: { type: Number, required: true }, // Heart rate (e.g., 72 bpm)
  weight: { type: Number, required: true }, // Weight in kg (e.g., 60 kg)
  temperature: { type: Number, required: true }, // Body temperature (e.g., 37.0°C)
  date: { type: Date, default: Date.now }, // Date when the record was created
});

module.exports = mongoose.model('HealthRecord', healthRecordSchema);
