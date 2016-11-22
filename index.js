'use strict'
const express = require('express')
const multer = require('multer')
const upload = multer()

const app = express()

app.set('port', (process.env.PORT ||  5000))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.post('/upload', upload.single('uploaded-file'), (req, res) => {
  res.send({
    originalname: req.file.originalname,
    fileSizeBytes: req.file.size
  })
})

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'))
})
