const nodemailer = require('nodemailer');
const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  ORDER_NOTIFICATION_EMAIL
} = require('../config/env');

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: false,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS
  }
});

exports.sendOrderNotification =
  async function (order) {
    await transporter.sendMail({
      from: SMTP_USER,
      to: ORDER_NOTIFICATION_EMAIL,
      subject: `New Order ${order.name}`,
      html: `
        <h2>New Shopify Order</h2>
        <p>Customer: ${order.customer?.first_name}</p>
        <p>Total: ${order.total_price}</p>
      `
    });
  };