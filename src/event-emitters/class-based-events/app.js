const Logger = require('./Logger');
const loger = new Logger();

loger.on('emit-something', (arg) => {
    console.log(arg)
})
loger.log('sdfd')