const router = require("express").Router();
const sequelize = require("../../config/connection");
const { travelers, locations, trips } = require("../../models");

// Get all travelers
// router.get("/", async (req, res) => {
//     try {
//         const travelers = await traveler.findAll()
//     }
// });

// Building this by working off of activity 24 in Module 13 activities
