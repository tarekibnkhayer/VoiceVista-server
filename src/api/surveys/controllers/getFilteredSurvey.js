const Survey = require("../../../models/Survey");

const getFilteredSurvey = async(req, res) => {
    const minVotes = req.query.minVotes;
    const maxVotes = req.query.maxVotes;
    try {
        const result = await Survey.find({
            totalVotes: {
                $gte: minVotes,
                $lte: maxVotes
            }
        });
        res.send(result);
    } catch (error) {
        
    }
};

module.exports = getFilteredSurvey;