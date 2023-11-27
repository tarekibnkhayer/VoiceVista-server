const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    categories : {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    },

},
{
    timestamps: true
})

const Survey = mongoose.model('Survey', SurveySchema);
module.exports = Survey;