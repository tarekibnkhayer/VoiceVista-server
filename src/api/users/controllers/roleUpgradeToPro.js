const User = require('../../../models/User');
const roleUpgradeToPro = async(req, res) => {
    try {
        const email = req?.query?.email;
        console.log('hello pro ',email);
        const tokenEmail = req.user.email;
        if(email !== tokenEmail){
            return res.status(403).send({message: 'forbidden'});
          };
          const filter = {email: email};
          const updateDoc = {
            $set: {
                role: 'pro-user'
            }
          };
          const result = await  User.updateOne(filter, updateDoc);
          res.send(result);
    } catch (error) {
        console.error(error);
    }
};
module.exports = roleUpgradeToPro;