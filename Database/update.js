const mysql = require('mysql');
const db = require('./db');
function update(id, item) {
    let sql = `UPDATE todo set item=${item} WHERE id=${id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Item Entered");
        console.log(result);
    });
}

module.exports = update;