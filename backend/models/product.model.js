// models/product.model.js
// Handles all database queries related to products and product images

const db = require("../config/db");

// Get all products with optional filters
// Supports filtering by name, brand, category, minPrice, maxPrice
const getProducts = async ({
  name,
  brand,
  category,
  minPrice,
  maxPrice,
} = {}) => {
  // Base query joins product with category and fetches first image
  let query = `
    select p.*, c.name as category_name,
    (select url from product_image where product_id = p.id limit 1) as image
    from product p
    join category c on p.category_id = c.id
    where 1=1
  `;

  const params = [];

  // Dynamically append filters based on provided query parameters
  if (name) {
    query += ` and p.name like ?`;
    params.push(`%${name}%`);
  }

  if (brand && brand !== "All") {
    query += ` and p.brand = ?`;
    params.push(brand);
  }
  if (category && category !== "All") {
    query += ` and c.name = ?`;
    params.push(category);
  }
  if (minPrice) {
    query += ` and p.price >= ?`;
    params.push(Number(minPrice));
  }
  if (maxPrice) {
    query += ` and p.price <= ?`;
    params.push(Number(maxPrice));
  }

  const [rows] = await db.query(query, params);
  return rows;
};

// Get a single product by ID, including its category name
const getProductByID = async (id) => {
  const [rows] = await db.query(
    `select p.*, c.name as category_name from product p
      left join category c on p.category_id = c.id
      where p.id =?`,
    [id],
  );
  return rows[0];
};

// Get all images associated with a product
const getProductImages = async (product_id) => {
  const [rows] = await db.query(
    `select id, url, name from product_image where product_id = ?`,
    [product_id],
  );

  return rows;
};

// Insert a new product into the database
// Automatically sets status based on quantity
const addProduct = async (product) => {
  const {
    name,
    description,
    code,
    brand,
    price,
    hand,
    loft,
    flex = null,
    quantity,
    category_id,
  } = product;

  // Determine stock status based on quantity
  const status = quantity > 0 ? "Ready to sale" : "Out of Stock";

  const [result] = await db.query(
    `
      insert into product (name, description, code, brand, price, hand, loft, flex, quantity, category_id, status) 
      values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      name,
      description,
      code,
      brand,
      price,
      hand,
      loft,
      flex,
      quantity,
      category_id,
      status,
    ],
  );

  // Return the ID of the newly inserted product
  return result.insertId;
};

// Delete a product and its associated images by ID
// Images must be deleted first to avoid foreign key constraint errors
const deleteProduct = async (id) => {
  await db.query(`DELETE FROM product_image WHERE product_id = ?`, [id]);
  const [result] = await db.query(`delete from product where id = ?`, [id]);
  return result.affectedRows > 0;
};

// Update specific fields of a product dynamically
// Only updates fields that are provided in the fields object
const editProduct = async (id, fields) => {
  const keys = Object.keys(fields);
  const values = Object.values(fields);

  const setClause = keys.map((key) => ` ${key} = ?`).join(", ");

  const [result] = await db.query(
    `update product set ${setClause} where id = ?`,
    [...values, id],
  );

  return result.affectedRows > 0;
};

// Insert multiple images for a product
const addProductImages = async (product_id, images) => {
  if (!images || images.length === 0) return;

  const values = images.map((img) => [img.url, img.name || null, product_id]);

  await db.query(`insert into product_image (url, name, product_id) values ?`, [
    values,
  ]);
};

// Replace all images for a product
// Deletes existing images then inserts the new ones
const updateImages = async (product_id, images) => {
  await db.query(`delete from product_image where product_id = ?`, [
    product_id,
  ]);

  if (images && images.length > 0) {
    const values = images.map((img) => [img.url, img.name || null, product_id]);
    await db.query(
      `insert into product_image (url, name, product_id) values ?`,
      [values],
    );
  }
};

module.exports = {
  getProducts,
  getProductByID,
  getProductImages,
  addProduct,
  addProductImages,
  updateImages,
  deleteProduct,
  editProduct,
};
