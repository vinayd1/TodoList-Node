const mysql = require('mysql');
const db = require('./db');
function done(id) {
    let sql = `UPDATE todo set done=1-done WHERE id=${id}`;
    db.query(sql, (err) => {
        if (err) throw err;
    });
}

module.exports = done;