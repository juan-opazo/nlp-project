const dotenv = require('dotenv')
dotenv.config()
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')


const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/api', function(req, res) {
    userInput = req.body.input;
    console.log(`You entered: ${userInput}`);
    const apiURL = `${baseURL}key=${process.env.API_KEY}&url=${userInput}&lang=en`
    const response = await fetch(apiURL)
    const data = await response.json()
    res.send(data)
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})
