const mongoose = require('mongoose')

const usersSchema =mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    //we need to know when a user was created or when they logged in
    date: {
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model('usersdb', usersSchema)