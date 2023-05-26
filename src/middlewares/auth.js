const AppError = require("../error/AppError");
const config = require("../../config");
const jwt = require("jsonwebtoken");

// Gelen isteğin yolunun "noAuthRoutes" dizisinde olup olmadığını kontrol eder
module.exports = async function (req, res, next) {
  const noAuthRoutes = config.noAuthRoutes;
  const pathname = req._parsedUrl.pathname;
  const isNoAuthRoute = noAuthRoutes.includes(pathname);
  if (isNoAuthRoute) return next();

  // Gelen isteğin "authorization" başlığından tokeni elde eder
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) throw new AppError("Unauthorized", 401);
  // Verilen tokeni doğrular ve kullanıcı bilgilerini `req.user` olarak atar
  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    if (!decoded) throw new AppError("Unauthorized", 401);
    req.user = decoded;
    next();
  } catch (error) {
    throw new AppError("Unauthorized", 401);
  }
};
