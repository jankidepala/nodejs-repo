var express = require('express');
var app = express();
var fs = require('fs');
const https = require('https');
var events = require('events');

var eventEmitter = new events.EventEmitter();
var ab = new events.EventEmitter();
//const source = new EventSource();
// https://tweet-service.herokuapp.com/stream
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

app.get('/sse', function (req, res) {
    const url = 'https://tweet-service.herokuapp.com/stream';

    const request = https.get(url, (response) => {

        //data: {"tweet":"ointb cool. #newseason","user":"user-28",
        //"retweet_count":641,"created_at":1572517889711,"verified":true,"lang":"fr"}

        const head = {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            Connection: 'keep-alive'
        };

        response.on('data', data => {


            const request = https.get(url, (response) => {
                response.on('data', data => {
                 //   console.log(data)
                    var n = data.toString().replace('data: ', '');
                    try {
                        var a = JSON.parse(n);
                        console.log(a)
                    } catch (_error) { console.log(_error) }
                   res.send("a");
                 // response.pipe(res);
                })
               
            });
         });
      // res.send('BKHSBJH')
     

        request.on('error', function (e) {
            //  console.error(e);
        });
    });
});

ab.on('yoyoEvents', (a) => {
    console.log('AAAA', a);
})
// what port to run server on
app.listen(1111, function () {
    console.log('server started on port 1111');
})