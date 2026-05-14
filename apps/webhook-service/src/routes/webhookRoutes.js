const express = require('express');
const controller = require('../controllers/webhookController');
const verifyShopifyWebhook = require('../middleware/verifyShopifyWebhook');

const router = express.Router();

router.post(
  '/orders/create',
  verifyShopifyWebhook,
  controller.handleOrderCreated
);

module.exports = router;