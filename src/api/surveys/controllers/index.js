const surveyController = require('./surveyController');
const gettingSurveys = require('./gettingSurveys');
const gettingAllSurveys = require('./gettingAllSurveys');
const valueController = require('./valueController');
const commentController = require('./commentController');
const voterController = require('./voterController');
const getSelectedCatSurvey = require('./getSelectedCatSurvey');
const getFeaturedSurvey = require('./getFeaturedSurvey');
const getFilteredSurvey = require('./getFilteredSurvey');
const getSelectedSurveyByTitle = require('./getSelectedSurveyByTitle');
const updateASurvey = require('./updateASurvey');
const getASurvey = require('./getASurvey');
module.exports = {
    surveyController,
    gettingSurveys,
    gettingAllSurveys,
    valueController,
    commentController,
    voterController,
    getSelectedCatSurvey,
    getFeaturedSurvey,
    getFilteredSurvey,
    getSelectedSurveyByTitle,
    updateASurvey,
    getASurvey
}