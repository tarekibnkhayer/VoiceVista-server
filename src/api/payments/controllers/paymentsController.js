const Payment = require("../../../models/Payment");

const paymentsController = async(req, res) => {
    try {
        const paymentData = req.body;
        const email = req.body.email;
        const tokenEmail = req.user.email;
        if(email !== tokenEmail){
            return res.status(403).send({message: 'forbidden'});
          }
    const payment = new Payment(paymentData);
    const result =  await payment.save();
    res.send(result);
    } catch (error) {
        console.log(error);
    }
};

module.exports = paymentsController;