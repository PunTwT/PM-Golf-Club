// models/login.model.js
// Handles database queries related to admin authentication

const db = require("../config/db");

// Find an admin account by username
// Returns the first matching row or undefined if not found
const getByUsername = async (username) => {
  const [rows] = await db.query(
    `
    select * from admin_account where username = ?
    `,
    [username],
  );
  return rows[0];
};

module.exports = { getByUsername };
