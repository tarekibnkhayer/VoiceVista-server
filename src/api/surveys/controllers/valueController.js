const Survey = require("../../../models/Survey");

const valueController = async(req, res) => {
    const {value} = req.body;
    const id = req.query.id;
    try{
        const result = await Survey.updateOne({_id: id} , { $inc: {[value]: 1}});
        if(value === 'yes' || value === 'no'){
            await Survey.updateOne({_id: id}, {$inc:{['totalVotes']: 1} });
        };
        res.send(result);
    }catch(error){
        console.log(error);
    }
    
}
module.exports = valueController;