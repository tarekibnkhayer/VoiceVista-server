const Survey = require("../../../models/Survey");

const voterController = async(req, res) => {
    const id = req.query.id;
    const email = req.body.email;
    try {
   const result = await Survey.updateOne({_id: id}, {$push:{voters: email}});
   res.send(result);
    } catch (error) {
        
    }
}

module.exports = voterController;