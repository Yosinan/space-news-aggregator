const express = require("express");
const router = express.Router();

const { allBlogs, blogById, articleById, articles, searchArticles, getFeed } = require("../controllers/newsController");

// router.get("/", scrape);
router.get("/articles", articles);
router.get("/articles/search", searchArticles);
router.get("/articles/:id", articleById);
router.get("/blogs", allBlogs);
router.get("/blogs/:id", blogById);
router.get("/feed", getFeed);


module.exports = router;