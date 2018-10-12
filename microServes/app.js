const express = require('express')
var bodyParser = require("body-parser");
const MongoClient = require ('mongodb').MongoClient;

const app = express();
var db;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const postHandler = (req, res) => {
    // save to mongo
    console.log(req.body);
    
    
    db.collection('ruslan_coll').insert(req.body, function(err, result){
        if(err){
            console.log("error at insert record:" + err); 
            res.sendStatus(502);
            return;
        }

        res.send(req.body);
        res.end();
    });
}

app.post('/', postHandler);
// app.listen(8090, '0.0.0.0');
MongoClient.connect('mongodb://192.168.0.118:32784', function(err, database){
    if (err){return  console.log("fack "+ err);}

    db = database.db("ruslan");
    app.listen(8090, function(){
        console.log('Good!!__________________________Good!_____________________Good!');
    });
});

