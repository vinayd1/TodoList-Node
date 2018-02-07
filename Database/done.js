const db = require('./db');
function done(id, cb) {
    let sql = `UPDATE todo set done=1-done WHERE id=${id}`;
    db.query(sql, (err) => {
        if (err) throw err;
        db.query(`SELECT done from todo where id=${id}`, (er, res) => {
            cb(res[0]);
        });
    });
}

module.exports = done;