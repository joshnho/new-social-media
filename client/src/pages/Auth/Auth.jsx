import React from 'react';
import Login from '../../components/Forms/Login';
import Signup from '../../components/Forms/Signup';
import Logo from '../../img/logo.png';

import './Auth.css';

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Welcome-text">
          <h1>Zkc Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {/* <Signup /> */}
      <Login />
    </div>
  );
};

export default Auth;
