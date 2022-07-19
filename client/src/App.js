import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import Auth from './pages/Auth/Auth';
import { Home } from './pages/Home/Home';
import Profile from './pages/Profile/Profile';

import './App.css';

const App = () => {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div className="App">
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="/signin" />}
        />
        <Route
          path="home"
          element={user ? <Home /> : <Navigate to="../signin" />}
        />
        <Route
          path="/signin"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
      </Routes>
    </div>
  );
};

export default App;
