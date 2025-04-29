const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
  publishedYear: {
    type: Date,
    default: Date.now,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
  },
  publishedDate: {
    type: Date,
    default: Date.now,
  },
});

let BOOK = mongoose.model("book", bookSchema);
module.exports = BOOK;
