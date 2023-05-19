const express = require("express");
const authController = require("./auth.controller");
const allowedRoles = require("../../middlewares/allowedRoles");
const { roles } = require("../../../config");
const router = express.Router();

//PersonelOluşturumaİşlemi
router.post("/personel/login", authController.personelLogin);
//PersoneKaydıOluşturma
router.post(
  "/personel/register",
  allowedRoles([roles.admin]),
  authController.personelRegister
);
//MüşteriGiriş
router.post("/customer/login", authController.customerLogin);
//MüşteriKayıt
router.post("/customer/register", authController.customerRegister);
//MüşteriBilgileri
router.get("/me", authController.getMe);

module.exports = router;
