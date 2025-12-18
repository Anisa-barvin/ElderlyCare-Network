// // middleware/authMiddleware.js
// const { verifyToken } = require('../utils/jwt'); // Adjust import to use require for JS

// const authMiddleware = (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1];
  
//   if (!token) {
//     return res.status(401).send({ message: 'No token provided' });
//   }

//   const decoded = verifyToken(token);
//   if (!decoded) {
//     return res.status(401).send({ message: 'Invalid token' });
//   }

//   req.user = decoded; // Attach user info to the request
//   next();
// };

// module.exports = authMiddleware;



// const jwt = require("jsonwebtoken");
// const Elder = require("../models/Elder");

// module.exports = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization?.split(" ")[1];

//     if (!token) {
//       return res.status(401).json({ message: "No token provided" });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     const elder = await Elder.findById(decoded.id).select("-password");
//     if (!elder) {
//       return res.status(404).json({ message: "Elder not found" });
//     }

//     req.elder = elder;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: "Invalid token" });
//   }
// };





/////////////////////////////////////////


// const jwt = require("jsonwebtoken");

// module.exports = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader)
//     return res.status(401).json({ message: "No token provided" });

//   const token = authHeader.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();

//   } catch (error) {
//     return res.status(401).json({ message: "Invalid token" });
//   }
// };


// // middleware/authMiddleware.js
// const { verifyToken } = require('../utils/jwt'); // Adjust import to use require for JS

// const authMiddleware = (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1];
  
//   if (!token) {
//     return res.status(401).send({ message: 'No token provided' });
//   }

//   const decoded = verifyToken(token);
//   if (!decoded) {
//     return res.status(401).send({ message: 'Invalid token' });
//   }

//   req.user = decoded; // Attach user info to the request
//   next();
// };

// module.exports = authMiddleware;



// const jwt = require("jsonwebtoken");
// const Elder = require("../models/Elder");

// module.exports = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization?.split(" ")[1];

//     if (!token) {
//       return res.status(401).json({ message: "No token provided" });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     const elder = await Elder.findById(decoded.id).select("-password");
//     if (!elder) {
//       return res.status(404).json({ message: "Elder not found" });
//     }

//     req.elder = elder;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: "Invalid token" });
//   }
// };


const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user ={ id: decoded.id };
    next();

  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
