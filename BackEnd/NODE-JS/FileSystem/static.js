let obj = {
    't': []
}
const fs = require('fs');
const path = require('path');

const dirPath = "C:\\Users\\PC\\Desktop\\t";

if (fs.existsSync(dirPath)) {
    readDir(dirPath, obj["t"]);
} else {
    console.log("byy")
    return
}



function readDir(dir, ob) {
    
    const fileAndFolders = fs.readdirSync(dir)
    let file = [];
    let folders = [];

    for (let item of fileAndFolders) {
        const itempath = path.join(dir, item);
        if (fs.statSync(itempath).isFile()) {
            file.push(item);
        } else {
            folders.push(itempath)
        }
    }

    for (let f of file) {
        ob.push(f)
    }

    for (let fol of folders) {
        let sp = fol.split('\\')
        let pt = sp[sp.length - 1]
        ob.push({
            [pt]:[]
        })
        readDir(fol, ob[ob.length-1][pt])
    }

}

console.log(JSON.stringify(obj))
