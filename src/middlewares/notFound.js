const AppError = require("../error/AppError");

// 404 hata durumu oluşturur - Bulunamadı (Not Found)

module.exports = (req, res, next) => next(new AppError("Not Found", 404));
