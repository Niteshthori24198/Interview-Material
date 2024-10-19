

function Test(val) {
    this.val = val;
    this.getValue = function () {
        return this.val
    }
}

let t = new Test(1)

delete t;

console.log(t.getValue()) // output is 1. As delete only removes the property not the instance itself.






let p1 = Promise.resolve(1)
let p2 = Promise.resolve(2)

p1.then(console.log) // this is same as :- p1.then((val)=>console.log(val))
p1.then(console.log)

p2.then(console.log)
p2.then(console.log)

 // output :- 1 1 2 2




// Note :- Here even if the timeout has occur after 4 sec but still express server will send us the response as the timeout means the connection has been closed but express didnot check this before sending response to client so it simply sends the response. To check this we need to manually verify the 'req.timedout' part before sending response to the server.

// const timeout = require('connect-timeout');
// app.use(timeout('4s'))

const app = require('express')()


app.get('/', async (req, res) => {
    await WaitTime();
    res.send("Hello")
})


var server = app.listen(3000);

server.setTimeout(4000)

server.on('timeout', function () {
    console.log('timed out !!')
})

async function WaitTime() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("data")
        }, 7000)
    })
}






// There is no error here as we can pss middlewares in a chain format in express..

const app = require('express')()

var m1 = function (req, res, next) {
    console.log("m1")
    next()
}

var m2 = function (req, res, next) {
    console.log("m2")
    next()
}

app.get("/", [m1, m2], function (req, res, next) {
    console.log("hello")
    next()
}, function (req, res) {
    res.send("Hello world")
})


app.listen(3000)
