const mongoose = require("mongoose");

const NGOSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  volunteers: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Volunteer",
  },
});

const NGO = mongoose.model("NGO", NGOSchema);

module.exports = NGO;
