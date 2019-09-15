/**
Call stack - keep adding functions
1st - setImmediate
2nd - setTimeout
process.nextTick - In Node.js, each iteration of an Event Loop is called a tick. To schedule a callback function to be invoked in the next iteration of the Event Loop, we use process.nextTick(). It just takes a callback with no time bound, since it will be executing in the next iteration of the Event Loop.
 */

const fs = require('fs');
fs.readFile(__filename, () => {

    cb = () => {
        console.log('Processed in next iteration');
    }
    process.nextTick(cb);
    setTimeout(() => {
        console.log('Timeout');
    });

    setImmediate(() => {
        console.log('Immediate');
    })

})

console.log("hello");
// hello
// Processed in next iteration
// Immediate
// Timeout