import React, { useEffect } from 'react';

const CLIENT_ID = 'd575e8b4e4db4fad83b5086db0ed637d';
const SPOTIFY_AUTHORIZE_ENDPOINT = 'https://accounts.spotify.com/authorize';
const REDIRECT_URL_AFTER_LOGIN = 'http://localhost:8080/';
const SCOPES = ['user-read-private', 'user-read-email', 'user-read-currently-playing'];

const handleButton = (): void => {
  window.location.href = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES}&response_type=token`;
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('access_token') || '';
    if (token == null) {
      sessionStorage.setItem('token', token);
    } else {
      sessionStorage.setItem('token', token);
    }
  }, []);
};

const Login = () => {
  return (
    <div>
      <div className="flex justify-center">
        <button onClick={handleButton}>Login to Spotify</button>
      </div>
    </div>
  );
};

export default Login;
