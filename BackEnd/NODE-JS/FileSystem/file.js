
const fs = require('fs')

// reading a file :- Async and Sync way


fs.readFile('./file.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})




const data = fs.readFileSync('file.txt', 'utf-8')

console.log(data)



// writing to a file 


fs.writeFile('out.txt', data, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('write done')
    }
})


try {

    fs.writeFileSync('out1.txt', data)
    console.log('write completed')

} catch (error) {
    console.log(error)
}




// append to a file

fs.appendFile('temp1.txt', data, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('append done')
    }
})



try {
    fs.appendFileSync('temp1.txt', data)

} catch (error) {
    console.log(error)
}


// creating directory 



fs.mkdir('newDirectory', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Directory created successfully.');
});



// checking file or directory existance


const fileExists = fs.existsSync('file.js');

if (fileExists) {
    console.log('File exists.');
} else {
    console.log('File does not exist.');
}



// rename 


fs.rename('temp.txt' , 'mytemp.txt' , (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('rename done')
    }
})



// delete file : 


// ==>  fs.unlink() is used for deleting individual files, while fs.rm() is more versatile and can be used for both file and directory removal with options for recursive directory removal.

fs.rm('temp1.txt', {recursive:true} , (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('delete done')
    }
})


fs.unlink('out.txt', (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('delete done')
    }
})




// checking stats of file 

// You can get information about a file or directory using fs.stat(). This method returns an object with information like file size, modification date, etc.


fs.stat('./static.js' , (err, stats) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('******************************')
    console.log('File size:', stats.size);
    console.log('Last modified:', stats.mtime);
    console.log('******************************')
})