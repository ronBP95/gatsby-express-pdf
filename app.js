const { response } = require("express");
const express = require("express");
const app = express();
let fs = require('fs')

// variables
var file = fs.createReadStream('./public/pdfs/resume.pdf');
var stat = fs.statSync('./public/pdfs/resume.pdf');

app.get('/', function (req, res) {
        res.setHeader('Content-Length', stat.size);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'inline; filename=resume.pdf');
        file.pipe(res);
})

// app.set("view engine", "ejs");

app.listen(process.env.PORT || 3000, () => console.log(`app listening on port ${port}`));