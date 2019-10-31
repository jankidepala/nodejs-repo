const EventEmitter = require("eventemitter3");

class Logger extends EventEmitter{
    log(){
        this.emit('emit-something', {id:1, name:'check', url:'www.g.con'})
    }
}

module.exports = Logger