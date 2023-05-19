module.exports = (schema) => async (req, res, next) => {
 
 // Verilen şemayı doğrulama işlemi
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    return next();
  } 
  // Hata durumunda hatayı bir sonraki işleve aktarır
  catch (err) {
    return next(err);
  }
};
