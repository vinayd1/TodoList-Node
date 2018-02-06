const mysql = require('mysql');
const db = require('./db');
function del(id) {
    let sql = `DELETE FROM todo WHERE id=${id}`;

    db.query(sql, (err, result) => {
        if (err) throw err;
    });
}

module.exports = del;