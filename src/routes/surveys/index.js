const {surveyController, gettingSurveys, gettingAllSurveys, valueController, commentController, voterController, getSelectedCatSurvey, getFeaturedSurvey, getFilteredSurvey} = require('../../api/surveys');
const verifyToken = require('../../middlewares/verifyToken');

const router = require('express').Router();
router.post('/surveys', verifyToken, surveyController);
router.get('/surveys', verifyToken, gettingSurveys );
router.get('/allSurveys', gettingAllSurveys);
router.get('/selectedSurveyCat', getSelectedCatSurvey);
router.patch('/specificSurvey', valueController);
router.patch('/addComment', commentController);
router.patch('/addVoter', voterController);
router.get('/featuredSurvey', getFeaturedSurvey);
router.get('/filterSurveyByVote', getFilteredSurvey);
module.exports = router;