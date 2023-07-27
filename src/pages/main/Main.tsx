import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../MainLayout';

const Main = () => {
  const navigate = useNavigate();

  const setToken = (): void => {
    const queryParams = new URLSearchParams(window.location.hash.substring(1));
    const token = queryParams.get('access_token');

    if (token != null) {
      sessionStorage.setItem('token', token);
      const cleanURL = window.location.href.split('#')[0];
      window.history.replaceState({}, document.title, cleanURL);
    } else {
      const storedToken = sessionStorage.getItem('token');
      if (storedToken == '') {
        navigate('/login');
      }
    }
  };
  useEffect(() => {
    setToken();
  }, []);

  return (
    <MainLayout>
      <div className="justify-center flex "></div>
    </MainLayout>
  );
};

export default Main;
