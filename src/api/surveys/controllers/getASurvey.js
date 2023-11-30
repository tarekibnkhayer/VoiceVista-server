const Survey = require("../../../models/Survey");

const getASurvey = async(req, res) => {
    const id = req.query.id;
    const query = {_id: id};
    const result = await Survey.findOne(query);
    res.send(result);
};

module.exports = getASurvey;