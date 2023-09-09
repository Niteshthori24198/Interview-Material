
const EventEmitter = require('events');


const myEmitter = new EventEmitter()



myEmitter.on('hyy', (name)=>{
    console.log(`Hello from ${name}`)
})





myEmitter.emit('hyy', 'Nitesh')