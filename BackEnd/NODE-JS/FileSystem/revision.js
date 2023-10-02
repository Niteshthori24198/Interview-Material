
const fs = require('fs')

const path = require('path')

const targetDir = 'C:/Users/PC/Desktop/Final-Interview-Preperation/BackEnd/NODE-JS/Basic'

if (fs.existsSync(targetDir)) {
    listDir(targetDir)
} else {
    console.log('error');
}


function listDir(Dirpath) {
    try {

        let files = [];

        let folders = []

        const filesAndFolders = fs.readdirSync(Dirpath);

        for (let item of filesAndFolders) {

            const path1 = path.join(Dirpath, item);

            const isfile = fs.statSync(path1);

            if (isfile) {
                files.push(item)
            } else {
                folders.push(item)
            }

        }



        console.log('Files : ')
        for (let file of files) {
            console.log(file)
        }

        // display folders 

        console.log('Folders :')
        for (let folder of folders) {
            console.log(folder)
        }


        for(let folder of folders){

            const folderpath = path.join(Dirpath,folder);

            listDir(folderpath)

        }

    } catch (error) {
        console.log(error)
    }
}