const express = require("express");
const customerController = require("./customer.controller");
const router = express.Router();

// kullanıcıya ait bilgileri alma işlemi
router.get("/me", customerController.getMe);
//kullanıcının kargolarını alma işlemi
router.get("/me/orders", customerController.getMyCargos);

module.exports = router;
