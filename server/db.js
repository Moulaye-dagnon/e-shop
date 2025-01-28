const mongoose = require("mongoose");

module.exports = mongoose
  .connect("mongodb://localhost:27017/website-ecommerce")
  .then(() => {
    console.log("mongoose connecter");
  })
  .catch(() => {
    console.log("mongoose non connecter");
  });
