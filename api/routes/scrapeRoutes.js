const express = require("express");
const router = express.Router();

const { scrape } = require("../controllers/scrapeController");

router.get("/", scrape);

module.exports = router;