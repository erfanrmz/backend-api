const express = require("express");
const { searchPartner } = require("../controllers/searchPartner");
const router = express.Router();
// /search-partner
router.route("/").get(searchPartner);

module.exports = router;
