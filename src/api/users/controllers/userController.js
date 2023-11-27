const User = require('../../../models/User');

const createUser = async(req, res) => {
    try{
        const userData = req.body;
        const user = new User(userData);
        const query = {email: userData.email};
        const isExist = await User.findOne(query);
        if(isExist){
            return res.send({message: "User Already Exist"});
          }
        const result =  await user.save();
        res.send(result);
    }catch(error){
        console.log(error);
    };  
}

module.exports = createUser;