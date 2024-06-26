// src/App.js
import React from 'react';
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
import './styles/Common.css';

function App() {
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
              <Route path="/user-profile" element={<UserProfile />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/trend-fusion-ai" element={<TrendFusionAI />} />
              <Route path="/oauth/callback" element={<OAuthCallback />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/comments" element={<Comments />} />
              <Route path="/feedback" element={<Feedback />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
