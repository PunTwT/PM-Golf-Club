// controllers/auth.controller.js
// Handles authentication logic for admin login

const adminAccount = require("../models/login.model");

// Login handler — validates username and password
// Returns admin account data on success
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const account = await adminAccount.getByUsername(username);

    // Return 401 if username does not exist
    if (!account) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Return 401 if password does not match
    if (account.password != password) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Return account info on successful login
    res.json({
      message: "Login successful",
      data: {
        id: account.id,
        username: account.username,
        email: account.email,
        admin_id: account.admin_id,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { login };
