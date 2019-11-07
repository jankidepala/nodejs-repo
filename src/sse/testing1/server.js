const http = require('http');
var express = require('express');

var app = express();
app.get('/', (req, res) => {
res.write('sdfdsjn')

})
app.get('/some', (req, res) => {
    var par= getparams(req);
    http.get({
        agent: false,
        path: '/stream',
        hostname: 'tweet-service.herokuapp.com'
    }, (res1) => {
        res1.on('data', aa => {
            var n = aa.toString().replace('data: ', '');
            try {
                var a = JSON.parse(n);
                var data;
               // console.log( a.tweet, a.tweet.includes('kublai') )
                if (a.tweet.includes('house of cards')){
                  //  data += a;
                    console.log(a)
                    res.sendDate(a.tweet);
                }
               
               // console.log(a.tweet)
               
            } catch (_error) { }
            //res.write( n);
        });
    })


})


const getparams =(req) =>{
    var params = req.query.tweet;
    console.log(params)
    return params;

}
// what port to run server on
app.listen(1111, function () {
    console.log('server started on port 1111');
});