const axios = require('axios');
const express = require('express')
const app = express()
const port = 3004
const fs = require("fs");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//
  app.get('/', (req, res) => {
    for (i = 1; i < 7; i++) {
    axios.get('https://api.nasa.gov/planetary/apod?date=2002-09-0' + i + '&api_key=09AMghqHrmdU0Jmx4cCWLdOBTWFSdsfgeHqQFtgV&hd=True')
    .then((response) => {
    
      fs.appendFile("nasa.txt", "Title: " + response.data.title + "\n" +
      "url: " + response.data.url + "\n" + "date: " + response.data.date + "\n" + "copyright: " + response.data.copyright + "\n" + "\n", (err) => {
        if (err) res.send(err)});
      res.send("file made")
      
      /*
        console.log(input)
        
        res.send(input).catch(error => {
          res.send(error)
        })
        */
    }
  ).catch(error => {
      res.send(error)
    })};
  })





