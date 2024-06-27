const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors()); // Add this line to handle CORS
app.use(express.json());

app.post('/api/openai', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003',
        prompt,
        max_tokens: 150,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: process.env.OPENAIKEY,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.response ? error.response.data : 'Error communicating with OpenAI API');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



/*
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/api/tiktok/oauth/token', async (req, res) => {
  const { code } = req.body;

  try {
    const fetch = (await import('node-fetch')).default;

    const response = await fetch('https://open-api.tiktok.com/oauth/access_token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_key: 'aw3sll3ljreab4yv', // Replace with your TikTok client key
        client_secret: 'n71GM3aCSVwWR6xIPXy4t5U707CgKWh0', // Replace with your TikTok client secret
        code,
        grant_type: 'authorization_code',
      }),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error during token exchange:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
*/