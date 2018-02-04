const express = require('express');

const data = require('./Database');
const app = express();



app.get('/', function (req, res) {
    res.send("Welcome to Back-end of todo-list");

});

app.get('/add', (req, res) => {
    let item = req.query.item;
    data.add(item);
    res.send("Added");
});

app.get('/delete', (req, res) => {
    let id = req.query.id;
    data.del(id);
    res.send("Deleted");
});

app.get('/check', (req, res) => {
    let id = req.query.id;
    data.done(id);
    res.send("Check/Uncheck");
});

app.get('/update', (req, res) => {
    let id = req.query.id;
    let item = req.query.item;
    data.update(id, item);
    res.send("Updated");
});

app.get('/display', (req, res) => {
    res.send(data.display());
});

app.listen('8000', () => {
    console.log("Server running on port 8000");
});