const { default: mongoose } = require("mongoose");

const VoterSchema = new mongoose.Schema({
    email: String
});
module.exports = VoterSchema;