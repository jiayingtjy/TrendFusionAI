// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <img src="trendfusionAI.png" alt="TrendFusionAI Logo" className="logo" />
      <h1>Welcome to TrendFusionAI</h1>
      <p>TrendFusionAI is a one-stop social media content generator leveraging trends, persona, and goals to create personalized quality content.</p>
      <p><a href="https://username.github.io/trendfusionai-docs/terms-of-service.html">Terms of Service</a> | <a href="https://username.github.io/trendfusionai-docs/privacy-policy.html">Privacy Policy</a></p>
      <button onClick={() => navigate('/main-content')}>Go To TikTok Studio</button>
    </div>
  );
}

export default Home;
