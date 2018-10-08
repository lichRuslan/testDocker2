'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);


var i=0;
function myOutput (a, b){
    console.log(i++ + '| из |'+a+'| в |'+b+'|');
}

function mason(q, a,b,c){
    if (q===0){
        return;
    }
    mason (q-1, a,c,b);
    myOutput(a,b);
    mason(q-1,c,b,a );
}

mason(3,'A','B','C');