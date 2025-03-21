const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Validate input fields
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Generate salt and hash password
    const saltRounds = 10; // Recommended number of rounds for security
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    // Save user to database
    await newUser.save();

    // Send response
    res
      .status(201)
      .json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// const registerUser = async (req, res) => {
//   res.send("heheeh");
// };

// module.exports = { registerUser };
