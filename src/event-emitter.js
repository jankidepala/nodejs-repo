var events = require('events');
var eventEmitter = new events.EventEmitter();
var ab = new events.EventEmitter();

ab.on('yoyoEvents', (a) => {
   function vbg() {
      setImmediate(() => {
         console.log('Set Imm');
      })
      console.log('start');

   }
   process.nextTick(vbg);

   console.log(a);
})

ab.emit('yoyoEvents', 'xxxvalue');

var fs = require('fs');
var readableStream = fs.createReadStream('../img/file.txt');
var data = '';

readableStream.on('data', function(chunk) {
    data+=chunk;
});

readableStream.on('end', function() {
    console.log(data);
});