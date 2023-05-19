const express = require("express");
const cargoController = require("./cargo.controller");
const allowedRoles = require("../../middlewares/allowedRoles");
const { roles } = require("../../../config");
const router = express.Router();

//KargoOluşturma
router.post(
  "/create",
//Sadece şube personelleri bu işlemi yapabilir
  allowedRoles([roles.branchPersonel]),
  cargoController.createCargo
);

// GönderilenTümKargolarıAl
router.get(
  "/getMySendedCargos",
  //İzinRolüOlarakSadeceMüşteriler
  allowedRoles([roles.customer]),
  cargoController.getMySendedCargos
);

//kargoların araca verilmesi veya araca teslim edilmesi işlemi
//Bu işlemi sadece şube personelleri yapabilir
router.post(
  "/giveCargosToVehicle",
  allowedRoles([roles.branchPersonel]),
  cargoController.giveCargosToVehicle
);

// Kargonun şubeye teslim edilmesi
  //Sadece taşıma personelleri bu işlemi yapabilir
router.post(
  "/giveCargosToBranch",
  allowedRoles([roles.transportPersonel]),
  cargoController.giveCargosToBranch
);

//Kargoyu müşteriye teslim etme işlemi
//Bunu sadece şube personelleri yapabilir
router.post(
  "/giveCargoToCustomer",
  allowedRoles([roles.branchPersonel]),
  cargoController.giveCargoToCustomer
);

module.exports = router;
