const { getProducts: fetchProducts } = require("../models/product.model");

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

module.exports = { getProducts };
