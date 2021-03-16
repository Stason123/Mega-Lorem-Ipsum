var express = require('express');
var app = express();
var path = require('path');

app.use('/css', express.static('css'))
app.use('/connection', express.static('connection'))
app.use('/helper', express.static('helper'))
app.use('/json', express.static('json'))
app.use('/models', express.static('models'))
app.use('/services', express.static('services'))

app.get('/', function(req, resp) {
    resp.sendFile('index.html', { root: path.join(__dirname, './') });
})

app.listen(1338, function() {
    console.log('listening')
})