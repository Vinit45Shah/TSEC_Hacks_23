const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
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
  },
  points: {
    type: Number,
    default: 0,
  },
  medicines: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Medicine",
  },
});

const users = mongoose.model("User", userSchema);

module.exports = users;
