const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const productRoutes = require("./routes/product.routes");

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
    res.send("API is running")
})

app.listen(process.env.PORT, function () {
  console.log("Server listening at PORT: " + process.env.PORT);
});
