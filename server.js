const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = require("./models");
const PORT = process.env.PORT || 5000;
require('dotenv').config()

// Initialize Express
const app = express();
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
// Use express.static to serve the public folder as a static directory
const router = express.Router();

// By default mongoose uses callbacks for async queries, we're setting it to use promises (.then syntax) instead
// Connect to the Mongo DB
//   useMongoClient: true
mongoose.Promise = Promise;
if (process.env.MONGODB_URI){
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect("mongodb://localhost/react-searcher");
}

//Routes
app.use(require('./controllers'))


// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
  