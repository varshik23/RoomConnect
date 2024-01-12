const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName:{
        type: String
    },
    dateofBirth:{
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
        unique:true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User