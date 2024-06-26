import React from 'react';
import '../styles/UserProfile.css';

function UserProfile() {
  return (
    <div className="user-profile">
      <img src="profile-pic-url" alt="User" className="profile-pic" />
      <h3>@tjy2460</h3>
      <p>Following: 236</p>
      <p>Followers: 36</p>
      <p>Likes: 0</p>
      <div className="recent-posts">
        <h4>Recent posts</h4>
        <p>No posts yet</p>
        <button className="upload-button">Upload first video</button>
      </div>
    </div>
  );
}

export default UserProfile;
