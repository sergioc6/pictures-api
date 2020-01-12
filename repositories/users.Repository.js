const pool = require('../config/database');

const table = 'users';

const list = async () => {
    let response = await pool.query(`SELECT * FROM ${table}`);
    return response.rows;
};

const findById = async (id) => {
    let response = await pool.query(`SELECT * FROM ${table} WHERE id = $1`, [id]);
    return response.rows[0];
};

module.exports = { 
    findById,
    list,
};