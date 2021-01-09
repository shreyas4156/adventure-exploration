const mongoose = require("mongoose");

const Places = mongoose.model(
  "places",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
    },
    description: {
      type: String,
      required: true,
    },
  })
);

module.exports = Places;
