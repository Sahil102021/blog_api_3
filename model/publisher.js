const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let PublisherSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  contactEmail: {
    type: String,
    trim: true,
    match: /.+\@.+\..+/, // Basic email format validation
  },
  phone: {
    type: String,
    trim: true,
  },
  // website: {
  //     type: String,
  //     trim: true,
  //     match: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/ // Basic URL validation
  // },
  foundedYear: {
    type: Number,
    min: 1400, // Assume modern publishers post-1400
    max: new Date().getFullYear(),
  },
  // logo: {
  //     type: String, // Path or URL to the logo
  //     trim: true
  // },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "book", // Reference to the Book model
    },
  ],
});
let PUBLISHER = mongoose.model("publisher", PublisherSchema);
module.exports = PUBLISHER;
