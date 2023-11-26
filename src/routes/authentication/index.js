const {jwtController, logout} = require("../../api/authentication");

const router = require('express').Router();
router.post('/jwt', jwtController);
router.post('/logout', logout);

module.exports = router;