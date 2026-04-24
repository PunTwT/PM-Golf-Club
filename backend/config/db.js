// config/db.js
// Creates and exports a MySQL connection pool using credentials from .env

const dotenv = require("dotenv");
const mysql = require("mysql2");

dotenv.config();

// Create a promise-based connection pool for async/await support
const db = mysql
  .createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  })
  .promise();

module.exports = db;
