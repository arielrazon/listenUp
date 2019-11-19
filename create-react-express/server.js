const express = require("express");
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 3001;
const app = express();
const scripts = require('./scripts/seedDB.js');
const mongoose = require('mongoose')
const routes = require("./routes");

//Mongoose 
mongoose.connect('mongodb://localhost:27017/projectDB', {useNewUrlParser: true});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.use(routes)
scripts.seedPetSitters();

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
