const mysql = require('mysql');
const db = require('./db');

function add(item) {
    let sql = `INSERT INTO todo(item, done) values(${item}, 0)`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Item Entered");
        console.log(result);
    });
}

module.exports = add;