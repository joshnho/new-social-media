import React from 'react';

const Signup = ({
  data,
  setSignUpForm,
  confirmPass,
  handleChange,
  handleSubmit,
  resetForm,
  loading,
}) => {
  return (
    <div className="a-right">
      <form action="" className="infoForm authForm" onSubmit={handleSubmit}>
        <h3>Sign up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstName"
            onChange={handleChange}
            value={data.firstName}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastName"
            onChange={handleChange}
            value={data.lastName}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={data.username}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="infoInput"
            name="password"
            onChange={handleChange}
            value={data.password}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="infoInput"
            name="confirmPass"
            onChange={handleChange}
            value={data.confirmPass}
          />
        </div>
        {!confirmPass && (
          <span
            style={{
              color: 'red',
              fontSize: '12px',
              alignSelf: 'flex-end',
              marginRight: '5px',
            }}
          >
            * Passwords do not match
          </span>
        )}
        <div>
          <span
            onClick={() => {
              setSignUpForm(false);
              resetForm();
            }}
            style={{ fontSize: '12px', cursor: 'pointer' }}
          >
            Already have an account? Login here
          </span>
        </div>
        <button className="button infoButton" type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Signup'}
        </button>
      </form>
    </div>
  );
};

export default Signup;
