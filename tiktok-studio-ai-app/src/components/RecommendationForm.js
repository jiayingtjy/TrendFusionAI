import React, { useState } from 'react';
import '../styles/RecommendationForm.css';

function RecommendationForm({ onGenerateRecommendations }) {
  const [objective, setObjective] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onGenerateRecommendations(objective);
  };

  return (
    <div className="recommendation-form">
      <h2>Generate Content Recommendations</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your objective:
          <input
            type="text"
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
            placeholder="E.g., Promote a product, Gain followers"
            required
          />
        </label>
        <button type="submit">Generate</button>
      </form>
    </div>
  );
}

export default RecommendationForm;
