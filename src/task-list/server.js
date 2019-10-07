const Eventemitter = require('events');

class Server extends Eventemitter {
    constructor(client) {
        super();
        this.tasks ={};
        this.taskId =1;
        process.nextTick( () =>{
            this.emit('response', 'Type a command')
        })
        client.on('command', (command, args) => {
            this.help();
        })
    }
    tasksString() {
        return Object.keys(this.tasks).map(key => {
            return `some taks ${key}`;
        }).join('\n')
    }

    help() {
        var a =[{'a':123}]
        this.emit('response', a);
    }
    add(args) {

    }
}



module.exports = (client) => new Server(client);