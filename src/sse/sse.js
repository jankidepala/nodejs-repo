const http = require('http');
var express = require('express');

var app = express();
// http.get({
//     agent:false,
//     path: '/stream',
//     hostname: 'tweet-service.herokuapp.com'
// }, (res) => {
//     res.on('data', data => {
//     console.log(data.toString());
//     });
// })

app.get('/', (req, res) => {
    res.status(200).set({
        "connection": "keep-alive",
        "cache-control": "no-cache",
        "content-type": "application/json"
    })
    // req.socket.setTimeout(200);
    req.pipe('http://mysite.com/doodle.png').pipe(res);

    // var i = 0;
    // http.get({
    //     agent: false,
    //     path: '/stream',
    //     hostname: 'tweet-service.herokuapp.com'
    // }, (res1) => {
    //     res1.on('data', aa => {
    //         i++
    //         //console.log(data.toString());
    //         var data = JSON.parse(aa.data);
    //         console.log(data);
    //         res.write(i + aa.toString());

    //     });
    //})


})

// what port to run server on
app.listen(1111, function () {
    console.log('server started on port 1111');
});