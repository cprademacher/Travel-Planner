const router = require("express").Router();
const travelRoutes = require("./travelRoutes");
const locationRoutes = require("./locationRoutes");
const tripRoutes = require("./tripRoutes");

router.use("./travelers", travelRoutes);
router.use("./locationRoutes.js", locationRoutes);
router.use("./tripRoutes.js", tripRoutes);

module.exports = router;
