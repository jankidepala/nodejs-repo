var events = require('events');
var eventEmitter = new events.EventEmitter();
var ab = new events.EventEmitter();

ab.on('yoyoEvents', (a) => {
   function vbg(){
      setImmediate( () =>{
         console.log('Set Imm');
      })
      console.log('start');

   }
   process.nextTick(vbg);

   console.log(a);
})

ab.emit('yoyoEvents', 'values');