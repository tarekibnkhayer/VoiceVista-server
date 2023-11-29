const createUser = require('./userController');
const roleUpgradeToPro = require('./roleUpgradeToPro');
const checkRole = require('./checkRole');
const getVotedSurveyIds = require('./getVotedSurveyIds');
module.exports = {
    createUser,
    roleUpgradeToPro,
    checkRole,
    getVotedSurveyIds
}