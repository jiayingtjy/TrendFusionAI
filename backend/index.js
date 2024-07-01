const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const CLIENT_KEY = 'aw3sll3ljreab4yv';
const CLIENT_SECRET = 'n71GM3aCSVwWR6xIPXy4t5U707CgKWh0';
const REDIRECT_URI = 'http://localhost:3001/oauth/callback';

app.get('/oauth', (req, res) => {
  const csrfState = Math.random().toString(36).substring(2);
  res.cookie('csrfState', csrfState, { maxAge: 60000 });

  let url = 'https://www.tiktok.com/v2/auth/authorize/';
  url += `?client_key=${CLIENT_KEY}`;
  url += '&scope=user.info.basic';
  url += '&response_type=code';
  url += `&redirect_uri=${REDIRECT_URI}`;
  url += '&state=' + csrfState;

  res.redirect(url);
});

app.get('/oauth/callback', async (req, res) => {
  const { code, state } = req.query;

  // Verify the state matches the one sent in /oauth
  if (req.cookies.csrfState !== state) {
    return res.status(403).send('State mismatch');
  }

  try {
    const response = await axios.post(
      'https://open.tiktokapis.com/v2/oauth/access_token/',
      {
        client_key: CLIENT_KEY,
        client_secret: CLIENT_SECRET,
        code: code,
        grant_type: 'authorization_code',
        redirect_uri: REDIRECT_URI,
      },
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
    );

    const accessToken = response.data.access_token;
    res.json({ accessToken });
  } catch (error) {
    console.error('Error fetching access token:', error);
    res.status(500).send(error.response ? error.response.data : error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
