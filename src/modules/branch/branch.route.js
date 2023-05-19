const express = require("express");
const branchController = require("./branch.controller.js");
const allowedRoles = require("../../middlewares/allowedRoles");
const { roles } = require("../../../config");
const router = express.Router();

//ŞubeOluşturmaİşlemi
router.post(
  "/create",
  allowedRoles([roles.admin]),
  branchController.createBranch
);
//PersonelleriŞubeyeEkleme
router.post(
  "/addPersonels",
  allowedRoles([roles.admin]),
  branchController.addPersonels
);
//TümŞubeleriAl
router.get("/getAllBranches", allowedRoles([roles.admin]), branchController.getAllBranches);
//test
module.exports = router;
