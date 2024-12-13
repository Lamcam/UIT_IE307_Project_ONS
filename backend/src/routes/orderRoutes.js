const express = require('express');
const router = express.Router();
const order = require('../controllers/orderController')


router.post('/paymentmethods',order.postPaymentMethod)
router.get('/paymentmethods',order.getAllPaymentMethod)
router.post('/deliverymethods',order.postDeliveryMethod)
router.get('/deliverymethods',order.getAllDeliveryMethod)
// router.post('/add', order.addOrder);



module.exports = router;

