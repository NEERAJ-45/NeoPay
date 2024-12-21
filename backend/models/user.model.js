const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    upi_id: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        default: 0,
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
