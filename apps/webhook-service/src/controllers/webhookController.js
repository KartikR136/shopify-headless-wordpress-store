const {
  sendOrderNotification
} = require('../services/emailService');

exports.handleOrderCreated = async (
  req,
  res
) => {
  try {
    const order = req.body;

    await sendOrderNotification(order);

    res.status(200).json({
      success: true
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};