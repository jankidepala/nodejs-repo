const EventEmitter = require('events');
const EventSource = require('eventsource');
var express = require('express');
var app = express();
const https = require('https');
var cors = require('cors')

const _url = 'https://tweet-service.herokuapp.com/stream';

const http = require('http');
const evtSource = new EventSource(_url);
app.use(cors()) // Use this after the variable declaration

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var req1 = ''
var chunkData = []
app.get('/', function (req, res, next) {
    req1 = req.query.equals;
    console.log(req1)
    res.write(chunkData);
    //next();
});

var i=0;
evtSource.onmessage = (e) => {
  
    try {

        let data = JSON.parse(e.data)
         console.log(typeof req1)
        // console.log(data.tweet)
        // console.log(data.tweet.includes(req1))
        // && data.retweet_count > 500
        // && data.user == 'user-93'
        if (data.tweet.includes(req1)
            ) {
                i++;
                chunkData.unshift(data)
                if(i>50){

                } else{
                

                }
            
          //  console.log(i)
        }
    } catch (_error) { }

}

// what port to run server on
app.listen(1111, function () {
    console.log('server started on port 1111');
});