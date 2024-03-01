// routes/articles.js
const express = require('express');
const router = express.Router();
const { createArticle, getArticleByCategory, searchArticle, getArticle, deleteArticle, updateArticle } = require('../controllers/articleController');


// Create a new article
router.post('/add', createArticle);

// Get all articles
router.get('/', getArticle);

// Search articles
router.get('/search', searchArticle);

// Get articles by category
router.get('/:category', getArticleByCategory);

// Update an article
router.put('/update/:id', updateArticle);

// Delete an article
router.delete('/delete/:id', deleteArticle);


module.exports = router;
