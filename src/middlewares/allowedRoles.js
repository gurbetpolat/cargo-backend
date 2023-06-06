const AppError = require("../error/AppError");

/*Gelen isteğin kullanıcının 
rolünü kontrol eder ve hata durumunda 
"Unauthorized/yetkisiz" hatası fırlatır */
module.exports = function (roles = []) {
  return (req, res, next) => {
    if (roles.includes(req?.user?.role)) {
      next();
    } else {
      next(new AppError("Unauthorized", 401));
    }
  };
};
