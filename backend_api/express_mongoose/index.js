const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Product = require("./models/product");
const { request } = require("http");

//Set up default mongoose connection
const mongoDB = "mongodb://127.0.0.1/farmStand";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// needed when we want to post a data
app.use(express.urlencoded({ extended: true }));

// create routes to query the data
app.get("/products", async (req, res) => {
  const products = await Product.find({});
  //   console.log(products); replaced in res.render
  res.render("products/index", { products });
});

// creating new data or products
app.get("/products/new", (req, res) => {
  res.render("products/new");
});

app.post("/products", async (req, res) => {
  //   console.log(req.body);
  const newProduct = new Product(req.body);
  await newProduct.save();
  console.log(newProduct);
  res.redirect(`/products/${newProduct._id}`);
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const foundProduct = await Product.findById(id);
  //   console.log(foundProduct); // replaced in res.render
  //   res.send("working");
  res.render("products/description", { foundProduct });
});

app.listen(3000, () => {
  console.log("APP IS LISTENING ON PORT 3000");
});
