// const express = require("express");
// const router = express.Router();
// const Caregiver = require("../models/Caregiver");
// const {
//   caregiverRegister,
//   caregiverLogin,
//   searchCaregivers,

// } = require("../controllers/caregiverController");

// router.post("/register", caregiverRegister);
// router.post("/login", caregiverLogin);
// router.get("/search", searchCaregivers);
// router.get("/", async (req, res) => {
//   try {
//     const caregivers = await Caregiver.find();
//     res.json(caregivers);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const Caregiver = require("../models/Caregiver");
//const { getCaregiverById,getAllCaregivers} = require("../controllers/caregiverController");
const {
  registerCaregiver,
  loginCaregiver,
  searchCaregivers,
  getAllCaregivers,
  getCaregiverById,
  
} = require("../controllers/caregiverController");

// Register caregiver
router.post("/register", registerCaregiver);

// Login caregiver
router.post("/login", loginCaregiver);

// Search caregivers (with filters)
router.get("/search", searchCaregivers);

// Get all caregivers (for elder request page)
// router.get("/", async (req, res) => {
//   try {
//     const caregivers = await Caregiver.find();
//     res.json(caregivers);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

//router.get("caregiver/:id", getCaregiverById);

router.get("/", getAllCaregivers);         // Get all caregivers
router.get("/:id", getCaregiverById);   

//router.get("/:id", getCaregiverById);
module.exports = router;
