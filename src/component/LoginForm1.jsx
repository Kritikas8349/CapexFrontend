import React, { useState } from "react";
import "./LoginForm1.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function LoginForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="container">
      <div className="logofix">
      <img src="logo.png" alt="Market Trad Logo" className="logo" />
      </div>
      

      
      <div className="login-form-wrapper">
        <form className="login-form">
          <h2>Sign in to your account</h2>
          <p className="subtext">Welcome back! Please Enter your Details</p>

          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="demo@minimals.cc"
            className="input"
            required
          />

          <label htmlFor="password" className="label">
            Password
          </label>
          <div className="password-wrapper">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder="6+ characters"
              className="input"
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setPasswordVisible(!passwordVisible)}
              aria-label="Toggle password visibility"
              tabIndex={-1}
            >
              {passwordVisible ? (
                <AiFillEyeInvisible className="eye-icon" />
              ) : (
                <AiFillEye className="eye-icon" />
              )}
            </button>
          </div>

          <div className="options-row">
            <label className="remember-me">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#forgot" className="forgot-password">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="sign-in-btn">
            Sign in
          </button>

          <div className="or-divider">
            <span>OR</span>
          </div>

          <div className="social-buttons">
            <button type="button" className="social-btn google-btn">
              <FcGoogle className="social-icon" />
              Sign up with google
            </button>
            <button type="button" className="social-btn apple-btn">
              <FaApple className="social-icon" />
              Sign up with apple
            </button>
          </div>

          <p className="signup-text">
            Don't have an account? <a href="#signup">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}