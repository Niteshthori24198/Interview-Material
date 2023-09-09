
const http = require('http')

const express = require('express')

const app = express()

app.use(express.json())

const {Server}   = require('ws');

const server = http.createServer(app);


const wss = new Server({server})





wss.on('connection', (socket)=>{
    console.log('connection made successfully.')


    socket.on('message' , (data)=>{
        console.log("message received : ", data.toString());

        socket.send('hello client')
        
    })


    socket.on('close', ()=>{
        console.log('disconnected')
    })

})





server.listen(3001, ()=>{
    console.log('Server Listening at 3001');
})