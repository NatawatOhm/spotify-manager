import React from 'react';

const Login = () => {
  const CLIENT_ID = 'd575e8b4e4db4fad83b5086db0ed637d';
  const SPOTIFY_AUTHORIZE_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const REDIRECT_URL_AFTER_LOGIN = 'http://localhost:8080/';
  const SCOPES = ['user-read-private', 'user-read-email', 'user-read-currently-playing'];

  const handleButton = (): void => {
    window.location.href = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES}&response_type=token`;
  };

  return (
    <div>
      <div className="flex justify-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleButton}>
          Login to Spotify
        </button>
      </div>
    </div>
  );
};

export default Login;
