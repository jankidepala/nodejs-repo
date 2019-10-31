// App.js
const express = require('express');
const events = require('./1_events_sse');
const port = process.env.PORT || 5001;
const app = express();

app.get('/events',  events.subscribe);
cors =() =>{
    console.log('jjj');
}
app.listen(port, function() {
   console.log('Listening on', port);
});