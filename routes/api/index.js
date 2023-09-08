const router = require("express").Router();
const travelRoutes = require("./travelRoutes");

router.use("./travelers", travelRoutes);

module.exports = router;
