var events = require('events');
var chatEvent = new events.EventEmitter();

//Register a listener
chatEvent.on('messLogged', (arg) => {
    console.log('Lisened to this::', arg)
})

//Raise an event
chatEvent.emit('messLogged',{id:1, url:'KROC'})
