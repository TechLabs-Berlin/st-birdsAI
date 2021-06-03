const mongoose = require("mongoose");
const Product = require("./models/product");

//Set up default mongoose connection
const mongoDB = "mongodb://127.0.0.1/farmStand";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// const p = new Product({
//   name: "Ruby Grapefruit",
//   price: 1.99,
//   category: "fruit",
// });
// p.save()
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Function call

const seedProducts = [
  {
    name: "Fairy Eggplant",
    price: 1.0,
    category: "vegetable",
  },
  {
    name: "Organic Goddess Melon",
    price: 4.99,
    category: "fruit",
  },
  {
    name: "Organic Mini Seedless Watermelon",
    price: 3.99,
    category: "fruit",
  },
  {
    name: "Organic Celery",
    price: 1.59,
    category: "fruit",
  },
  {
    name: "Chocolate Whole Milk",
    price: 2.59,
    category: "dairy",
  },
];

Product.insertMany(seedProducts)
  .then((res) => {
    console.log("Data inserted"); // Success
  })
  .catch((error) => {
    console.log(error); // Failure
  });
