
const fs = require('fs');


// create a read stream

const readStream = fs.createReadStream("./file.txt", "utf-8");

let data = '';

let i = 0;

readStream.on('data', (chunk) => {
    data += chunk;
    i++;
})

readStream.on('end', () => {
    handlewrite(data)
    console.log(i)
})

readStream.on('error', (err) => {
    console.log(err)
})



// create write streams 


function handlewrite(data) {

    const writeStream = fs.createWriteStream("./out.txt");

    writeStream.write(data);

    writeStream.end()

    writeStream.on('finish', () => {
        console.log('Data written');
    })

    writeStream.on('error', (err) => {
        console.log(err)
    })
}




// pipe 


const sourceStream = fs.createReadStream("./file.txt", "utf-8");

const destinationStream = fs.createWriteStream("./out.txt");

// creating a pipe 

sourceStream.pipe(destinationStream);

sourceStream.on('error', (err)=>{
    console.log(err);
})

destinationStream.on('finish', ()=>{
    console.log('Done');
})

destinationStream.on('error', (err)=>{
    console.log(err);
})