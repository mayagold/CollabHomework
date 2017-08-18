var express = require('express');
var router = express.Router();

var Music = require('../models/music.js');

// seed data

var newMusic = [
  {
    artist: "The Beatles",
    albumname: "Abbey Road",
    year: "1969",
    picture: "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg"
  },
  {
    artist: "POND",
    albumname: "The Weather",
    year: "2017",
    picture: "https://media.pitchfork.com/photos/5929c402eb335119a49ed852/1:1/w_320/b5d8662d.jpg"
  },
  {
    artist: "Amy Winehouse",
    albumname: "Back to Black",
    year: "2006",
    picture: "https://i.scdn.co/image/956e8cece8267a7ebd76ea48f5904acbb0f1b107"
  },
  {
    artist: "Arctic Monkeys",
    albumname: "AM",
    year: "2013",
    picture: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Arctic_Monkeys_-_AM.png/220px-Arctic_Monkeys_-_AM.png"
  },
  {
    artist: "Tame Impala",
    albumname: "Lonerism",
    year: "2012",
    picture: "https://upload.wikimedia.org/wikipedia/en/7/7e/Tame_Impala_Lonerism_Cover.jpeg"
  },
  {
    artist: "Pink Floyd",
    albumname: "Dark Side of the Moon",
    year: "1973",
    picture: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png"
  }
];

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

// drop the database

router.get('/dropdatabase', (req,res)=>{
  Music.collection.drop();
  res.send('Dropped database.');
});

module.exports = router;
