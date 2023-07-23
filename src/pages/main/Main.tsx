import React, { useEffect } from 'react';

const Main = () => {
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.hash.substring(1));
    const token = queryParams.get('access_token') || '';
    if (token != null) {
      sessionStorage.setItem('token', token);
      console.log('1');
    } else {
      console.log('2');
    }
  }, []);
  return (
    <div>
      <div className="justify-center flex">This is main spotify</div>
      <div></div>
    </div>
  );
};

export default Main;
