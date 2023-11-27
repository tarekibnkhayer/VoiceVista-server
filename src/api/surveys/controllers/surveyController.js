const Survey = require("../../../models/Survey");


const surveyController = async(req, res) => {
    try {
        const email = req.query.email;
    const tokenEmail = req.user.email;
    const surveyData = req.body
    if(email !== tokenEmail){
        return res.status(403).send({message: 'forbidden'});
      };
      const survey = new Survey(surveyData);
     const result = await  survey.save();
    res.send(result) ;
    } catch (error) {
        console.log(error);
    }
}
module.exports = surveyController;