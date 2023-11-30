const Survey = require("../../../models/Survey");

const updateASurvey = async(req, res) => {
    const id = req.query.id;
    const updatedSurvey = req.body;
    try {
        const result = await Survey.findOneAndUpdate({_id: id}, {
            $set: {
                title: updatedSurvey.title,
                deadline: updatedSurvey.deadline,
                categories: updatedSurvey.categories,
                description: updatedSurvey.description
            }
        });
        res.send(result)
    } catch (error) {
        
    }
};

module.exports = updateASurvey;