// src/components/Comments.js
import React from 'react';
import '../styles/Common.css';


function Feedback() {
  return (
    <div className="main-content">
      <h2>Feedback</h2>
      <div className="metrics">
        <p>No insights available</p>
        <p>You haven’t created any posts yet. Check back after you’ve uploaded your first public video.</p>
      </div>
    </div>
  );
}


export default Feedback;
