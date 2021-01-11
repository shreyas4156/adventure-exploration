const express = require("express");
const mongoose = require("mongoose");
const Places = require("./models/Places");
const States = require("./models/States");
require("dotenv").config();
const app = express();

//middlewares
app.use(express.json());

//Connecting mongodb
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Mongodb connected"))
  .catch((error) => console.log(error));

//Routing
app.get("/states", async (req, res) => {
  const states = await States.find().catch(res.status(404));
  if (!states) res.status(404).send("No states");
  res.status(200).json(states);
});

app.get("/states/:name", async (req, res) => {
  const places = await Places.find()
    .filter((place) => place === req.params.name)
    .catch(res.status(404));
  if (!places) res.status(404).send("No places");
  res.json(places);
});
app.get("/places", async (req, res) => {
  const places = await Places.find().catch(res.status(404));
  if (!places) res.status(404).send("No places");
  res.status(200).json(places);
});

app.get("/places/:name", async (req, res) => {
  const place = await Places.find()
    .filter((place) => place === req.params.name)
    .catch(res.status(404));
  if (!place) res.status(404).send("No places");
  res.json(place);
});

app.listen(process.env.PORT, () => {
  console.log(`Listerning on port ${process.env.PORT}`);
});
