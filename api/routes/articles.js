// routes/articles.js
const express = require('express');
const router = express.Router();
const Article = require('../models/article');

// Example route to save an article
router.post('/add', async (req, res) => {
  try {
    const { title, author, content, category } = req.body;
    const newArticle = new Article({ title, author, content, category });
    await newArticle.save();
    res.status(201).json({ message: 'Article added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Get articles by category
router.get('/category/:category', async (req, res) => {
    try {
      const { category } = req.params;
      const articles = await Article.find({ category });
      res.json(articles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
   

// Search articles
router.get('/search', async (req, res) => {
    try {
      const { keywords, title, author } = req.query;
      const query = {};
  
      if (keywords) {
        query.$or = [
          { title: { $regex: keywords, $options: 'i' } },
          { content: { $regex: keywords, $options: 'i' } },
        ];
      }
  
      if (title) {
        query.title = { $regex: title, $options: 'i' };
      }
  
      if (author) {
        query.author = { $regex: author, $options: 'i' };
      }
  
      const articles = await Article.find(query);
      res.json(articles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  
module.exports = router;
