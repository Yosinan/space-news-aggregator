const express = require('express');
const bodyParser = require('body-parser');
const start = require('../api/utils/db');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); 

const app = express();


// Swagger
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// start database connection
start();


// Middleware
app.use(bodyParser.json());
app.use(express.static("static"));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
const userRoutes = require('./routes/userRoutes');
const scrapeRoutes = require('./routes/scrapeRoutes');
const articlesRoutes = require('./routes/articleRoutes');
const newsRoutes = require('./routes/newsRoute');


app.use('/user', userRoutes);
app.use('/scrape', scrapeRoutes);
app.use('/space', newsRoutes);
app.use('/articles', articlesRoutes);


app.get('/', (req, res) => {
    res.send('Welcome to Ahamenes Space News Aggregator');
})

module.exports = app;