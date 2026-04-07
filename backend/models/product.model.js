const db = require("../config/db");

const getProducts = async ({
  name,
  brand,
  category,
  minPrice,
  maxPrice,
} = {}) => {
  let query = `
    select p.*, c.name as category_name from product p
    join category c on p.category_id = c.id
    where 1=1
  `;

  const params = [];

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

const getProductByID = async (id) => {
  const [rows] = await db.query(
    `
      select * from product
      where id =?
    `,
    [id],
  );
  return rows[0];
};

const getProductImages = async (product_id) => {
  const [rows] = await db.query(
    `select id, url, name from product_image where product_id = ?`,
    [product_id],
  );

  return rows;
};

const addProduct = async (product) => {
  const {
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
  } = product;

  const [result] = await db.query(
    `
      insert into product (name, description, code, brand, price, hand, loft, flex, quantity, category_id) 
      values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
    ],
  );

  return result.insertId;
};

const deleteProduct = async (id) => {
  const [result] = await db.query(`delete from product where id = ?`, [id]);
  return result.affectedRows > 0;
};

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

module.exports = {
  getProducts,
  getProductByID,
  getProductImages,
  addProduct,
  deleteProduct,
  editProduct,
};
