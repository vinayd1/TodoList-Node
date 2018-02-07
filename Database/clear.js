const db = require('./db');

function clear() {
    let deleteTable = `delete from todo`;

    db.query(deleteTable, function (err) {
        if (err) throw err;
    });
}

module.exports = clear;