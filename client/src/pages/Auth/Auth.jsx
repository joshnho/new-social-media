import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../../components/Forms/LoginForm';
import SignupForm from '../../components/Forms/SignupForm';
import Logo from '../../img/logo.png';
import { login, signUp } from '../../Redux/actions/Auth';

import './Auth.css';

const Auth = () => {
  const [signUpForm, setSignUpForm] = useState(false);
  const [confirmPass, setConfirmPass] = useState(true);
  const loading = useSelector((state) => state.authReducer.loading);
  const dispatch = useDispatch();
  console.log(loading);

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPass: '',
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signUpForm) {
      return data.password === data.confirmPass
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } else {
      dispatch(login(data));
    }
  };

  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      confirmPass: '',
    });
  };

  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Welcome-text">
          <h1>Zkc Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {signUpForm ? (
        <SignupForm
          data={data}
          setSignUpForm={setSignUpForm}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          confirmPass={confirmPass}
          resetForm={resetForm}
          loading={loading}
        />
      ) : (
        <LoginForm
          data={data}
          setSignUpForm={setSignUpForm}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          resetForm={resetForm}
          loading={loading}
        />
      )}
    </div>
  );
};

export default Auth;
