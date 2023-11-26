const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    role: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;