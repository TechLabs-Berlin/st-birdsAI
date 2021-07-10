const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./backend/config/db");

//Load env variables
dotenv.config({ path: "./backend/config/config.env" });

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Enable cors
app.use(cors());

// Set static folder for frontend
app.use(express.static(path.join(__dirname, "frontend/birdsAI_app")));

// const amazonData = require('./backend/routes/amazons.js')


app.get('/', (req, res) => {
  res.send('Hello birdsAI')
})

// flask data
app.get('/api/v1/amazon/area', cors(), function (req, res) {
  console.log('fetching choropleth data from flask')
  request('http://127.0.0.1:5000/sumarea', function (error, response, body) {
    console.error('error:', error); // Print the error
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the data received
    res.send(body); //Display the response on the website
  });
});

// PORT

const PORT = process.env.PORT || 8080;


app.listen(PORT, () =>
  console.log(
    `SERVER IS RUNNING IN ${process.env.NODE_ENV} mode on port ${PORT}`
  ));

// 404 Handler
app.use((req, res, next) => {
  next(createError(404));
})

// Base Route
app.get('/', (req, res) => {
  res.send('invalid endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/birdsAI_app/index.html'));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

