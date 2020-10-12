const express = require('express')
const app = express()
const fetch = require('node-fetch');
var cors = require('cors')
app.use(cors())
app.get('/list', function (req, res) {

fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?page=0&size=20&api_key=eAiagrBeKGZr110YNK2Hoy6Lim5trwP7Yb7cW4JX')
    .then(res => res.json())
    .then(json => res.send(json));
})


app.get('/date', function (req, res) {
    fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?page=0&size=20&api_key=eAiagrBeKGZr110YNK2Hoy6Lim5trwP7Yb7cW4JX')
        .then(res => res.json())
        .then(json => res.send(json));
    })
 
app.listen(3001)