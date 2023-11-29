const User = require("../../../models/User");

const getVotedSurveyIds = async(req, res) => {
    const email = req.query.email;
    const result = await User.find({email: email}).select('votedSurveyIds');
    res.send(result);
}

module.exports = getVotedSurveyIds;