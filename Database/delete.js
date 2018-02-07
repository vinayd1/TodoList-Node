const db = require('./db');
function del(id) {
    let sql = `DELETE FROM todo WHERE id=${id}`;
    db.query(sql, (err) => {
        if (err) throw err;
    });
}

module.exports = del;