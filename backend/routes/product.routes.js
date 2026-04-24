// routes/product.routes.js
// Defines all routes for product CRUD operations

const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductByID,
  addProduct,
  removeProduct,
  patchProduct,
} = require("../controllers/product.controller");

// GET /api/products — get all products (supports filters)
router.get("/", getProducts);

// POST /api/products — add a new product with images
router.post("/", addProduct);

// GET /api/products/:id — get a single product by ID with images
router.get("/:id", getProductByID);

// DELETE /api/products/:id — delete a product and its images
router.delete("/:id", removeProduct);

// PATCH /api/products/:id — partially update a product's fields or images
router.patch("/:id", patchProduct);

module.exports = router;
