const stripe = require('stripe')(process.env.sk_test)
const createPaymentController = async(req, res) => {
    try {
      const {price, email} = req.body;
      const tokenEmail = req.user.email;
      if(email !== tokenEmail){
        return res.status(403).send({message: 'forbidden'});
      }
    const amount = parseInt(price * 100);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });
    res.send({clientSecret: paymentIntent.client_secret});
    } catch (error) {
      console.log(error);
    }
};
module.exports = createPaymentController;