// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaVideo, FaComments, FaChartLine, FaRegSmile, FaUser, FaProjectDiagram } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="sidebar">
      <button className="upload-button">Upload</button>
      <nav>
        <ul>
          <li>
            <Link to="/home">
              <FaHome className="icon" /> Home
            </Link>
          </li>
          <li>
            <Link to="/posts">
              <FaVideo className="icon" /> Posts
            </Link>
          </li>
          <li>
            <Link to="/comments">
              <FaComments className="icon" /> Comments
            </Link>
          </li>
          <li>
            <Link to="/analytics">
              <FaChartLine className="icon" /> Analytics
            </Link>
          </li>
          <li>
            <Link to="/feedback">
              <FaRegSmile className="icon" /> Feedback
            </Link>
          </li>
          <li>
            <Link to="/user-profile">
              <FaUser className="icon" /> User Profile
            </Link>
          </li>
          <li>
            <Link to="/trend-fusion-ai">
              <FaProjectDiagram className="icon" /> Trend Fusion AI
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
