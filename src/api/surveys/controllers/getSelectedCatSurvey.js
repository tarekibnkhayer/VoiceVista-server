const Survey = require("../../../models/Survey");

const getSelectedCatSurvey = async(req, res) => {
    const selectedCategory = req.query.selectedCategory;
    try {
       if(selectedCategory){
        const result = await Survey.find({categories: selectedCategory});
        return res.send(result);
       }
       const result = await Survey.find();
    res.send(result);
    } catch (error) {
        console.log(error);
    }
};
module.exports = getSelectedCatSurvey;