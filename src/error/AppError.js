// AppError sınıfı, özel hata nesneleri oluşturmak için kullanılır.
// `data` parametresi, hata nesnesinin mesajını veya mesaj nesnesini içerir.
// `status` parametresi, hata durumunu belirtir.
class AppError extends Error {
  constructor(data, status) {
    super(data);
    this.message = data.message || data;
    this.status = status;
  }
}

module.exports = AppError;
