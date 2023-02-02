const mongoose = require("mongoose");

const VolunteerSchema = new mongoose.Schema({
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
    validate(value) {
      if (!validator.isMobilePhone(`${value}`)) {
        throw new Error("Invalid phone number.");
      }
    },
  },
  ngo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "NGO",
  },
});

const VolunteerModel = mongoose.model("Volunteer", VolunteerSchema);

module.exports = VolunteerModel;
