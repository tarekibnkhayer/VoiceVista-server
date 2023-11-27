const User = require('../../../models/User');

const checkRole = async(req, res) => {
    const email = req.query.email;
    console.log(email, 'email');
    const query = {email: email}
    const result = await User.findOne(query);
    console.log(result);
    res.send(result);
}
module.exports = checkRole;