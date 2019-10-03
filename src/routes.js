const server = require('http').createServer();
const fs = require('fs');
const data = {"name":"dokyu", "age":"33"};
server.on('request', (req, res) => {

    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('12345');
            break;
        case '/home':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('This is home');
            break;
        case '/openLocalHtml':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(fs.readFileSync(`./html/${req.url}.html`));
            break;
        case '/json':
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
            break;
        case '/someRedirect':
            res.writeHead(301, { 'Location': '/home' });
            res.end('');
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end();
    }
})

server.listen(1000);