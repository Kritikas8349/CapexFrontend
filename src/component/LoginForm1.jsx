import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import for redirection
import axios from "axios";
import "./LoginForm1.css";

const LoginForm1 = () => {
  const navigate = useNavigate(); // ✅ Hook for navigation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Backend URL from Vite env
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${BACKEND_URL}/api/auth/login`, { email, password });

      // ✅ Show message and store user info
      alert(res.data.message);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // ✅ Redirect to dashboard after login
      navigate("/userdashboard");
    } catch (err) {
      console.error("Login error:", err.response || err);
      alert(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
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
          <p>Welcome back! Please enter your details</p>

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
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>

            <button type="submit" className="sign-in-btn" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <div className="or-divider">OR</div>

          <div className="social-buttons">
            <button className="google-btn">Sign up with Google</button>
            <button className="apple-btn">Sign up with Apple</button>
          </div>

          <p className="signup-text">
            Don't have an account? <a href="/create-account">Sign up</a>
          </p>
        </div>
      </div>

      {/* Right Side - Image / Branding */}
      <div className="login-right"></div>
    </div>
  );
};

export default LoginForm1;
