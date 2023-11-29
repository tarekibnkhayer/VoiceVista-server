const Survey = require("../../../models/Survey");

const getVoters = async(req, res) => {
    const id = req.query.id;
    try {
        const survey = await Survey.findById(id);
        const userEmails = survey.voters;
        res.send(userEmails);
    } catch (error) {
        
    }
}

module.exports = getVoters;