const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductByID,
  addProduct,
  removeProduct,
  patchProduct,
} = require("../controllers/product.controller");

router.get("/", getProducts);
router.post("/", addProduct);
router.get("/:id", getProductByID);
router.delete("/:id", removeProduct);
router.patch("/:id", patchProduct);

module.exports = router;
