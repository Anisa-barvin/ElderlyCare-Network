// models/Event.js

const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, refPath: 'userModel' }, // Elder or Relation
  userModel: { type: String, enum: ['Elder', 'Relation'], required: true },
  sharedWith: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Relation' }], // Optional sharing
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
