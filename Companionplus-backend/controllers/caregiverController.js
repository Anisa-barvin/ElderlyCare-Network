const Caregiver = require('../models/Caregiver'); // Assuming you have a Caregiver model
const Request = require('../models/Request'); // Assuming you have a Request model

// Search caregivers based on criteria (e.g., location, expertise, availability)
const searchCaregivers = async (req, res) => {
  const { location, expertise, available } = req.query;
  try {
    const caregivers = await Caregiver.find({
      location,
      expertise,
      available,
    });
    res.status(200).json(caregivers);
  } catch (error) {
    res.status(500).json({ message: 'Error searching caregivers' });
  }
};

// Get details of a specific caregiver
const getCaregiverDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const caregiver = await Caregiver.findById(id);
    if (!caregiver) {
      return res.status(404).json({ message: 'Caregiver not found' });
    }
    res.status(200).json(caregiver);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching caregiver details' });
  }
};

// Request a caregiver
const requestCaregiver = async (req, res) => {
  const { elderId, caregiverId, message } = req.body;
  try {
    const newRequest = new Request({
      elder: elderId,
      caregiver: caregiverId,
      message,
      status: 'pending', // Initial status is 'pending'
    });

    await newRequest.save();
    res.status(200).json({ message: 'Caregiver request sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error requesting caregiver' });
  }
};

module.exports = {
  searchCaregivers,
  getCaregiverDetails,
  requestCaregiver,
};
