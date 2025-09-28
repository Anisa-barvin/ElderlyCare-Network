const mongoose = require('mongoose');

const caregiverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  expertise: { type: String, required: true }, // Expertise (e.g., "Nursing", "Physical Therapy")
  location: { type: String, required: true }, // Location (e.g., "New York")
  available: { type: Boolean, required: true }, // Availability (true/false)
  phone: { type: String, required: true },
  email: { type: String, required: true },
  profilePicture: { type: String }, // URL to caregiver's profile picture (optional)
});

module.exports = mongoose.model('Caregiver', caregiverSchema);
