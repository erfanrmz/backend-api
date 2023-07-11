const Partner = require("../models/partner");
const turf = require("@turf/turf");

// @desc searching a point and find nearest partner with lang and lat in query
// @route GET /search-partner
// @access public

function calculateDistance(lat1, lon1, lat2, lon2) {
  const earthRadius = 6371; // Radius of the Earth in kilometers

  const latRad1 = toRadians(lat1);
  const lonRad1 = toRadians(lon1);
  const latRad2 = toRadians(lat2);
  const lonRad2 = toRadians(lon2);

  // Haversine formula
  const dLat = latRad2 - latRad1;
  const dLon = lonRad2 - lonRad1;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(latRad1) *
      Math.cos(latRad2) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Calculate the distance
  const distance = earthRadius * c;
  return distance;
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

exports.searchPartner = async (req, res, next) => {
  const { long, lat } = req.query;
  const point = { type: "Point", coordinates: [long, lat] };
  var insides = [];
  var nearestID = null;
  var nearestDistance = null;

  try {
    const partner = await Partner.find();
    if (partner == null) {
      return res.status(404).json({
        success: true,
        message: "data not found",
        data: partner,
      });
    }
    partner.forEach(async (item) => {
      const isInside = turf.booleanPointInPolygon(point, item.coverageArea);
      if (isInside) {
        insides.push(item.id);
        const distance = calculateDistance(
          item.address.coordinates[1],
          item.address.coordinates[0],
          lat,
          long
        );
        if (nearestDistance == null || nearDistance > distance) {
          nearDistance = distance;
          nearestID = item.id;
        }
      }
    });
    if (insides.length == 0) {
      return res.status(200).json({
        success: true,
        message: "not in any partner's coverage area",
        data: insides,
        nearestPartnerIndex: -1,
      });
    }
    return res.status(200).json({
      success: true,
      message: "found",
      data: insides,
      nearestPartnerIndex: nearestID,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "server error" });
  }
};
