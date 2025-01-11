const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./connectDB');


dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});
