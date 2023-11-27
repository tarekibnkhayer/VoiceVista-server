const Survey = require("../../../models/Survey");

const gettingSurveys = async(req, res) => {
    const email = req.query.email;
    const tokenEmail = req.user.email;
    if(email !== tokenEmail){
        return res.status(403).send({message: 'forbidden'});
      };
    const query = {email: email};
    const result = await Survey.find(query);
    res.send(result);
}
module.exports = gettingSurveys;