require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 5001,
  SHOPIFY_WEBHOOK_SECRET:
    process.env.SHOPIFY_WEBHOOK_SECRET,
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASS: process.env.SMTP_PASS,
  ORDER_NOTIFICATION_EMAIL:
    process.env.ORDER_NOTIFICATION_EMAIL
};