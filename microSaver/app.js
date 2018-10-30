const express = require('express')
const http = require('http');
var bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const postHandler = (req, res) => {
    console.log(req.body);
    myOutout(req.body);
    res.end();
}  
console.log(bodyParser.json());


// let test = postHandler.qwe;
function myOutout(msg){
    var result = JSON.stringify(msg);
    var text = result;
    var post_options = {
        host: '0.0.0.0',
        port: '8090',
        path: '/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(text)
        }
    };
        
    var post_req = http.request(post_options, function(res){
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            // console.log('Response: ' + chunk);
        });
    });
    post_req.write(text);
    
    post_req.end();
}

app.post('/', postHandler);
app.listen(6080, '0.0.0.0');



