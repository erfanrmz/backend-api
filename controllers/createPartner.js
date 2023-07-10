const Partner = require("../models/partner");

// @desc creating a partner and save it in database
// @route POST /create-partner
// @access public

exports.createPartner = async (req, res, next) => {
  try {
    const partner = new Partner({
      id: req.body.id,
      tradingName: req.body.tradingName,
      ownerName: req.body.ownerName,
      document: req.body.document,
      coverageArea: req.body.coverageArea,
      address: req.body.address,
    });

    await partner.save();
    return res.status(200).json({
      success: true,
      message: "data saved in database successfully",
      data: partner,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "server error" });
  }
};
