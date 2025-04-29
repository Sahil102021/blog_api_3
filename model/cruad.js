let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userProfileSchema = new Schema({
  name: {
    type: String,
  },
  contact: {
    type: String,
  },
  number: {
    type: String,
  },
  profielDate: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
});

let USERPROFILE = mongoose.model("userProfileSchema", userProfileSchema);
module.exports = USERPROFILE;
