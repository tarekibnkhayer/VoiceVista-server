const User = require("../../../models/User");

const votedSurveys = async(req, res) => {
    const email = req.query.email;
    const id = req.query.id;
    await User.updateOne({email: email}, { $push: {votedSurveyIds: id}} );
}

module.exports = votedSurveys;