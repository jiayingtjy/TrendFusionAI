// src/components/TopNav.js
import React from 'react';
import '../styles/Common.css';


const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="left-nav">
        <img src="tiktoklogo.png" alt="TikTok Studio" className="logo" />
      </div>
      <div className="right-nav">
        <img src="default-avatar.png" alt="User Profile" className="user-profile-pic" />
      </div>
    </div>
  );
};

export default TopNav;
