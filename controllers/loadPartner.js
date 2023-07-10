const Partner = require("../models/partner");

// @desc loading a partner and return it as json
// @route GET /load-partner
// @access public

exports.loadPartner = async (req, res, next) => {
  const { id } = req.query;
  try {
    const partner = await Partner.findOne({ id: id });
    if (partner == null) {
      return res.status(404).json({
        success: true,
        message: "data not found",
        data: partner,
      });
    }
    return res.status(200).json({
      success: true,
      message: "data loaded successfully",
      data: partner,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "server error" });
  }
};
