import React from 'react';
import '../styles/TrendAnalysis.css';

function TrendAnalysis({ trend }) {
  return (
    <div className="trend-analysis">
      <h3>Hottest Trend Analysis</h3>
      <p>{trend}</p>
    </div>
  );
}

export default TrendAnalysis;
