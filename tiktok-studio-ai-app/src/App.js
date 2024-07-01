// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import Analytics from './components/Analytics';
import UserProfile from './components/UserProfile';
import TrendFusionAI from './components/TrendFusionAI';
import OAuthCallback from './components/OAuthCallback';
import LandingPage from './components/LandingPage';
import Posts from './components/Posts';
import Comments from './components/Comments';
import Feedback from './components/Feedback';
import OpenAITest from './components/OpenAITest';
import PersonaAnalysis from './components/PersonaAnalysis';  // Import PersonaAnalysis component
import './styles/Common.css';

function App() {
  const [user, setUser] = useState({
    avatarUrl: '/path/to/avatar.png',
    username: 'expiredstankysocks',
    followerCount: 8887,
    followingCount: 85,
    likesCount: 550900,
  });

  const persona = {
    displayName: 'expiredstankysocks',
    bioDescription: 'sg currently in cn 🐾\\n""·•·"',
    username: 'expiredstankysocks',
    followerCount: 8887,
    followingCount: 85,
    totalLikes: 550900,
    totalVideos: 10, // example number
    personality: 'Trendy, Engaging',
    theme: 'Fashion, Lifestyle'
  };

  return (
    <Router>
      <div className="app">
        <TopNav />
        <div className="main-layout">
          <Sidebar />
          <div className="content-container">
            <Routes>
              <Route path="/" element={<LandingPage />} exact />
              <Route path="/home" element={<LandingPage />} exact />
              <Route path="/user-profile" element={<UserProfile user={user} />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/trend-fusion-ai" element={<TrendFusionAI />} />
              <Route path="/oauth/callback" element={<OAuthCallback />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/comments" element={<Comments />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/openai-test" element={<OpenAITest />} />
              <Route path="/persona-analysis" element={<PersonaAnalysis persona={persona} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
