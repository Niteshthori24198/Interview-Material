
const fs = require('fs')

const path = require('path')


function listDirectoryContent(dirPath) {

    try {
        const files = []

        const folders = []

        // read the content of entire directory;

        const fileAndFolders = fs.readdirSync(dirPath)


        // iterate throwgh the readed content and seperate files and folders

        for (let item of fileAndFolders) {

            // create a full path for the item

            const itempath = path.join(dirPath, item)

            const isFile = fs.statSync(itempath).isFile()

            if (isFile) {
                files.push(item)
            } else {
                folders.push(item)
            }

        }

        // display files

        console.log('Files : ')
        for (let file of files) {
            console.log(file)
        }

        // display folders 

        console.log('Folders :')
        for(let folder of folders){
            console.log(folder)
        }

        // iterate through folders

        for (let folder of folders) {

            // create new direcoty path to read

            const folderpath = path.join(dirPath, folder)

            listDirectoryContent(folderpath)

        }

    } catch (error) {
        console.log(error.message)
    }


}




const targetDir = 'C:/Users/PC/Desktop/Final-Interview-Preperation/BackEnd/NODE-JS/Basic'

// to check whether the dir exists or not

if (fs.existsSync(targetDir)) {
    listDirectoryContent(targetDir)
} else {
    console.log('Directory does not exists')
}