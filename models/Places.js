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
    image: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
  })
);

module.exports = Places;
