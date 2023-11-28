const {surveyController, gettingSurveys, gettingAllSurveys, valueController, commentController} = require('../../api/surveys');
const verifyToken = require('../../middlewares/verifyToken');

const router = require('express').Router();
router.post('/surveys', verifyToken, surveyController);
router.get('/surveys', verifyToken, gettingSurveys );
router.get('/allSurveys', gettingAllSurveys);
router.patch('/specificSurvey', valueController);
router.patch('/addComment', commentController);
module.exports = router;