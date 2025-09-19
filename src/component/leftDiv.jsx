
import React from 'react';
import "./leftDiv.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

function LeftDiv() {
  return (
    <div className="left-container">
      <div className="logo"><img src="Frame 1.png" alt="logo" /></div>

        <div id='text' >
      <h2 className="title">Get started absolutely free</h2>
      <p className="subtitle">Welcome to Market.Trad – Let's Create Account</p>

        </div>

      <form className="form">
        <div className="row">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>

        <input type="email" placeholder="Email Address" />
        
        <div className="row">
          <input type="date" placeholder="Date of Birth" />
          <select>
            <option>Application Types</option>
            <option>Trading</option>
            <option>Investing</option>
          </select>
        </div>

        <div className="row">
          <select>
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
          </select>
          <input type="tel" placeholder="+91" />
        </div>

        <input type="password" placeholder="6+ characters" />

        <button type="submit">Create account</button>
      </form>

      <p className="policy">
        By signing up, I agree to the <a href="#">Market.Trad FSA Policies</a>
      </p>

      <div className="divider">OR</div>

      <div className="social-buttons">
  <button className="google">
    <FcGoogle style={{ marginRight: "8px", fontSize: "18px", }} />
    Sign up with Google
  </button>
  <button className="apple">
    <FaApple style={{ marginRight: "8px", fontSize: "18px" }} />
    Sign up with Apple
  </button>
</div>

      <p className="signin">Already have an account? <a href="#">Sign in</a></p>
    </div>
  );
}

export default LeftDiv;
