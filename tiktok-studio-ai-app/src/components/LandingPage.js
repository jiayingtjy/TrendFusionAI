// src/components/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <img src="trendfusionAI.png" alt="TrendFusionAI Logo" className="logo" />
      <h1>Welcome to TrendFusionAI</h1>
      <p>TrendFusionAI is a one-stop social media content generator leveraging trends, persona, and goals to create personalized quality content.</p>
      <p>
        <a href="https://username.github.io/trendfusionai-docs/terms-of-service.html">Terms of Service</a> | 
        <a href="https://username.github.io/trendfusionai-docs/privacy-policy.html">Privacy Policy</a>
      </p>
      <button onClick={() => navigate('/trend-fusion-ai')}>Try out Trend Fusion AI</button>
    </div>
  );
}

export default LandingPage;
