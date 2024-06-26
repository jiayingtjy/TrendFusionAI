import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaVideo, FaComments, FaChartLine, FaRegSmile } from 'react-icons/fa';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <button className="upload-button">Upload</button>
      <nav>
        <ul>
          <li>
            <Link to="/">
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
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
