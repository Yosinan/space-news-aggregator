const express = require("express");
const router = express.Router();

const { allBlogs, blogById, articleById, articles  } = require("../controllers/newsController");

router.get("/", scrape);
router.get("/articles", articles);
router.get("/articles/:id", articleById);
router.get("/blogs", allBlogs);
router.get("/blogs/:id", blogById);

module.exports = router;