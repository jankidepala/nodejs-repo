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
    resu.on('data', aa => {
      var n = aa.toString().replace('data: ', '');
      try {
          var a = JSON.parse(n);
          var data;
         // console.log( a.tweet, a.tweet.includes('kublai') )
          if (a.tweet.includes('house of cards')){
            
              console.log(a)
              res.write(a.tweet);
          }
         
         // console.log(a.tweet)
         
      } catch (_error) { }

      //res.write(d.toString())
    })

  })
});





// what port to run server on
app.listen(1111, function () {
  console.log('server started on port 1111');
});