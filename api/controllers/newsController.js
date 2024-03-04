
const axios = require('axios');
const Parser = require('rss-parser');

const parser = new Parser();

// Fetch space-news from rss feed

const getFeed = async (req, res) => {
    try {
        const feed = await parser.parseURL('https://www.space.com/feeds/all');
        res.json(feed);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
};

// Fetch articles from the Spaceflight News API
const articles = async (req, res) => {
    try {
        const response = await axios.get("https://api.spaceflightnewsapi.net/v4/articles");
        if (response.data.length === 0) {
            return res.status(404).json({ error: "No articles found" });
        }
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
};

const searchArticles = async (req, res) => {
    try {
        const queryParams = req.query;
        console.log('Query Parameters:', queryParams);

        //  base URL
        let apiUrl = 'https://api.spaceflightnewsapi.net/v4/articles?';

        // build the query string dynamically
        const queryString = Object.keys(queryParams)
            .map(key => `${key}=${encodeURIComponent(queryParams[key])}`)
            .join('&');

        apiUrl += queryString;

        // Fetch articles from the constructed URL
        const response = await axios.get(apiUrl);
        if (response.data.length === 0) {
            return res.status(404).json({ error: "No articles found" });
        }
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
};

const articleById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`https://api.spaceflightnewsapi.net/v4/articles/${id}`);
        if (response.data.length === 0) {
            return res.status(404).json({ error: "No articles found" });
        }
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
};

const blogById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`https://api.spaceflightnewsapi.net/v4/blogs/${id}`);
        if (response.data.length === 0) {
            return res.status(404).json({ error: "No articles found" });
        }
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching blog:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const allBlogs = async (req, res) => {
    try {
        const response = await axios.get("https://api.spaceflightnewsapi.net/v4/blogs");
        if (response.data.length === 0) {
            return res.status(404).json({ error: "No articles found" });
        }
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching blogs:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { articles, articleById, blogById, allBlogs, searchArticles, getFeed };