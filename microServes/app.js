const express = require('express')
var bodyParser     =        require("body-parser");
const MongoClient = require ('mongodb').MongoClient;

const app = express();
var db;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const postHandler = (req, res) => {
    // save to mongo
    console.log(req.body);
    res.end();
}

app.post('/', postHandler);
app.listen(8090, '0.0.0.0');
// MongoClient.connect('mongo://localhost:27017/myhanoe', function(err, database){
//     if (err){ return console.log(err);}

//     db = database;
//     app.listen(8090, function(){
//         console.log('Good!!__________________________Good!_____________________Good!');
//     });
// });

