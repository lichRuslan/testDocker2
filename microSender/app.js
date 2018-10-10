const http = require('http');
const request = require("request")
//const options= require('opti');

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
  
    // post the data
    post_req.write(postData);
    post_req.end();
    // request({
    //     url: 'https://192.168.0.118:8080',
    //     json: postData,
    //     headers: {
    //         "content-type": "application/json",
    //         },
    //     method: "POST",
    // }, function (error, response, body) {
    //     if (!error && response.statusCode === 200) {
    //         console.log('success!')
    //     }
    //     else {
    //         console.log("error: " + error)
    //     }
    // })

    // An object of options to indicate where to post to
    
}

//-----------
//     postData = {
//         data: postData
//     };

//     let options = {
//         hostname: '0.0.0.0',
//         port: 8080,
//         path: '/',
//         method: 'POST',
        // headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        //     'Content-Length': Buffer.byteLength(JSON.stringify(postData))
        // }
//       };

    // let req = https.request(options, (res) => {
    //     res.on('data', (d) => {
    //         console.log('Response from MicroSaver: ', d);
    //     });
    // });

//     req.on('error', (e) => {
//         console.error('Error at send data',e);
//     });
//     req.write(JSON.stringify(postData));
//     req.end();
// }




// request({
//     url: url,
//     json: true,
//     method: "POST",
//     multipart: {
//         chunked: false,
//         data: [
//             {
//                 'content-type': 'application/json',
//                 body: postData
//             }
//         ]
//     }
// }, function (error, response, body) {
//     if (!error && response.statusCode === 200) {
//         console.log('success!')
//     }
//     else {
//         console.log("error: " + error)
//     }
// })