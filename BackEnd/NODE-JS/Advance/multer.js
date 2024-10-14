
const express = require('express')

const app = express()

app.use(express.json())



const multer = require('multer');

// Set storage options

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads'); // Uploads will be stored in the 'uploads' directory
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });


app.post('/upload', upload.single('file'), (req, res) => {
    try {
        if (req.file) {

            res.send('File uploaded successfully');

        } else {

            res.status(400).send('File upload failed');
        }
    } catch (error) {

        res.status(500).send('Internal Server Error');
    }
});



app.get('/upload-form', (req, res) => {
    res.sendFile(__dirname + '/upload.html'); // Send the HTML file
});









// Multiple files at a time


const express = require('express');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

const app = express();
app.use(express.json());

app.get("/uploadfile", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.post('/upload', upload.array('file'), (req, res) => {
    if (req.files && req.files.length > 0) {
        console.log("Files uploaded successfully");
        res.end("Upload complete");
    } else {
        console.log("No files were uploaded.");
        res.status(400).send("No files were uploaded");
    }
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});









app.listen(3000, () => {
    console.log('server running at 3000')
})
