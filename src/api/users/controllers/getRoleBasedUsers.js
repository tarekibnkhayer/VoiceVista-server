const User = require("../../../models/User");

const getRoleBasedUsers = async(req, res) => {
    const role = req.query.role;
    const result = await User.find({role: role});
    res.send(result);
};
module.exports = getRoleBasedUsers;