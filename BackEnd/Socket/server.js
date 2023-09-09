
const express = require('express')

const app = express()

app.use(express.json())


const http = require('http')

const server = http.createServer(app)

const { Server } = require('socket.io')


const websocketserver = new Server(server)



app.get("/", (req, res) => {
    res.send("home page")
})


let clientcount = 0;

websocketserver.on('connection', (socket) => {

    console.log('connected')

    clientcount++;

    console.log('client connected : ', clientcount)

    websocketserver.emit('usercount', clientcount)

    socket.broadcast.emit('usercount', clientcount)

    socket.emit('msg', "hello client")

    socket.on('chat', (data) => {
        
        console.log(data)

        websocketserver.emit('usermsg', data)
    })


    socket.on('disconnect', () => {

        console.log('user leave')
        
        clientcount--;

        console.log('client connected : ', clientcount)

        websocketserver.emit('usercount', clientcount)

    })

})


server.listen(3000, () => {

    console.log('running')
})