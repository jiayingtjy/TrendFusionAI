import React from 'react';
import '../styles/TrendAnalysis.css';

function TrendAnalysis({ trend }) {
  if (!Array.isArray(trend.topTrends)) {
    return <div>Invalid trend data</div>;
  }

  return (
    <div className="trend-analysis">
      <h2>Hottest Trend Analysis</h2>
      {trend.topTrends.map((t, index) => (
        <div key={index} className="trend-item">
          <h3>Top {index + 1}: {t.title}</h3>
          <p>Likes: {t.likes}</p>
          <p>Comments: {t.comments}</p>
          <p>Shares: {t.shares}</p>
          <p>Views: {t.views}</p>
        </div>
      ))}
      <p>Retrieved using Tiktok API - Video Object</p>
    </div>
  );
}

export default TrendAnalysis;
