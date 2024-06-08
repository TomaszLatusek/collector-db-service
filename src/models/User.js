const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String, // You would typically hash passwords in a real application
});

const User = mongoose.model('User', userSchema);

module.exports = User;
