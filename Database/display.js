const db = require('./db');
function display(cb) {
    let sql = `SELECT * FROM todo`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        cb(result);
    });
}

module.exports = display;