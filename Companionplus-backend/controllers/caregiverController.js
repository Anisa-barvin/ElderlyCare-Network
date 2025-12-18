// const Caregiver = require('../models/Caregiver'); // Assuming you have a Caregiver model
// const Request = require('../models/Request'); // Assuming you have a Request model
// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// // Search caregivers based on criteria (e.g., location, expertise, availability)


// // REGISTER CAREGIVER
// exports.caregiverRegister = async (req, res) => {
//   try {
//     const { name, email, password, skills, experience, location } = req.body;

//     const exists = await User.findOne({ email });
//     if (exists) return res.status(400).json({ message: "User already exists" });

//     const hashed = await bcrypt.hash(password, 10);

//     const user = new User({
//       name,
//       email,
//       password: hashed,
//       role: "caregiver",
//       skills,
//       experience,
//       location,
//     });

//     await user.save();

//     res.status(201).json({ message: "Caregiver registered successfully!" });

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };



// exports.caregiverLogin = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email, role: "caregiver" });
//     if (!user) return res.status(400).json({ message: "Caregiver not found" });

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) return res.status(400).json({ message: "Invalid password" });

//     const token = jwt.sign({ id: user._id, role: "caregiver" }, process.env.JWT_SECRET, {
//       expiresIn: "1d",
//     });

//     res.json({
//       message: "Login successful",
//       token,
//       user,
//     });

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };




// const searchCaregivers = async (req, res) => {
//   const { location, expertise, available } = req.query;
//   try {
//     const caregivers = await Caregiver.find({
//       location,
//       expertise,
//       available,
//     });
//     res.status(200).json(caregivers);
//   } catch (error) {
//     res.status(500).json({ message: 'Error searching caregivers' });
//   }
// };

// // Get details of a specific caregiver
// const getCaregiverDetails = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const caregiver = await Caregiver.findById(id);
//     if (!caregiver) {
//       return res.status(404).json({ message: 'Caregiver not found' });
//     }
//     res.status(200).json(caregiver);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching caregiver details' });
//   }
// };

// // Request a caregiver
// const requestCaregiver = async (req, res) => {
//   const { elderId, caregiverId, message } = req.body;
//   try {
//     const newRequest = new Request({
//       elder: elderId,
//       caregiver: caregiverId,
//       message,
//       status: 'pending', // Initial status is 'pending'
//     });

//     await newRequest.save();
//     res.status(200).json({ message: 'Caregiver request sent successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error requesting caregiver' });
//   }
// };

// module.exports = {
//   searchCaregivers,
//   getCaregiverDetails,
//   requestCaregiver,
// };






// // controllers/caregiverController.js

// const Caregiver = require('../models/Caregiver');
// //const Request = require('../models/Request');
// //const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// /* ======================================================
//    REGISTER CAREGIVER
// ====================================================== */
// const caregiverRegister = async (req, res) => {
//   try {
//     const { name, email, password, skills, experience, location } = req.body;

//     const exists = await User.findOne({ email });
//     if (exists) return res.status(400).json({ message: "User already exists" });

//     const hashed = await bcrypt.hash(password, 10);

//     const caregiver = new Caregiver({
//       name,
//       email,
//       password: hashed,
//       role: "caregiver",
//       skills,
//       experience,
//       location,
//     });

//     await caregiver.save();

//     res.status(201).json({ message: "Caregiver registered successfully!" });

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// /* ======================================================
//    LOGIN CAREGIVER
// ====================================================== */
// const caregiverLogin = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const caregiver = await User.findOne({ email, role: "caregiver" });
//     if (!caregiver) return res.status(400).json({ message: "Caregiver not found" });

//     const match = await bcrypt.compare(password, caregiver.password);
//     if (!match) return res.status(400).json({ message: "Invalid password" });

//     const token = jwt.sign(
//       { id: caregiver._id, role: "caregiver" },
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" }
//     );

//     res.json({
//       message: "Login successful",
//       token,
//       caregiver,
//     });

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// /* ======================================================
//    SEARCH CAREGIVERS
// ====================================================== */
// const searchCaregivers = async (req, res) => {
//   const { location, experience, skills } = req.query;

//   try {
//     const query = {};

