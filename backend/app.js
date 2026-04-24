// app.js (server.js)
// Entry point of the backend application
// Sets up Express, middleware, routes, and starts the server

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables from .env file
dotenv.config();

const app = express();

// Parse URL-encoded form data (e.g. from HTML forms)
app.use(express.urlencoded({ extended: true }));

// Enable Cross-Origin Resource Sharing for frontend-backend communication
app.use(cors());

// Disable caching so clients always get the latest data
app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});

// Parse incoming JSON request bodies
app.use(express.json());

// Import route handlers
const productRoutes = require("./routes/product.routes");
const authRoutes = require("./routes/auth.routes");

// Register routes with their base paths
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(process.env.PORT, () => {
  console.log("Server listening at PORT: " + process.env.PORT);
});
