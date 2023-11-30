const {createUser, roleUpgradeToPro, checkRole, getVotedSurveyIds, getAllUsers, getRoleBasedUsers, roleChange} = require('../../api/users');
const votedSurveys = require('../../api/users/controllers/votedSurveys');
const verifyToken = require('../../middlewares/verifyToken');
const router = require('express').Router();
router.post('/users', createUser);
router.patch('/users',verifyToken, roleUpgradeToPro);
router.get('/user-role', checkRole);
router.patch('/votedSurveys', votedSurveys);
router.get('/votedSurveyIds', getVotedSurveyIds);
router.get('/users', getAllUsers);
router.get('/roleBasedUsers', getRoleBasedUsers);
router.patch('/roleChange', roleChange);
module.exports = router;