//     if (location) query.location = location;
//     if (experience) query.experience = { $gte: experience };
//     if (skills) query.skills = { $in: skills.split(",") };

//     const caregivers = await User.find({ role: "caregiver", ...query });

//     res.status(200).json(caregivers);

//   } catch (error) {
//     res.status(500).json({ message: "Error searching caregivers" });
//   }
// };


// /* ======================================================
//    GET CAREGIVER DETAILS
// ====================================================== */
// const getCaregiverDetails = async (req, res) => {
//   try {
//     const caregiver = await User.findById(req.params.id);

//     if (!caregiver || caregiver.role !== "caregiver") {
//       return res.status(404).json({ message: "Caregiver not found" });
//     }

//     res.json(caregiver);

//   } catch (error) {
//     res.status(500).json({ message: "Error fetching caregiver details" });
//   }
// };


// /* ======================================================
//    REQUEST A CAREGIVER
// ====================================================== */
// const requestCaregiver = async (req, res) => {
//   try {
//     const { elderId, caregiverId, message } = req.body;

//     const newRequest = new Request({
//       elder: elderId,
//       caregiver: caregiverId,
//       message,
//       status: "pending",
//     });

//     await newRequest.save();

//     res.status(200).json({ message: "Caregiver request sent successfully" });

//   } catch (error) {
//     res.status(500).json({ message: "Error requesting caregiver" });
//   }
// };


// /* ======================================================
//    EXPORT ALL CONTROLLERS
// ====================================================== */
// module.exports = {
//   caregiverRegister,
//   caregiverLogin,
//   searchCaregivers,
//   getCaregiverDetails,
//   requestCaregiver,
// };






// const Caregiver = require("../models/Caregiver");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// // REGISTER CAREGIVER
// const caregiverRegister = async (req, res) => {
//   try {
//     const { name, email, password, skills, experience, location } = req.body;

//     // Check if caregiver already exists
//     const exists = await Caregiver.findOne({ email });
//     if (exists) return res.status(400).json({ message: "Caregiver already exists" });

//     const hashed = await bcrypt.hash(password, 10);

//     const caregiver = new Caregiver({
//       name,
//       email,
//       password: hashed,
//       skills,
//       experience,
//       location,
//     });

//     await caregiver.save();

//     res.status(201).json({ message: "Caregiver registered successfully!" });

//   } catch (error) {
//     console.log("REGISTER ERROR:", error);
//     res.status(500).json({ message: error.message });
//   }
// };

// // CAREGIVER LOGIN
// const caregiverLogin = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const caregiver = await Caregiver.findOne({ email });
//     if (!caregiver) return res.status(400).json({ message: "Caregiver not found" });

//     const match = await bcrypt.compare(password, caregiver.password);
//     if (!match) return res.status(400).json({ message: "Invalid password" });

//     const token = jwt.sign(
//       { id: caregiver._id, role: "caregiver" },
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" }
//     );

//     res.json({ message: "Login successful", token, caregiver });

//   } catch (error) {
//     console.log("LOGIN ERROR:", error);
//     res.status(500).json({ message: error.message });
//   }
// };

// // SEARCH CAREGIVERS
// const searchCaregivers = async (req, res) => {
//   const { location, experience, skills } = req.query;

//   try {
//     let query = {};

//     if (location) query.location = location;
//     if (experience) query.experience = { $gte: Number(experience) };
//     if (skills) query.skills = { $in: skills.split(",") };

//     const caregivers = await Caregiver.find(query);

//     res.json(caregivers);

//   } catch (error) {
//     console.log("SEARCH ERROR:", error);
//     res.status(500).json({ message: "Error searching caregivers" });
//   }
// };



// module.exports = {
//   caregiverRegister,
//   caregiverLogin,
//   searchCaregivers,
//   caregiverLogin,
//   caregiverRegister
// };







// const Caregiver = require("../models/Caregiver");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// // REGISTER CAREGIVER
// const registerCaregiver = async (req, res) => {
//   try {
//     const {
//       name,
//       email,
//       password,
//       specialty,
//       experience,
//       location,
//       phone,
//       gender
//     } = req.body;

//     // Check if caregiver already exists
//     const exists = await Caregiver.findOne({ email });
//     if (exists) return res.status(400).json({ message: "Caregiver already exists" });

