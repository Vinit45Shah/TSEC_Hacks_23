const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://mangodb:mangodb@cluster0.jjs8xrw.mongodb.net/?retryWrites=true&w=majority",
  () => {
    console.log("Conected to Mongo");
  }
);
