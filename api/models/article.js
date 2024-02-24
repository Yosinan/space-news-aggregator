// models/article.js
const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true }, // Add a field for categorization
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
