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
        <img src="photo_6179041502135693932_y.jpg" alt="User Profile" className="user-profile-pic" />
      </div>
    </div>
  );
};

export default TopNav;
