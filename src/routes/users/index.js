const {createUser, roleUpgradeToPro, checkRole} = require('../../api/users')
const verifyToken = require('../../middlewares/verifyToken');
const router = require('express').Router();
router.post('/users', createUser);
router.patch('/users',verifyToken, roleUpgradeToPro);
router.get('/user-role', checkRole);
module.exports = router;