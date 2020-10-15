const express = require('express')
const app = express()
const fetch = require('node-fetch');
var cors = require('cors')
var axios =require('axios');
app.use(cors())
app.get('/list', function (req, res) {

fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?page='+req.query.page+'&size=20&api_key=eAiagrBeKGZr110YNK2Hoy6Lim5trwP7Yb7cW4JX')
    .then(res => res.json())
    .then(json => res.send(json));
})
app.get('/search', function (req, res) {
    var config = {
        method: 'get',
        url: 'https://api.nasa.gov/neo/rest/v1/neo/'+req.query.q+'?api_key=eAiagrBeKGZr110YNK2Hoy6Lim5trwP7Yb7cW4JX',
        headers: { }
      };
      
      axios(config)
      .then( (response)=> {
          
         res.send(response.data)
        
      })
      .catch( (error)=> {
          
     res.send("undefined")
      });
    })
    app.get('/searchdate', function (req, res) {
        console.log(req.query.start)
        var config = {
            method: 'get',
            url: 'https://api.nasa.gov/neo/rest/v1/feed?start_date='+req.query.start+'&end_date='+req.query.end+'&detailed=true&api_key=eAiagrBeKGZr110YNK2Hoy6Lim5trwP7Yb7cW4JX',
            headers: { }
          };
          
          axios(config)
          .then( (response)=> {
          
             res.send(response.data)
            
          })
          .catch( (error)=> {
              
         res.send("undefined")
          });
        })
app.get('/date', function (req, res) {
    fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?page=0&size=20&api_key=eAiagrBeKGZr110YNK2Hoy6Lim5trwP7Yb7cW4JX')
        .then(res => res.json())
        .then(json => res.send(json));
    })
 
app.listen(3001)