const { Writable } = require('stream');

const st =new Writable({
    write(chunk, encoding, callback){
        console.log('Janki',chunk.toString());
        callback();
    }
})
process.stdin.pipe(st)
