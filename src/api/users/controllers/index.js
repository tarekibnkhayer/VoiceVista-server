const createUser = require('./userController');
const roleUpgradeToPro = require('./roleUpgradeToPro');
const checkRole = require('./checkRole');
const getVotedSurveyIds = require('./getVotedSurveyIds');
const getAllUsers = require('./getAllUsers');
const getRoleBasedUsers = require('./getRoleBasedUsers');
const roleChange = require('./roleChange');
module.exports = {
    createUser,
    roleUpgradeToPro,
    checkRole,
    getVotedSurveyIds,
    getAllUsers,
    getRoleBasedUsers,
    roleChange
}