const db = require("../config/db");

const getByUsername = async (username) => {
  const [rows] = await db.query(
    `
    select * from admin_account where username = ?
    `,
    [username],
  );
  return rows[0];
};

module.exports = { getByUsername };
