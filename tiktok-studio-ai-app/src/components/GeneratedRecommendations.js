import React from 'react';
import '../styles/GeneratedRecommendations.css';

function GeneratedRecommendations({ objective, recommendation }) {
  return (
    <div className="generated-recommendations">
      <h2>Generated Recommendations</h2>
      <div className = "content">
        <strong>Objective:</strong> {objective}
      </div>
      <div className = "content">
        <strong>Video Idea:</strong> {recommendation.videoIdea}
      </div>
      <div className = "content">
        <strong>Video Description:</strong> {recommendation.videoDescription}
      </div>
      <div className = "content">
        <strong>Props:</strong> {recommendation.props}
      </div>
      <div className = "content">
        <strong>Theme:</strong> {recommendation.theme}
      </div>
      <div className = "content">
        <strong>Script:</strong> {recommendation.script}
      </div>
      <table>
        <thead>
          <tr>
            <th>Time Frame</th>
            <th>Script</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {recommendation.videoContent.map((content, index) => (
            <tr key={index}>
              <td>{content.timeFrame}</td>
              <td>{content.script}</td>
              <td>{content.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GeneratedRecommendations;
