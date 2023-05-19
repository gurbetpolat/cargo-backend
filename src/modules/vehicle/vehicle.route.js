const express = require("express");
const vehicleController = require("./vehicle.controller");
const allowedRoles = require("../../middlewares/allowedRoles");
const { roles } = require("../../../config");
const router = express.Router();

//AraçOluşturma
router.post(
  "/createVehicle",
  allowedRoles([roles.admin]),
  vehicleController.createVehicle
);

//TümAraçlarıAlma
router.get(
  "/getAllVehicles",
  allowedRoles([roles.admin]),
  vehicleController.getAllVehicles
);


//PersoneliAracaAtama
router.post(
  "/assignVehicleToPersonel",
  allowedRoles([roles.admin]),
  vehicleController.assignVehicleToPersonel
);
module.exports = router;
