const axios = require('axios');
const Article = require('../models/articleModel');

// createArticle
const createArticle = async (req, res) => {
    try {
        const { title, author, content, category } = req.body;

        if (!title || !author || !content || !category) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const newArticle = new Article({ title, author, content, category });
        await newArticle.save();
        res.json({ message: 'Article added successfully', status: 201 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getArticle = async (req, res) => {
    try {
        const articles = await Article.find();
        if (articles.length === 0) {
            return res.status(404).json({ error: 'No articles found' });
        }
        res.json(articles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get articles by category
const getArticleByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const articles = await Article.find({ category: category });

        if (articles.length === 0) {
            return res.status(404).json({ error: 'No articles found' });
        }

        res.json(articles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateArticle = async (req, res) => {
    try {
        const { title, author, content, category } = req.body;
        const { id } = req.params;

        if (!title || !author || !content || !category) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const article = await Article
            .findByIdAndUpdate(id, { title, author, content, category }, { new: true });

        if (!article) {
            return res.status(404).json({ error: 'Article not found' });
        }

        res.json({ message: 'Article updated successfully', status: 200 });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteArticle = async (req, res) => {
    try {
        const { id } = req.params;
        const article = await Article.findByIdAndDelete(id);

        if (!article) {
            return res.status(404).json({ error: 'Article not found' });
        }

        res.json({ message: 'Article deleted successfully', status: 200 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Search articles
const searchArticle = async (req, res) => {
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

        if (articles.length === 0) {
            return res.status(404).json({ error: 'No articles found' });
        }
        res.json(articles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { createArticle, getArticle, searchArticle, updateArticle, deleteArticle, getArticleByCategory };