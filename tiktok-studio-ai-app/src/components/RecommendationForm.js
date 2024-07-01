import React, { useState } from 'react';

function RecommendationForm({ onGenerateRecommendations }) {
  const [objective, setObjective] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerateRecommendations(objective);
  };

  return (
    <form onSubmit={handleSubmit} className="recommendation-form">
      <label>
        Enter your strategic objective:
        <input
          type="text"
          value={objective}
          onChange={(e) => setObjective(e.target.value)}
        />
      </label>
      <button type="submit">Generate Recommendations</button>
    </form>
  );
}

export default RecommendationForm;
