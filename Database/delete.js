const mysql = require('mysql');
const db = require('./db');
function del(id) {
    let sql = `DELETE FROM todo WHERE id=${id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Item Entered");
        console.log(result);
    });
}

module.exports = del;