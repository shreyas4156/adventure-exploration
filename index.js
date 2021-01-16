const express = require("express");
const mongoose = require("mongoose");
const Places = require("./models/Places");
const States = require("./models/States");
const cors = require("cors");
require("dotenv").config();
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
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
  const places = await Places.find();
  p = places.filter((place) => place.state === req.params.name);
  if (!p || p.length === 0) res.status(404).send("No places");
  res.json(p);
});
app.get("/places", async (req, res) => {
  const places = await Places.find().catch(res.status(404));
  if (!places) res.status(404).send("No places");
  res.status(200).json(places);
});

app.get("/places/:name", async (req, res) => {
  const place = await Places.find();
  const p = place.filter((place) => place.state === req.params.name);
  if (!p || p.length === 0) res.status(404).send("No places");
  res.json(p);
});

app.listen(process.env.PORT, () => {
  console.log(`Listerning on port ${process.env.PORT}`);
});
