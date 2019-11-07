const express = require('express');
const server = express();
//const mess = require('./script');
//const tweetContainer = document.getElementById('tweets-container')

const port = 4000;

server.get("/", (req, res) => {
   res.sendFile(__dirname + '/views/index.html');
   //console.log('AAAAAAAAAAAAAAAAAA',mess.area);
});

server.get("/json", (req, res) => {
   res.json({ message: "Hello world" });
});

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});