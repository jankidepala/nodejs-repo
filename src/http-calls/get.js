var express = require('express');
var app = express();
const https = require('https');
const _url = 'https://tweet-service.herokuapp.com/stream';

app.get('/', function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });
  https.get(_url, resu => {
    let data = ''
    resu.on('data', d => {
      console.log(d.toString())
      data += d.toString()
      res.write(d.toString())
    })
    console.log(data)


  })
});





// what port to run server on
app.listen(1111, function () {
  console.log('server started on port 1111');
});