const pool = require('../db/pool');

async function queryProductTemplatesWithCategoryNames() {
    const client = await pool.connect();
    try {
        const queryText = `
            SELECT pt.*, pc.name AS category_name
            FROM product_template pt
            LEFT JOIN product_category pc ON pt.categ_id = pc.id
            WHERE pt.categ_id IS NOT null AND pt.list_price IS NOT null
            LIMIT 400;
        `;
        const res = await client.query(queryText);
        return res.rows;
    } finally {
        client.release();
    }
}

module.exports = {
    queryProductTemplatesWithCategoryNames
};
