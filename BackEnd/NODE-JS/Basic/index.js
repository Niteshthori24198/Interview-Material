

// File systym module and streams 

// 1. > readable stream

const fs = require('fs');

let data = ''

let i = 0;

let j = 0;

// reading file in one go


fs.readFile('./file.txt', "utf8", (err, data) => {
    console.log('chala')
    if (err) {
        console.log(err);
    } else {
        j++;
        console.log('File readed successfully.');
        handlewrite(`file reading done in ${j} chunks`)
    }
})



// reading file via stream

const readstream = fs.createReadStream("file.txt", "utf8");


// read event when data is ready


readstream.on('data', (chunk) => {
    i++;
    data += chunk;
})


// when reading is completed

readstream.on('end', () => {
    console.log('File reading completed.')
    handlewrite(`file readed in ${i} chunks successfully.`)
})



// when any error occur

readstream.on('error', (err) => {
    console.log("===>", err.message)
})



// 2.> writeable stream


function handlewrite(data) {

    const writestream = fs.createWriteStream("./out.txt")

    writestream.write(data)

    writestream.end() // to close the stream

    writestream.on('finish', () => {
        console.log('write completed')
    })

    writestream.on('error', (err) => {
        console.log(err);
    })
    
}







// data transfer beetween two streams using pipe methods: 


const sourceStream = fs.createReadStream('file.txt', 'utf8');

const destinationStream = fs.createWriteStream('out.txt');

// creating pipe beetween two streams


sourceStream.pipe(destinationStream);


destinationStream.on('finish', () => {
    console.log('data transfer from one file to other is completed successfully')
})

destinationStream.on('error', (err) => {
    console.log(err);
})

sourceStream.on('error', (err) => {
    console.log(err);
})