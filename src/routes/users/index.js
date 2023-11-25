const createUser = require('../../api/users');
const router = require('express').Router();

router.post('/users', createUser);
module.exports = router;