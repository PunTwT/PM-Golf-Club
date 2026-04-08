const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});
app.use(express.json());

const productRoutes = require("./routes/product.routes");
const authRoutes = require("./routes/auth.routes");

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
