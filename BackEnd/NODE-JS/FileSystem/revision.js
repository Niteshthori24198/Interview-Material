
const fs = require('fs')

const path = require('path')

const tdir = 'C:/Users/PC/Desktop/Final-Interview-Preperation/BackEnd/NODE-JS/Basic';

const isvalid = fs.statSync(tdir);

if (isvalid) {
    listdir(tdir)
}


function listdir(dir) {

    let files = [];

    let folders = [];

    let fileAndfolders = fs.readdirSync(dir);

    for (let item of fileAndfolders) {

        const itempath = path.join(dir, item);

        let isfile = fs.statSync(itempath).isFile();

        if (isfile) {
            files.push(item);
        } else {
            folders.push(item);
        }
    }

    console.log("Files -- > ");

    for (let file of files) {
        console.log(file)
    }

    console.log("FOlders -- >");

    for (let folder of folders) {
        console.log(folders);
    }


    for(let item of folders){
        let tfol = path.join(dir,item)
        listdir(tfol)
    }
}