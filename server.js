const express = require('express');                 //Requiring the Modules
const bodyParser = require('body-parser');
const data = require('./Database');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));   //Middle-ware b/w server-side and client-side
app.use(bodyParser.json());

app.use('/', express.static('public'));             //Connection server-side and client-side

app.post('/add', (req, res) => {                    //Add data to database
    let item = req.body.data;
    data.add(item, function (r) {
        res.send(r);
    });
});

app.post('/delete', (req) => {                 //Delete data from database
    let id = req.body.id;
    data.del(id);
});

app.post('/clear', () => {                  //Clear the entire database
    data.clear();
})

app.post('/check', (req, res) => {                   //Check/Uncheck the todo Item
    let id = req.body.id;
    data.done(id, function (cb) {
        res.send(cb);
    });
});

app.post('/update', (req, res) => {                  //Update data in todo list
    let id = req.body.id;
    let item = req.body.item;
    data.update(id, item);
    res.send("Updated");
});

app.get('/display', (req, res) => {                 //Print The entire data of database
    data.display(function (result) {
        res.send(result);
    });
});

app.listen(process.env.PORT, () => {                          //Listening the port
    console.log("Server running on port 8000");
});