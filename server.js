const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = require("./models");
const PORT = 5000;

// Initialize Express
const app = express();
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));
// Use express.static to serve the public folder as a static directory
const router = express.Router();

// By default mongoose uses callbacks for async queries, we're setting it to use promises (.then syntax) instead
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/react-searcher", {
//   useMongoClient: true
});

//Routes
app.use(require('./controllers'))


// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
  