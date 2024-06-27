import React, { useState } from 'react';
import axios from 'axios';

function OpenAITest() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const persona = {
    username: 'exampleUser',
    follower_count: 10000,
    following_count: 300,
    likes_count: 50000,
    video_count: 200
  };

  const trend = {
    hashtag: 'DanceChallenge',
    idea: 'Participate in the latest dance challenge to engage your audience.',
    possible_like_count: '1 million',
    possible_view_count: '5 million'
  };

  const objective = 'Promote a new product launch';

  const generatePrompt = (persona, trend, objective) => {
    return `
    Based on the following information, generate content recommendations for a TikTok video.

    1. **Persona Data**:
       - Username: ${persona.username}
       - Follower Count: ${persona.follower_count}
       - Following Count: ${persona.following_count}
       - Total Likes: ${persona.likes_count}
       - Total Videos: ${persona.video_count}

    2. **Hottest Trend Analysis**:
       - Top Trend: #${trend.hashtag}
       - Trend Idea: ${trend.idea}
       - Possible Like Count: ${trend.possible_like_count}
       - Possible View Count: ${trend.possible_view_count}

    3. **Objective**:
       - ${objective}

    Provide the following recommendations:
    1. Video Idea
    2. Video Description
    3. Video Content (including timestamp, script, action)
    `;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const prompt = generatePrompt(persona, trend, objective);
    setPrompt(prompt);

    try {
      const res = await axios.post('/api/openai', { prompt });
      setResponse(res.data.choices[0].text);
      setError('');
    } catch (error) {
      console.error(error);
      setResponse('');
      setError(error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <h2>OpenAI Test</h2>
      <form onSubmit={handleSubmit}>
        <button type="submit">Generate Recommendations</button>
      </form>
      {prompt && (
        <div>
          <h3>Prompt</h3>
          <pre>{prompt}</pre>
        </div>
      )}
      {response && (
        <div>
          <h3>Response</h3>
          <p>{response}</p>
        </div>
      )}
      {error && (
        <div>
          <h3>Error</h3>
          <pre>{error}</pre>
        </div>
      )}
    </div>
  );
}

export default OpenAITest;