//     const hashed = await bcrypt.hash(password, 10);

//     const caregiver = new Caregiver({
//       name,
//       email,
//       password: hashed,
//       specialty,
//       experience,
//       location,
//       phone,
//       gender,
//     });

//     await caregiver.save();

//     res.status(201).json({ message: "Caregiver registered successfully!" });

//   } catch (error) {
//     console.log("REGISTER ERROR:", error);
//     res.status(500).json({ message: error.message });
//   }
// };

// // CAREGIVER LOGIN
// const loginCaregiver = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const caregiver = await Caregiver.findOne({ email });
//     if (!caregiver) return res.status(400).json({ message: "Caregiver not found" });

//     const match = await bcrypt.compare(password, caregiver.password);
//     if (!match) return res.status(400).json({ message: "Invalid password" });

//     const token = jwt.sign(
//       { id: caregiver._id, role: "caregiver" },
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" }
//     );

//     res.json({
//       message: "Login successful",
//       token,
//       caregiver
//     });

//   } catch (error) {
//     console.log("LOGIN ERROR:", error);
//     res.status(500).json({ message: error.message });
//   }
// };

// // SEARCH CAREGIVERS
// const searchCaregivers = async (req, res) => {
//   try {
//     const { location, experience, specialty } = req.query;

//     let query = {};

//     if (location) query.location = location;
//     if (experience) query.experience = { $gte: Number(experience) };
//     if (specialty) query.specialty = { $regex: specialty, $options: "i" };

//     const caregivers = await Caregiver.find(query);

//     res.json(caregivers);

//   } catch (error) {
//     console.log("SEARCH ERROR:", error);
//     res.status(500).json({ message: "Error searching caregivers" });
//   }
// };

// // EXPORTS
// module.exports = {
//   registerCaregiver,
//   loginCaregiver,
//   searchCaregivers
// };




const { get } = require("axios");
const Caregiver = require("../models/Caregiver");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER CAREGIVER
const registerCaregiver = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      specialty,
      experience,
      location:address,
      phone,
      gender
    } = req.body;

    // Check if caregiver already exists
    const exists = await Caregiver.findOne({ email });
    if (exists) return res.status(400).json({ message: "Caregiver already exists" });

    const hashed = await bcrypt.hash(password, 10);

    const caregiver = new Caregiver({
      name,
      email,
      password: hashed,
      specialty,
      experience,
      location:address,
      phone,
      gender,
    });

   await caregiver.save();

    res.status(201).json({ message: "Caregiver registered successfully!" });

  } catch (error) {
    console.log("REGISTER ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

// CAREGIVER LOGIN
const loginCaregiver = async (req, res) => {
  try {
    const { email, password } = req.body;

    const caregiver = await Caregiver.findOne({ email });
    if (!caregiver) return res.status(400).json({ message: "Caregiver not found" });

    const match = await bcrypt.compare(password, caregiver.password);
    if (!match) return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign(
      { id: caregiver._id, role: "caregiver" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login successful",
      token,
      caregiver
    });

  } catch (error) {
    console.log("LOGIN ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

// SEARCH CAREGIVERS
const searchCaregivers = async (req, res) => {
  try {
    const { location, experience, specialty } = req.query;

    let query = {};

    if (location) query.location = location;
    if (experience) query.experience = { $gte: Number(experience) };
    if (specialty) query.specialty = { $regex: specialty, $options: "i" };

    const caregivers = await Caregiver.find(query);

    res.json(caregivers);

  } catch (error) {
    console.log("SEARCH ERROR:", error);
    res.status(500).json({ message: "Error searching caregivers" });
  }
};

const getAllCaregivers = async (req, res) => {
  try {
    const caregivers = await Caregiver.find();
    res.json(caregivers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET CAREGIVER BY ID
const getCaregiverById = async (req, res) => {
  try {
    const caregiver = await Caregiver.findById(req.params.id);
    if (!caregiver) return res.status(404).json({ message: "Caregiver not found" });

    res.json(caregiver);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// EXPORTS
module.exports = {
  registerCaregiver,
  loginCaregiver,
  searchCaregivers,
  getAllCaregivers,
  getCaregiverById
  
};

