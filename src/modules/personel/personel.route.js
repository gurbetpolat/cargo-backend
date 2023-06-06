const express = require("express");
const personelController = require("./personel.controller");
const allowedRoles = require("../../middlewares/allowedRoles");
const { roles } = require("../../../config");
const router = express.Router();

//tüm personelleri getir
router.get(
  "/getAllPersonels",
  //izin verilen roller
  allowedRoles([roles.admin]),
  personelController.getAllPersonels
);
//PersonelAracınıEkleme
router.put(
  "/assignVehicleToPersonel",
  allowedRoles([roles.admin]),
  //PersonelinAracaAtanması
  personelController.assignVehicleToPersonel
);

// delete personel by id
router.delete(
  "/deletePersonel/:personelId",
  allowedRoles([roles.admin]),
  personelController.deletePersonel
);

module.exports = router;
