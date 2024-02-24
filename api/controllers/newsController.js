
const axios = require('axios');


const articles = async (req, res) => {
    try {
        const response = await axios.get("https://api.spaceflightnewsapi.net/v4/articles");
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
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching blog:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const allBlogs = async (req, res) => {
    try {
        const response = await axios.get("https://api.spaceflightnewsapi.net/v4/blogs");
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching blogs:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { articles, articleById, blogById, allBlogs };