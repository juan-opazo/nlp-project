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

console.log(textapi);

const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'

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

app.post('/', function(req, res) {
    console.log(res)
    return null
    userInput = req.body.input;
    console.log(`You entered: ${userInput}`);
    const apiURL = `${baseURL}key=${process.env.API_KEY_MEANING_CLOUD}&url=${userInput}&lang=en`

    // const response = await fetch(apiURL)
    // const mcData = await response.json()
    // console.log(mcData)
    // res.send(mcData)
    /** server sends only specified data to the client with below codes
     * const projectData = {
     *  score_tag : mcData.score_tag,
     *  agreement : mcData.agreement,
     *  subjectivity : mcData.subjectivity,
     *  confidence : mcData.confidence,
     *  irony : mcData.irony
     * }
     * res.send(projectData);
     * */
})