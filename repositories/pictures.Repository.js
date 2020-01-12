const pool = require('../config/database');

const table = 'pictures';

const list = async (filters, columns) => {
    if(!columns) {
        columns = '*';
    } else {
        columns = columns.split(',').filter(column => ['id','name','painter', 'country', 'date'].includes(column) );
        columns = (!columns.length > 0) ? '*' : columns;
    }

    if (!filters) {
        filters = 'true';
    } else {
        const { id, name, painter, country, date} = filters;
        filters = '';
        if(id){
            filters = filters+`id = ${id} AND `;
        }
        if (name) {
            filters = filters+`name = '${name}' AND `;
        }
        if(painter){
            filters = filters+`painter = '${painter}' AND `;
        }
        if (country) {
            filters = filters+`country = '${country}' AND `;
        }
        if (date) {
            filters = filters+`date = '${date}' AND `;
        }
        filters = filters+'true';
    }
    response = await pool.query(`SELECT ${columns} FROM ${table} WHERE ${filters}`);
    return response.rows;
};

const insertGetId = async (name, country, painter, date) => {
    let response = await pool.query(`INSERT INTO ${table}(name, country, painter, date) 
                            VALUES($1, $2, $3, $4)
                            RETURNING id`, [name, country, painter, date]);
    return response.rows[0];
};

const update = async (id, name, country, painter, date) => {
    let response = await pool.query(`UPDATE ${table} SET name = $1, country = $2, painter = $3, date = $4 WHERE id = $5 RETURNING *`, [name, country, painter, date, id]);
    return response.rows[0];
};

const findById = async (id) => {
    let response = await pool.query(`SELECT * FROM ${table} WHERE id = $1`, [id]);
    return response.rows[0];
};

const deleteById = async (id) => {
    let response = await pool.query(`DELETE FROM ${table} WHERE id = $1 RETURNING *`, [id]);
    return response.rows.length;
};

module.exports = { 
    findById,
    list,
    insertGetId,
    update,
    deleteById
};