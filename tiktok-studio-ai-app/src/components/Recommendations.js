import React from 'react';
import '../styles/Recommendations.css';

function Recommendations({ persona, trend, objective, recommendation }) {
  return (
    <div className="recommendations">
      <h2>Content Recommendations</h2>
      <div className="analysis">
        <h3>Persona Analysis</h3>
        <p>{persona}</p>
        <h3>Trend Analysis</h3>
        <p>{trend}</p>
        <h3>Objective</h3>
        <p>{objective}</p>
      </div>
      <div className="generated-content">
        <h3>Generated Content</h3>
        <p><strong>Video Idea:</strong> {recommendation.videoIdea}</p>
        <p><strong>Video Description:</strong> {recommendation.videoDescription}</p>
        <div className="video-content">
          <h4>Video Content:</h4>
          {recommendation.videoContent.map((segment, index) => (
            <div key={index}>
              <p><strong>Time Frame:</strong> {segment.timeFrame}</p>
              <p><strong>Script:</strong> {segment.script}</p>
              <p><strong>Action:</strong> {segment.action}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recommendations;
