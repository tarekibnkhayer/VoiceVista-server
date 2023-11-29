const surveyController = require('./surveyController');
const gettingSurveys = require('./gettingSurveys');
const gettingAllSurveys = require('./gettingAllSurveys');
const valueController = require('./valueController');
const commentController = require('./commentController');
const voterController = require('./voterController');
const getSelectedCatSurvey = require('./getSelectedCatSurvey')
module.exports = {
    surveyController,
    gettingSurveys,
    gettingAllSurveys,
    valueController,
    commentController,
    voterController,
    getSelectedCatSurvey
}