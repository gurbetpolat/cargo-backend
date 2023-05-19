
const logger = require("../logger");

// Hata yönetimi middleware fonksiyonu
// Hatalar yakalamamızı sağlayan ara katman

module.exports = (err, req, res, next) => {
  const status = err?.status || 500;
  logger.error(err);
  res.status(status);
  res.json({
    error: {
      status: status,
      message: err.message,
    },
  });
};
