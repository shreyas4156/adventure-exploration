const mongoose = require("mongoose");

const States = mongoose.model(
  "states",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  })
);

module.exports = States;
