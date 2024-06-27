import React from 'react';
import '../styles/PersonaAnalysis.css';

function PersonaAnalysis({ persona }) {
  return (
    <div className="persona-analysis">
      <h3>Persona Analysis</h3>
      <p>{persona}</p>
    </div>
  );
}

export default PersonaAnalysis;
