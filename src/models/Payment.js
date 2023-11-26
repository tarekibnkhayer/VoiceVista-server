const mongoose = require('mongoose');
const PaymentSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date: Date,
});
const Payment = mongoose.model('Payment', PaymentSchema);
module.exports = Payment;