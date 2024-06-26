import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Analytics from './components/Analytics';
import UserProfile from './components/UserProfile';
import './styles/App.css'; // Ensure this path is correct

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/" element={<MainContent />} exact />
        </Routes>
        <UserProfile />
      </div>
    </Router>
  );
}

export default App;
