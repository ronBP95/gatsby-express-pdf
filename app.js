const { response } = require("express");
const express = require("express");
const app = express();
let fs = require('fs')

// variables
const port = process.env.PORT || 5000
var file = fs.createReadStream('./public/pdfs/resume.pdf');
var stat = fs.statSync('./public/pdfs/resume.pdf');

app.get('/', function name(req, res) {
        res.send('Hello World')
})

app.get('/resume', function (req, res) {
        res.setHeader('Content-Length', stat.size);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'inline; filename=resume.pdf');
        file.pipe(res);
})

// app.set("view engine", "ejs");

app.listen(port, () => console.log(`app listening on port ${port}`));