const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors()); // Use CORS to allow all origins (customize as needed)

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.get('/characters', async (req, res) => {
    try {
        console.log(`received character ${req.query.characterName}`)
        const response = await axios.get(`https://api.dfoneople.com/df/servers/cain/characters?characterName=${req.query.characterName}`, {
            headers: {
                'apikey': 'mSegaLMyPdH6ejXGUtDDfMBfT3aFLexL' // Place your API key here
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
