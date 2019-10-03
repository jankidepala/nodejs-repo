/***
 * http object
ClientRequest and Server Request
both implements WritableStream/EE

 */

const http = require('http');
var req = http.request({
    hostname: 'www.google.com'
},
    (res) => {
        //console.log(res);
        res.on('data', (data) => {
            console.log(data.toString());
        })
    });

    req.on('error', (e) => console.log(e));

    req.end();