const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let GenreSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  iconUrl: {
    type: String,
  },
  popularBooks: [
   {
    type : mongoose.Schema.Types.ObjectId,
    ref : "book",
    required: true
   }
  ],
});

let GENRE = mongoose.model("genre", GenreSchema);
module.exports = GENRE;
