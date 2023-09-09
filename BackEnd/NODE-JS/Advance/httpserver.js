
const http = require('http')

const server = http.createServer((req, res) => {

    if(req.url==='/'){
        res.end('Home Page')
    }
    else if(req.url==='/data'){
        res.end('data page')
    }
    else{
        res.end('Error 404')
    }

})



server.listen(3000, ()=>{
    console.log('listening at 3000')
})