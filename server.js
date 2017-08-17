//dependencies, models
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 3000 || process.env.PORT;

//controllers
var musicController = require('./controllers/musicController');
var seedController = require('./controllers/seedController');

app.use('/music', musicController);
app.use('/seed', seedController);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

//hello world
app.get('/', (req,res)=>{
  res.send('hello world')
});

//connect to mongo
mongoose.connect('mongodb://localhost/music_app');
mongoose.connection.once('open', ()=>{
  console.log('connected to mongo');
})

//listening in node
app.listen(port, function(){
  console.log('hi this is our collab app');
});
