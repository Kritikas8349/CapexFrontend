import React, { useState } from "react";
import "./LoginForm1.css";

const LoginForm1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-wrapper">
    {/* Left Side - Login Form */}
    <div className="login-left">
      <div className="logo">
        <h1>
          Market.<span className="logo-blue">trad</span>
        </h1>
      </div>
      <div className="login-box">
        <h2>Sign in to your account</h2>
        <p>Welcome back! Please Enter your Details</p>
        <form onSubmit={handleSubmit}>
          <label>Email address</label>
          <input
            type="email"
            placeholder="demo@minimals.cc"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
  
          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="6+ characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
  
          <div className="form-footer">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
  
          <button type="submit" className="sign-in-btn">
            Sign in
          </button>
        </form>
  
        <div className="or-divider">OR</div>
  
        <div className="social-buttons">
          <button className="google-btn">Sign up with Google</button>
          <button className="apple-btn">Sign up with Apple</button>
        </div>
  
        <p className="signup-text">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  
    {/* Right Side - Info & Image */}
    <div className="login-right">
      <h2>Welcome back!</h2>
      <p>
        Please sign in to your <strong>Market.Trad</strong> Account
      </p>
      <p className="subtext">
        Ranked #1 forex broker in execution speed by Compare ForexBrokers.com
      </p>
      <img src="laptop2.png" alt="Dashboard screenshot" />
    </div>
  </div>
  
  );
};

export default LoginForm1;
