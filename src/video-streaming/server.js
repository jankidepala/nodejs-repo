var express = require('express');
var app = express();


// route pages
app.get('/', function (req, res) {
  res.send('Main page is up and running!');
});

app.get('/user', function (req, res) {
    const path = './assets/video.mp4';
    
});

// what port to run server on
app.listen(1111, function () {
  console.log('server started on port 1111');
});