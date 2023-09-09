
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




app.listen(3000, () => {
    console.log('server running at 3000')
})