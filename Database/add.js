const mysql = require('mysql');
const db = require('./db');

let id, r;

function add(item, cb) {
    let sql = `INSERT INTO todo(item, done) values('${item}', 0)`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        id = result.insertId;
        db.query(`select * from todo where id=${id}`, (err1, result1) => {
            if (err1) throw err1;
            cb(result1);
        });
    });
}

module.exports = add;