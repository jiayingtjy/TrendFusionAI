import React from 'react';
import '../styles/PersonaAnalysis.css';

const PersonaAnalysis = ({ persona }) => (
  <div className="persona-analysis">
    <h2>Persona Analysis</h2>
    <p><strong>Display Name:</strong> {persona.displayName}</p>
    <p><strong>Bio Description:</strong> {persona.bioDescription}</p>
    <p><strong>Username:</strong> {persona.username}</p>
    <p><strong>Follower Count:</strong> {persona.followerCount}</p>
    <p><strong>Following Count:</strong> {persona.followingCount}</p>
    <p><strong>Total Likes:</strong> {persona.totalLikes}</p>
    <p><strong>Total Videos:</strong> {persona.totalVideos}</p>
    <p><strong>Personality:</strong> {persona.personality}</p>
    <p><strong>Theme:</strong> {persona.theme}</p>
    <h3>Recommendation</h3>
    <p>Your persona reflects a trendy and engaging fashion content creator with a substantial follower base. With a focus on the latest fashion trends and styling tips, you have established yourself as a credible source in the fashion community. To leverage your medium popularity, continue creating high-quality, trend-focused content that resonates with your audience.</p>
  </div>
);

export default PersonaAnalysis;
