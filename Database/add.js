const db = require('./db');

function add(item, cb) {
    let sql = `INSERT INTO todo(item, done) values('${item}', 0)`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        let id = result.insertId;
        db.query(`select * from todo where id=${id}`, (err1, result1) => {
            if (err1) throw err1;
            cb(result1);
        });
    });
}

module.exports = add;