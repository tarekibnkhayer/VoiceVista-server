const Survey = require("../../../models/Survey");

const commentController = async(req, res) => {
    const newComment = req.body;
    const id = req.query.id;
    try {
        const query = {_id: id};
        const specificDocument = await Survey.findOne(query);
        console.log(specificDocument);
        
    } catch (error) {
        
    }
};
module.exports = commentController;