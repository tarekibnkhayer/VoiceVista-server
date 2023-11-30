const Survey = require("../../../models/Survey");

const getSelectedSurveyByTitle = async(req, res) => {
    const selectedTitle = req.query.selectedTitle;
    const query = {title: selectedTitle}
    try {
        const result = await Survey.find(query);
        res.send(result);
    } catch (error) {
        
    }
}
module.exports = getSelectedSurveyByTitle;