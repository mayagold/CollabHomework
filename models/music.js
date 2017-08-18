const mongoose = require('mongoose');

// model

const musicSchema = mongoose.Schema({
  artist: String,
  albumname: String,
  year: String,
  picture: String
})

module.exports = mongoose.model('Music', musicSchema);
