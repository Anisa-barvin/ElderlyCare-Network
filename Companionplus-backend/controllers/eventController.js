// controllers/eventController.js

const Event = require('../models/Event');

// Add new event
exports.addEvent = async (req, res) => {
  try {
    const { title, description, date, sharedWith } = req.body;

    const newEvent = new Event({
      title,
      description,
      date,
      createdBy: req.user._id,
      userModel: req.user.role, // 'Elder' or 'Relation'
      sharedWith
    });

    await newEvent.save();
    res.status(201).json({ message: 'Event created', event: newEvent });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get events for a user
exports.getEvents = async (req, res) => {
  try {
    const userId = req.user._id;

    const events = await Event.find({
      $or: [
        { createdBy: userId },
        { sharedWith: userId }
      ]
    }).sort({ date: 1 });

    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
