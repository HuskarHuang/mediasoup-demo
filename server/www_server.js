'use strict'

const https = require('https')
const express = require('express')
const serve_index = require('serve-index')
const fs = require('fs')

const options = {
    key : fs.readFileSync('./cert/'),
    cert : fs.readFileSync('./cert/')
}

const app = express()
app.use(serve_index('./public'))
app.use(express.static('./public'))

const https_server = https.createServer(options, app);
https_server.listen(443, '0.0.0.0')