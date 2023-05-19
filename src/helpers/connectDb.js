const mongoose = require("mongoose"); // Mongoose modülünü içe aktar
const config = require("../../config/index");// Konfigürasyon modülünü içe aktar, yolunu belirt

const logger = require("../logger");// Logger modülünü içe aktar
const db = config.database;// Veritabanı yapılandırmasını al
const connectionUrl = `${db.url}/${db.name}`; // Veritabanı bağlantı URL'sini oluştur





module.exports = async function () {
  try {

    await mongoose.connect(connectionUrl, config.mongoOptions);
    // Veritabanına bağlantı başarılı olduğunda bir bilgi mesajı kaydedilir
    logger.info("Connected to Database");
  } catch (err) {
     // Bağlantı hatası durumunda hata kaydedilir
    logger.error(err);
    // Hata durumunda uygulama sonlandırılır
    process.exit(1);
  }
};
