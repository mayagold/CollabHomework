const express = require('express');
const router = express.Router();

var Music = require('../models/music.js');

// seed data

var newMusic = [
  {
    Artist: "The Beatles",
    Album: "Abbey Road",
    Year: "1969",
    Picture: "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg"
  },
  {
    Artist: "POND",
    Album: "The Weather",
    Year: "2017",
    Picture: "https://media.pitchfork.com/photos/5929c402eb335119a49ed852/1:1/w_320/b5d8662d.jpg"
  },
  {
    Artist: "Amy Winehouse",
    Album: "Back to Black",
    Year: "2006",
    Picture: "https://i.scdn.co/image/956e8cece8267a7ebd76ea48f5904acbb0f1b107"
  },
  {
    Artist: "Arctic Monkeys",
    Album: "AM",
    Year: "2013",
    Picture: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Arctic_Monkeys_-_AM.png/220px-Arctic_Monkeys_-_AM.png"
  },
  {
    Artist: "Tame Impala",
    Album: "Lonerism",
    Year: "2012",
    Picture: "https://upload.wikimedia.org/wikipedia/en/7/7e/Tame_Impala_Lonerism_Cover.jpeg"
  },
  {
    Artist: "Pink Floyd",
    Album: "Dark Side of the Moon",
    Year: "1973",
    Picture: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png"
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
