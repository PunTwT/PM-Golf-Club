// routes/auth.routes.js
// Defines routes for admin authentication

const express = require("express");
const router = express.Router();
const {login} = require("../controllers/auth.controller");

// POST /api/auth/login — authenticate admin with username and password
router.post("/login", login);

module.exports = router;