const http = require('http');
const request = require("request")
let i=0;
function mason(q, a,b,c){
    if (q===0){
        return;
    }
    mason (q-1, a,c,b);
    myOutput(a,b);
    mason(q-1,c,b,a );
}
mason(3,'A','B','C');
function myOutput (a, b){
    //httpRequest POST 
    var postData = `${i++}: | из | ${a} | в | ${b} |`;  
    var post_options = {
        host: '0.0.0.0',
        port: '8080',
        path: '/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData)
        }
    };
    console.log(postData);
    // Set up the request
    var post_req = http.request(post_options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
    });
    post_req.write(postData);
    post_req.end();
}