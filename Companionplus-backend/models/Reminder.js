// models/Reminder.js

const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
  elderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Elder', required: true },
  title: { type: String, required: true },
  description: String,
  time: { type: String, required: true }, // Example: "08:30 AM"
  date: { type: Date, required: true },
  repeat: { type: String, enum: ['none', 'daily', 'weekly'], default: 'none' },
  isCompleted: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Reminder', reminderSchema);
