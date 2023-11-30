const User = require("../../../models/User");

const roleChange = async(req, res) => {
    const id = req.query.id;
const role = req.query.role;
    try {
    const result = await User.findOneAndUpdate({_id: id}, {
        $set: {
            role: role
        }
    });
    res.send(result);
    } catch (error) {
        
    }
};

module.exports = roleChange;