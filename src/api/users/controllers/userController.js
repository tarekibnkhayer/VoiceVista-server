const User = require('../../../models/User');

const createUser = async(req, res) => {
    try{
        const userData = req.body;
        const user = new User(userData);
        const result =  await user.save();
        res.send(result);
    }catch(error){
        console.log(error);
    };  
}

module.exports = createUser;