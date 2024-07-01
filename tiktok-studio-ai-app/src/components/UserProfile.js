import React, { useState, useEffect } from 'react';
import '../styles/UserProfile.css';
import PersonaAnalysis from './PersonaAnalysis';

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate fetching user data
    const fetchData = async () => {
      const userData = {
        displayName: 'expiredstankysocks',
        bioDescription: 'sg currently in cn. Follow me for more exciting fashion content and inspiration.',
        username: 'expiredstankysocks',
        followerCount: 8887,
        followingCount: 85,
        totalLikes: 550900,
        totalVideos: 200,
        personality: 'Trendy, Engaging',
        theme: 'Fashion, Lifestyle',
      };
      setUser(userData);
    };

    fetchData();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <div className="profile-details">
        <img src="/default-avatar.png" alt="User Avatar" className="avatar" />
        <h2>@{user.username}</h2>
        <p>Following: {user.followingCount}</p>
        <p>Followers: {user.followerCount}</p>
        <p>Likes: {user.totalLikes}</p>
        <button className="generate-analysis-btn">Refresh Persona Analysis</button>
      </div>
      <PersonaAnalysis persona={user} />
    </div>
  );
}

export default UserProfile;
