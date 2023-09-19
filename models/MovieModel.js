const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
    index: true,
  },
  watched: {
    type: Boolean,
    require: true,
    default: false,
  },
});

module.exports = mongoose.model("movies", MovieSchema);
