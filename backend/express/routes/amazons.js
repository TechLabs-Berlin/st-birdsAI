const express = require("express");
const app = express();


const amazonRoute = express.Router();

// schema created for database
let amazonModel = require("../models/Amazon")


// Get all data
amazonRoute.route('/deforestpoints').get((req, res) => {
    amazonModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// flask data
amazonRoute.get('/home', function (req, res) {
  request('http://127.0.0.1:5000//sumarea', function (error, response, body) {
    console.error('error:', error); // Print the error
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the data received
    res.send(body); //Display the response on the website
  });
});

module.exports = amazonRoute;
