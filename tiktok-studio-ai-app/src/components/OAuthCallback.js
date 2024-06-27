// src/components/OAuthCallback.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Common.css'; // Import the CSS file
const OAuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleOAuthCallback = async () => {
      // Parse the URL to get the authorization code
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');

      if (code) {
        try {
          // Exchange the authorization code for an access token
          const response = await fetch('http://localhost:5000/api/tiktok/oauth/token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code }),
          });

          const data = await response.json();

          if (data.access_token) {
            // Save the access token and navigate to the user profile or another page
            localStorage.setItem('tiktok_access_token', data.access_token);
            navigate('/user-profile');
          } else {
            console.error('Failed to obtain access token:', data);
          }
        } catch (error) {
          console.error('Error during OAuth callback handling:', error);
        }
      } else {
        console.error('No authorization code found in the URL.');
      }
    };

    handleOAuthCallback();
  }, [navigate]);

  return (
    <div className = "oauth-callback">
      <h1>OAuth Callback</h1>
      <p>Processing authentication...</p>
    </div>
  );
};

export default OAuthCallback;
