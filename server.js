const express = require('express')
const app = express()
const fileUpload = require('express-fileupload')
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))
app.use(fileUpload());
app.use(express.static('public'));

app.post('/upload', function (req, res) {
    const {
        name,
        mimetype,
    } = req.files.userfile
    const size = req.files.userfile.data.toString().length
    res.json({
        name,
        mimetype,
        size
    })
});