
// Route to get all articles
app.get("/articles", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.spaceflightnewsapi.net/v4/articles"
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

// Route to get a specific article by ID
app.get("/articles/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(
      `https://api.spaceflightnewsapi.net/v4/articles/${id}`
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});


// Route to fetch a blog by ID
app.get('/blogs/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`https://api.spaceflightnewsapi.net/v4/blogs/${id}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Fetch all blogs
axios.get('https://api.spaceflightnewsapi.net/v4/blogs')
  .then(response => {
    console.log('All Blogs:', response.data);
  })
  .catch(error => {
    console.error('Error fetching all blogs:', error);
  });