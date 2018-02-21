const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'ec2-54-235-66-81.compute-1.amazonaws.com',
    user: 'xxgxamgwndgxan',
    password: 'e6d07a7e9a90eb1b333d3ae272ab10bea4a1b6bde0608be5e21a3b29332c4ced',
    database: 'd2bc92b1usr7p0'
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
