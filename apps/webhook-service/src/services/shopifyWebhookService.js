exports.parseWebhookPayload =
  function (payload) {
    return {
      id: payload.id,
      customer: payload.customer,
      total: payload.total_price
    };
  };