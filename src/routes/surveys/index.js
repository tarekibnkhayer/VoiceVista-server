const {surveyController, gettingSurveys, gettingAllSurveys, valueController, commentController, voterController, getSelectedCatSurvey, getFeaturedSurvey, getFilteredSurvey, getSelectedSurveyByTitle, updateASurvey, getASurvey} = require('../../api/surveys');
const verifyToken = require('../../middlewares/verifyToken');

const router = require('express').Router();
router.post('/surveys', verifyToken, surveyController);
router.get('/surveys', verifyToken, gettingSurveys );
router.get('/allSurveys', gettingAllSurveys);
router.get('/selectedSurveyCat', getSelectedCatSurvey);
router.patch('/specificSurvey', valueController);
router.patch('/updateSurvey', updateASurvey);
router.patch('/addComment', commentController);
router.patch('/addVoter', voterController);
router.get('/featuredSurvey', getFeaturedSurvey);
router.get('/filterSurveyByVote', getFilteredSurvey);
router.get('/selectedSurveyTitle', getSelectedSurveyByTitle);
router.get('/getASpecificSurvey', getASurvey);
module.exports = router;