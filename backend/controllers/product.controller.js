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
// Testing Insert a new Product
// method: post
// URL: http://localhost:5000/api/products
// body: raw JSON
// {
//   "name": "Honma Tour World TR20 460 Driver",
//   "description": "Released in 2020, this 460cc driver features a Ti-Carbon Fast Frame for high ball speeds and low spin. Includes three adjustable weight ports for shot-shape customization. Equipped with a premium Vizard FD-5 graphite shaft. Condition: Excellent.",
//   "code": "DV005",
//   "brand": "Honma",
//   "price": 5900.00,
//   "hand": "RH",
//   "loft": 10.5,
//   "flex": "S",
//   "quantity": 1,
//   "category_id": 1,
//   "images": [
//     {
//       "url": "https://www.pmgolfclub.com/manage/product/product_picture/1_080920252057168687.JPG",
//       "name": "Honma Tour World TR20 460 - Main"
//     },
//     {
//       "url": "https://www.pmgolfclub.com/manage/product/product_picture/gallery_080920252057067894.JPG",
//       "name": "Honma TR20 - 2"
//     },
//     {
//       "url": "https://www.pmgolfclub.com/manage/product/product_picture/gallery_080920252057087620.JPG",
//       "name": "Honma TR20 - 3"
//     },
//     {
//       "url": "https://www.pmgolfclub.com/manage/product/product_picture/gallery_080920252057083766.JPG",
//       "name": "Honma TR20 - 4"
//     },
//     {
//         "url": "https://www.pmgolfclub.com/manage/product/product_picture/m_gallery_080920252057128368.JPG",
//         "name": "Honma TR20 - 5"
//     }
//   ]
// }

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
      await updateImages(req.params.id, images)
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
