const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema(
    {
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
        qualification: {
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
    }
);

const doctors = mongoose.model("Doctor", doctorSchema);

module.exports = doctors;