//Events are a core building block of node

//Example:
const EventEmitter = require('events')
const customEmitter = new EventEmitter()

//on - listen to a event (eg=response)
customEmitter.on('response', ()=>{
    console.log('data recieved')
})
// we can have multiple data for same event
customEmitter.on('response', (name, id)=>{
    console.log(`someone else logged in ${name} id no : ${id}`)
})

//emit - will emit the event
//We cannot emit an event before on(i.e before listening to it)
//We can also pass arguaments while using emit (eg: name=dom n id=32)

customEmitter.emit('response','dom',32)



//Another Example:

const http = require('http')

//Using Event Emitter API
const server = http.createServer()

//emits request event
//it - subscribe to it/listen for it / respond to it
server.on('request', (req, res)=>{
    res.end('Welcome')
})

server.listen(5000)
