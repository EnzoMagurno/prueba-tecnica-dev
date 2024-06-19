const { Pool } = require("pg");
require('dotenv').config()

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

async function queryProductTemplatesWithCategoryNames() {
  const client = await pool.connect();
  try {
    const queryText = `
      SELECT pt.*, pc.name AS category_name
      FROM product_template pt
      LEFT JOIN product_category pc ON pt.categ_id = pc.id
      WHERE pt.categ_id IS NOT null and pt.list_price is not null
      LIMIT 400;
    `;

    const res = await client.query(queryText);
    return res.rows;
  } finally {
    client.release();
  }
}

module.exports = queryProductTemplatesWithCategoryNames;
