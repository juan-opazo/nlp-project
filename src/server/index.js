const dotenv = require('dotenv')
dotenv.config()
var aylien = require('aylien_textapi')
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

let textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
})

// let meaningcloudapi = new meaningCloud({
//     application_key: process.env.API_KEY_MEANING_CLOUD
// })

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})