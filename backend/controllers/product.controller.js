const {
  getProducts: fetchProducts,
  getProductByID: fetchProductByID,
  addProduct: insertProduct,
} = require("../models/product.model");

const getProducts = async (req, res) => {
  try {
    const { name, brand, category, minPrice, maxPrice } = req.query;

    const products = await fetchProducts({
      name,
      brand,
      category,
      minPrice,
      maxPrice,
    });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getProductByID = async (req, res) => {
  try {
    const product = await fetchProductByID(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addProduct = async (req, res) => {
  try {
    const id = await insertProduct(req.body);
    res.status(201).json({ message: "Product added", id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getProducts, getProductByID, addProduct };
