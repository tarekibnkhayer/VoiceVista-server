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
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;