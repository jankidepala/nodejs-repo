var express = require('express');
var app = express();
var fs = require('fs');
const http = require('http');

//const source = new EventSource();

// route pages
app.get('/', function (req, res) {
    res.send('Main page is up and running!');
});

app.get('/video', function (req, res) {
    const path = '../../img/videoplayback.mp4';
    const stat = fs.statSync(path);
    const fileSize = stat.size;
    const range = req.headers.range;
    var a = { a: req.headers.range }

    const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4'

    }
    res.writeHead(200, head);
    fs.createReadStream(path).pipe(res)
});

// what port to run server on
app.listen(1111, function () {
    console.log('server started on port 1111');
});