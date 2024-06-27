import React from 'react';
import '../styles/GeneratedRecommendations.css';

function GeneratedRecommendations({ objective, recommendation }) {
  return (
    <div className="generated-recommendations">
      <h3>Generated Recommendations</h3>
      <p><strong>Objective:</strong> {objective}</p>
      <p><strong>Video Idea:</strong> {recommendation.videoIdea}</p>
      <p><strong>Video Description:</strong> {recommendation.videoDescription}</p>
      <table>
        <thead>
          <tr>
            <th>Time Frame</th>
            <th>Script</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {recommendation.videoContent.map((segment, index) => (
            <tr key={index}>
              <td>{segment.timeFrame}</td>
              <td>{segment.script}</td>
              <td>{segment.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GeneratedRecommendations;
