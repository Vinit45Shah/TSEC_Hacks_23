const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicineSchema = new Schema({
  commonname: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  expiry: {
    type: Date,
    required: true,
  },
  scientificname: {
    type: String,
  },
  manufacturer: {
    type: String,
  },
  addedby: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  time: {
    type: String,
  },
  ownedby: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "NGO",
  },
  sendto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  transferredby1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Volunteer",
  },
  transferredby2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Volunteer",
  },
});

const medicines = mongoose.model("Medicine", medicineSchema);

module.exports = medicines;
