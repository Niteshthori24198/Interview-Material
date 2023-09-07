
const cluster = require('cluster')

const http = require('http')

const os = require('os')


const numofCPU = os.cpus().length;


if (cluster.isMaster) {

    // here master process will create worker process


    for (let i = 0; i < numofCPU; i++) {
        cluster.fork()
    }

    // Handle worker process exits and restart them

    /*  worker: A reference to the worker process that exited.
        code: The exit code of the worker process.
        signal: The signal (if any) that caused the worker process to exit.
    */

    cluster.on('exit', (worker, code, signal) => {
        console.log('worker process exited');
        console.log("worker process ==>", worker);
        console.log("exit code ==>", code)
        console.log("signal ==>", signal)
        cluster.fork()
    })


    // to check number of worker processes

    console.log(`number of workers thread`, cluster.workers)



} else {

    // Worker process handles incoming requests

    const server = http.createServer((req, res) => {
        res.writeHead(200);

        if (req.url === '/') {
            res.end('Home Page')
        }

        else if (req.url === '/data') {
            res.end('Data Received !!')
        }
    })


    server.listen(3000, () => {
        console.log('server running')
    })




}