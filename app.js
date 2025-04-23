const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const BASE_URL = 'https://api.jikan.moe/v4/anime';

// Search for an anime by title
app.get('/api/anime', async (req, res) => {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ error: "Please provide an anime name to search" });
    }

    try {
        const response = await axios.get(`${BASE_URL}`, { params: { q: query } });
        res.json(response.data);
    } catch (error) {
        console.error("Anime search error:", error);
        res.status(500).json({ error: "Failed to retrieve anime data" });
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Anime Search API running on port ${PORT}`))
