const User = require("../../../models/User");

const getAllUsers = async(req, res) => {
    try {
        const result = await User.find();
        res.send(result);
    } catch (error) {
        
    }
};
module.exports = getAllUsers;
