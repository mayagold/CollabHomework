const express = require('express');
const router = express.Router();

var music = require('../models/music.js');

var newMusic = [


// array of fav albums


]



// seed route


router.get('/', (req,res)=>{
  Music.create(newMusic, function(err){
    if(err){
      console.log(err);
      res.send('Could not seed database.');
    } else {
      console.log('Seeded database with all the quality tunes');
      res.redirect('/music');
    }
  });
});

router.get('/dropdatabase', (req,res)=>{
  Music.collection.drop();
  res.send('Dropped database.');
});


module.exports = router; 
