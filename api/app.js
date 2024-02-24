const express = require('express');
const bodyParser = require('body-parser');
const start = require('../api/utils/db');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); 

const app = express();


// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


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
<<<<<<< HEAD
const articlesRoutes = require('./routes/articles');
=======
const newsRoutes = require('./routes/newsRoute');
>>>>>>> 73e53e96de47f03df043c789c9289f97026e8787

app.use('/user', userRoutes);
app.use('/scrape', scrapeRoutes);
app.use('/news', newsRoutes);


app.get('/', (req, res) => {
    res.send('Welcome to Ahamenes Space News Aggregator');
})

// Use routes
app.use('/articles', articlesRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


module.exports = app;