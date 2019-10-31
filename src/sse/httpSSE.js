const server = require('http').createServer();
const fs = require('fs');
const EventEmitter = require('events');
const http = require('http');

const Stream = new EventEmitter();
const str = require('stream')
const readableStream = new str.Writable()

const data1 = { "name": "dokyu", "age": "33" };
server.on('request', (req, res) => {

    switch (req.url) {
        case '/':
            console.log('AAAA');
            http.get({
                agent: false,
                path: '/stream',
                hostname: 'tweet-service.herokuapp.com'
            }, (resSSE) => {
                resSSE.on('data', data => {
                    const data1 = JSON.parse(data.data);

                    console.log(data.toString());
                   // data1.push(data);
                    res.write(data);
                });
            })
            

            res.writeHead(200, { 'Content-Type': 'text/html' });

            //     res.writeHead(200, {
            //         'Content-Type': 'text/event-stream',
            //         'Cache-Control': 'no-cache',
            //         'Connection': 'keep-alive'
            //       });

            //       res.write('\n');
            //       Stream.on("push", function(event, data) {
            //         response.write("event: " + String(event) + "\n" + "data: " + JSON.stringify(data) + "\n\n");
            //       });
            // res.end('12345');
            break;
        case '/home':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('This is home');
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end();
    }
})

server.listen(1000);