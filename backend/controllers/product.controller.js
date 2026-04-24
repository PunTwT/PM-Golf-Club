// controllers/product.controller.js
// Handles HTTP requests and responses for product-related operations

const {
  getProducts: fetchProducts,
  getProductByID: fetchProductByID,
  getProductImages: fetchProductImages,
  addProduct: insertProduct,
  addProductImages: insertImages,
  updateImages,
  deleteProduct,
  editProduct,
} = require("../models/product.model");

// GET /api/products
// Returns all products, supports optional query filters
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

// GET /api/products/:id
// Returns a single product by ID including its images
const getProductByID = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await fetchProductByID(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const images = await fetchProductImages(id);

    res.json({ ...product, images });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ------------------- Insert Product Test Cases ------------------- //
/*
Testing Insert a new Product - 1st
method: post
URL: http://localhost:5000/api/products
body: raw JSON
{
  "name": "Honma Tour World TR20 460 Driver",
  "description": "Released in 2020, this 460cc driver features a Ti-Carbon Fast Frame for high ball speeds and low spin. Includes three adjustable weight ports for shot-shape customization. Equipped with a premium Vizard FD-5 graphite shaft. Condition: Excellent.",
  "code": "DV004",
  "brand": "Honma",
  "price": 5900.00,
  "hand": "RH",
  "loft": 10.5,
  "flex": "S",
  "quantity": 1,
  "category_id": 1,
  "images": [
    {
      "url": "https://www.pmgolfclub.com/manage/product/product_picture/1_080920252057168687.JPG",
      "name": "Honma Tour World TR20 460 - Main"
    },
    {
      "url": "https://www.pmgolfclub.com/manage/product/product_picture/gallery_080920252057067894.JPG",
      "name": "Honma TR20 - 2"
    },
    {
      "url": "https://www.pmgolfclub.com/manage/product/product_picture/gallery_080920252057087620.JPG",
      "name": "Honma TR20 - 3"
    },
    {
      "url": "https://www.pmgolfclub.com/manage/product/product_picture/gallery_080920252057083766.JPG",
      "name": "Honma TR20 - 4"
    },
    {
        "url": "https://www.pmgolfclub.com/manage/product/product_picture/m_gallery_080920252057128368.JPG",
        "name": "Honma TR20 - 5"
    }
  ]
}
*/

/*
Testing Insert a new Product - 2nd
method: post
URL: http://localhost:5000/api/products
body: raw JSON
{
  "name": "TaylorMade SLDR Fairway Wood 5",
  "description": "TaylorMade SLDR 5-wood, Loft 19 (adjustable), Flex SR. Low forward CG for reduced spin and penetrating ball flight. Minor cosmetic dent on head, does not affect performance. Condition: 85%.",
  "code": "FW004",
  "brand": "TaylorMade",
  "price": 1800.00,
  "hand": "RH",
  "loft": 19.0,
  "flex": "SR",
  "quantity": 1,
  "category_id": 2,
  "images": [
    {
      "url": "https://www.pmgolfclub.com/manage/product/product_picture/m_2_081220252204560351.JPG",
      "name": "TaylorMade SLDR 5 Wood - Main"
    },
    {
      "url": "https://www.pmgolfclub.com/manage/product/product_picture/m_gallery_081220252204481209.JPG",
      "name": "TaylorMade SLDR 5 Wood - 2"
    },
    {
      "url": "https://www.pmgolfclub.com/manage/product/product_picture/m_gallery_081220252204491890.JPG",
      "name": "TaylorMade SLDR 5 Wood - 3"
    },
    {
      "url": "https://www.pmgolfclub.com/manage/product/product_picture/m_gallery_081220252204511618.JPG",
      "name": "TaylorMade SLDR 5 Wood - 4"
    },
    {
      "url": "https://www.pmgolfclub.com/manage/product/product_picture/m_gallery_081220252204524407.JPG",
      "name": "TaylorMade SLDR 5 Wood - 5"
    }
  ]
}
*/

// Adds a new product and its images to the database
const addProduct = async (req, res) => {
  try {
    const { images, ...productData } = req.body;
    const id = await insertProduct(req.body);

    if (images && images.length > 0) {
      await insertImages(id, images);
    }

    res.status(201).json({ message: "Product added", id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ------------------- Delete Product Test Cases ------------------- //
/*
Testing Delete a Product - 1st
method: DELETE
URL: http://localhost:5000/api/products/1
*/

/*
Testing Delete a Product - 2nd
method: DELETE
URL: http://localhost:5000/api/products/2
*/

/*
Testing Delete a Product - Failed Test Case
method: DELETE
URL: http://localhost:5000/api/products/9999
*/

// Deletes a product and its images by ID
const removeProduct = async (req, res) => {
  try {
    const result = await deleteProduct(req.params.id);
    if (!result) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ------------------- Update Product Test Cases ------------------- //
/* 
Testing Update a Product - 1st
method: PATCH
URL: http://localhost:5000/api/products/10
body: raw JSON
{
  "price": 5500.00
}
*/

/* 
Testing Update a Product - 2nd
method: PATCH
URL: http://localhost:5000/api/products/10
body: raw JSON
{
  "quantity": 2,
  "flex": "R",
  "loft": 10.5
}
*/

// Update a product's fields and/or images
const patchProduct = async (req, res) => {
  try {
    const { images, category_name, ...fields } = req.body;

    if (Object.keys(fields).length > 0) {
      const result = await editProduct(req.params.id, fields);
      if (!result) {
        return res.status(400).json({ error: "No fields provided" });
      }
    }

    if (images !== undefined) {
      await updateImages(req.params.id, images);
    }

    res.json({ message: "Product updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getProducts,
  getProductByID,
  addProduct,
  removeProduct,
  patchProduct,
};
