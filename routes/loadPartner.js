const express = require("express");
const { loadPartner } = require("../controllers/loadPartner");
const router = express.Router();
// /load-partner
router.route("/").get(loadPartner);

module.exports = router;
