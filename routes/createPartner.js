const express = require("express");
const { createPartner } = require("../controllers/createPartner");
const router = express.Router();
// ./create-partner
router.route("/").post(createPartner);

module.exports = router;
