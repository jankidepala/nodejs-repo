// Client Side
const EventEmitter = require('events');

var source = new EventSource('/redis'); // /redis is path to proxy server
source.addEventListener('items', handleItemsCallback, false);
source.addEventListener('users', handleUsersCallback, false);
source.addEventListener('customers', handleCustomersCallback, false);

// Function sample...
function handleItemsCallback (msg) {
   console.log('AAAAAAA');
}