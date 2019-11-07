// Client Side
const EventEmitter = require('events');
const EventSource = require('eventsource');

var source = new EventSource('https://tweet-service.herokuapp.com/stream'); // /redis is path to proxy server
source.addEventListener('items', handleItemsCallback, false);
//source.addEventListener('users', handleUsersCallback, false);
//source.addEventListener('customers', handleCustomersCallback, false);

// Function sample...
function handleItemsCallback (msg) {
   console.log('AAAAAAA');
}

source.onmessage = (e) =>{
   console.log(e.data)
}