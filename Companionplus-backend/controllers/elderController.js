// controllers/elderController.js

const Elder = require('../models/Elder');

// Register Elder
const registerElder = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Check if the elder already exists
    let elder = await Elder.findOne({ email });
    if (elder) {
      return res.status(400).json({ msg: 'Elder already exists' });
    }

    elder = new Elder({ fullName, email, password });

    // Save elder to the database
    await elder.save();
    res.status(201).json({ msg: 'Elder registered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};

// Login Elder
const loginElder = async (req, res) => {
  try {
    const { email, password } = req.body;

    let elder = await Elder.findOne({ email });
    if (!elder) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Here, you would compare the password (using bcrypt, etc.)
    if (elder.password !== password) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    res.status(200).json({ msg: 'Login successful' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};

module.exports = { registerElder, loginElder };
