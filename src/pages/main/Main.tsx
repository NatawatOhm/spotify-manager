import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import PlayerBar from '../../components/playerbar/PlayerBar';

const Main = () => {
  const navigate = useNavigate();

  const setToken = () => {
    const queryParams = new URLSearchParams(window.location.hash.substring(1));
    const token = queryParams.get('access_token');

    if (token != null) {
      sessionStorage.setItem('token', token);
    } else if (token == null) {
      navigate('/login');
    }
  };
  useEffect(() => {
    setToken();
  }, []);

  return (
    <div>
      <Sidebar />
      <div className="justify-center flex "></div>
      <PlayerBar />
    </div>
  );
};

export default Main;
