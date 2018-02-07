const db = require('./db');
function update(id, item) {
    let sql = `UPDATE todo SET item='${item}', done=0 WHERE id=${id};`;
    db.query(sql, (err) => {
        if (err) throw err;
    });
}

module.exports = update;