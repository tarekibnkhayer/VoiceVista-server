const Survey = require("../../../models/Survey");

const commentController = async(req, res) => {
    const newComment = req.body;
    const id = req.query.id;
    try {
        const result  = await Survey.updateOne({_id: id}, {$push:{comments: newComment}}); 
        res.send(result);
    } catch (error) {
        
    }
};
module.exports = commentController;