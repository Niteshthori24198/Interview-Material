
const fs = require('fs')


fs.readFile('f1.txt', 'utf8', function (err, data1) {
    fs.readFile('f2.txt', 'utf8', function (err, data2) {
        fs.readFile('f3.txt', 'utf8', function (err, data3) {
            console.log(data1 + data2 + data3);
        });
    });
});


async function readFilePromise(filename, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, encoding, function (err,data) {
            resolve(data);
        })
    })   
}

let p1 = readFilePromise('./f1.txt', 'utf-8');
let p2 = readFilePromise('./f2.txt', 'utf-8');
let p3 = readFilePromise('./f3.txt', 'utf-8');


Promise.all([p1,p2,p3]).then((res)=>{
    console.log(res)
})
