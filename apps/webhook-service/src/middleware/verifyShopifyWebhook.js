const crypto = require('crypto');
const {
  SHOPIFY_WEBHOOK_SECRET
} = require('../config/env');

module.exports = function (
  req,
  res,
  next
) {
  const hmac =
    req.get('X-Shopify-Hmac-Sha256');

  if (!hmac) {
    return res.status(401).send('Unauthorized');
  }

  next();
};