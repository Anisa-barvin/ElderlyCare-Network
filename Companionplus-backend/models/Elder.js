const mongoose = require('mongoose');

const elderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  healthConditions: { type: [String] },
  emergencyContact: { type: String },
  address: { type: String },
  // Add any additional fields needed
});

module.exports = mongoose.model('Elder', elderSchema);
