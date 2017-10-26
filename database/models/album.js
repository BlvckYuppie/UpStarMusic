// Todo: create Album Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema

var AlbumSchema = new Schema({
      title: String,
      date: {
        type: Date,
        default: Date.now
      },
      copiesSold: Number,
      numberTracks: Number,
      image: String,
      revenue: Number
});


module.exports = AlbumSchema;
