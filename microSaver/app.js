const express = require('express')
var bodyParser     =        require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const postHandler = (req, res) => {
    // save to mongo
    console.log(req.body);
    res.end();
}

app.post('/', postHandler);
app.listen(8080, '0.0.0.0');

