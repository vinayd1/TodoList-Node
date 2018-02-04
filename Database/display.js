const mysql = require('mysql');
const db = require('./db');
let q;
function display() {
    let sql = `SELECT * FROM todo`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Display");
        console.log(result);
        q = result;
    });
    return q;
}

module.exports = display;