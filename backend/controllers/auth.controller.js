const adminAccount = require("../models/login.model");

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const account = await adminAccount.getByUsername(username);

    if (!account) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    if (account.password != password) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

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
