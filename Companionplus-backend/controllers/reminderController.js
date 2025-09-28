// controllers/reminderController.js
exports.addReminder = async (req, res) => {
  try {
    // Logic to add a reminder
    res.status(201).json({ message: 'Reminder added' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
