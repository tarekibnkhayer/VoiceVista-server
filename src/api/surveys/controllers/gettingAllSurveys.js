const Survey = require("../../../models/Survey");

const gettingAllSurveys = async(req, res) => {
    const result = await Survey.find();
    res.send(result);
}

module.exports = gettingAllSurveys;