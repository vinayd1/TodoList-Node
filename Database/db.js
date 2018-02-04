const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'Vinay',
    password: 'android',
    database: 'todolist'
});

db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log("Mysql Connected");
});

let createTodos = `create table if not exists todo(
                          id integer primary key auto_increment,
                          item varchar(20),
                          done boolean
                      )`;

db.query(createTodos, function(err, res) {
    if (err) throw err;
});

module.exports = db;