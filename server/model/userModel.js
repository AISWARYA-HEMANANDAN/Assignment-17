const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 3,
        max: 10,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        min: 6
    }
}, { timeStamps: true })

const User = new mongoose.model("User", userSchema)
module.exports = User