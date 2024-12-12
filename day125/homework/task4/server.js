app.get('/homepage', (req, res) => {
    res.send('<h1>Homepage</h1><a href="/about">Go to About Page</a>');
  });
  