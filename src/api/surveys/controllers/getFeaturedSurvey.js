const Survey = require("../../../models/Survey")

const getFeaturedSurvey = async(req, res) => {
    try {
        const result = await Survey.find({}).sort({totalVotes: -1}).limit(6);
        res.send(result);
    } catch (error) {
        
    }
};

module.exports = getFeaturedSurvey;