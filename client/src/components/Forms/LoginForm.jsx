import React from 'react';

const Login = ({
  data,
  setSignUpForm,
  handleChange,
  handleSubmit,
  resetForm,
  loading,
}) => {
  return (
    <div className="a-right">
      <form className="infoForm authForm" onSubmit={handleSubmit}>
        <h3>Log In</h3>

        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
            onChange={handleChange}
            value={data.username}
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={data.password}
          />
        </div>

        <div>
          <span
            onClick={() => {
              setSignUpForm(true);
              resetForm();
            }}
            style={{ fontSize: '12px', cursor: 'pointer' }}
          >
            Don't have an account? Sign up here
          </span>
          <button
            className="button infoButton"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Login'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
