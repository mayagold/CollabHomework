const mongoose = require('mongoose');

// model

const musicSchema = mongoose.Schema({
  artist: String,
  albumname: String,
  year: String,
  picture: String
})

const music = mongoose.model('Music', musicSchema);

module.exports = music;
