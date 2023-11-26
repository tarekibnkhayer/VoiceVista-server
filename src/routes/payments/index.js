const {createPaymentController, paymentsController} = require('../../api/payments');
const router = require('express').Router();
router.post('/create-payment-intent', createPaymentController);
router.post('/payments', paymentsController);
module.exports = router;