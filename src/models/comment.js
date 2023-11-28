const { default: mongoose } = require("mongoose");

const commentSchema = new mongoose.Schema({
    comment: String,
    user: String,
    photo: String
});
module.exports = commentSchema;