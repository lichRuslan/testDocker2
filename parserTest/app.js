const osmosis = require('osmosis');
osmosis
    .get('www.google.com')
    .set({'div#SIvCob': 'a'})
    .data(console.log)