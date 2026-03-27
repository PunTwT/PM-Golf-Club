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

module.exports = { getProducts };
