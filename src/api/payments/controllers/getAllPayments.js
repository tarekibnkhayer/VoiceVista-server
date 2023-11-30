const Payment = require("../../../models/Payment")

const getAllPayments = async(req, res) => {
    const result = await Payment.find();
    res.send(result);
};
module.exports = getAllPayments;