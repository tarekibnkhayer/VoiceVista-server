const {createUser, roleUpgradeToPro} = require('../../api/users')
const verifyToken = require('../../middlewares/verifyToken');
const router = require('express').Router();
router.post('/users', createUser);
router.patch('/users',verifyToken, roleUpgradeToPro);
module.exports = router;