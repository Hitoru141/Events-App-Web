import React, { useState } from 'react';
import '../Styles/Login.css';

export const useToggleForm = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => setIsLoginForm(!isLoginForm);

  return [isLoginForm, toggleForm];
};

export const Login = () => {
  const [isLoginForm, toggleForm] = useToggleForm();
  const [formTransition, setFormTransition] = useState(false);

  const formTitle = isLoginForm ? 'Admin Sign In' : 'Create an Account';
  const buttonText = isLoginForm ? 'Sign In' : 'Sign Up';

  const onSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  const handleToggleForm = () => {
    setFormTransition(true);
    setTimeout(() => {
      toggleForm();
      setFormTransition(false);
    }, 600); // Wait for the transition to complete
  };

  return (
    <main className="main">
      <div className="container">
        <section className="wrapper">
          <div className="heading">
            <h1 className="text-large">{formTitle}</h1>
          </div>
          <form
            name="signin"
            className={`form ${formTransition ? 'form-transition' : ''}`}
            onSubmit={onSubmit}
          >
            <div className="input-control">
              <label htmlFor="username" className="input-label" hidden>
                Username
              </label>
              <input
                type="text"
                name="text"
                id="text"
                className="input-field"
                placeholder="Username"
              />
            </div>
            <div className="input-control">
              <label htmlFor="password" className="input-label" hidden>
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="input-field"
                placeholder="Password"
              />
            </div>
            {!isLoginForm && (
              <div className="input-control">
                <label htmlFor="confirm-password" className="input-label" hidden>
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  className="input-field"
                  placeholder="Confirm Password"
                />
              </div>
            )}
            <div className="btn-wrap">
              <input
                type="submit"
                name="submit"
                className="input-submit"
                value={buttonText}
                disabled={isLoginForm}
              />
            </div>
            <div className="input-control">
              <a className="text-links" onClick={handleToggleForm}>
                {isLoginForm
                  ? "Don't have an account? Sign up"
                  : 'Already have an account? Sign in'}
              </a>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};
