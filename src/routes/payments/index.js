const {createPaymentController, paymentsController, getAllPayments} = require('../../api/payments');
const verifyToken = require('../../middlewares/verifyToken');
const router = require('express').Router();
router.post('/create-payment-intent', verifyToken, createPaymentController);
router.post('/payments', verifyToken, paymentsController);
router.get('/payments', getAllPayments);
module.exports = router;