const mongoose = require('mongoose');
const commentSchema = require('./comment');
const VoterSchema = require('./Voter');

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
    yes: Number,
    no: Number,
    like: Number,
    dislike:Number,
    report: Number,
    comments: [commentSchema],
    voters: [String],
    totalVotes : {
        type: Number,
        default: 0
    }
},
{
    timestamps: true
})

const Survey = mongoose.model('Survey', SurveySchema);
module.exports = Survey;