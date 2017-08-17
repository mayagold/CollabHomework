//dependencies, models
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 3000 || process.env.PORT;

//hello world
app.get('/', (req,res)=>{
  res.send('hello world')
});

//listening in node
app.listen(port, function(){
  console.log('hi this is our collab app');
});
