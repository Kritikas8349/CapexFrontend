import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import './CreateAccount.css';

function CreateAccount() {
    return (
        <div id='Main'>

            <div className="signup-container">
                {/* Left Section */}
                <div className="signup-left">
                    {/* Logo */}
                    <div className="logo">
                        <img src="/logo.png" alt="Market.trad Logo" />
                       
                    </div>

                    <h2>Get started absolutely free</h2>
                    <p>Welcome to Market.Trad – Let’s Create Account</p>

                    <form className="signup-form">
                        <div className="input-row">
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" />
                        </div>
                        <input type="email" placeholder="Email Address" />
                        <div className="input-row">
                            <input type="date" placeholder="Date of Birth" />
                            <select>
                                <option>Application Types</option>
                                <option>Individual</option>
                                <option>Business</option>
                            </select>
                        </div>
                        <div className="input-row">
                            <select>
                                <option>India</option>
                                <option>USA</option>
                                <option>UK</option>
                            </select>
                            <input type="tel" placeholder="+91 Mobile Phone" />
                        </div>
                        <input type="password" placeholder="Password (6+ characters)" />

                        <button className="create-btn">Create account</button>
                    </form>

                    <p className="terms">
                        By signing up, I agree to the <a href="#">Market.Trad FSA Policies</a>
                    </p>

                    <div className="social-login">
                        <button className="google"><FcGoogle size={20} /> Sign up with Google</button>
                        <button className="apple"><FaApple size={20} /> Sign up with Apple</button>
                    </div>

                    <p className="signin">
                        Already have an account? <a href="#">Sign in</a>
                    </p>
                </div>

                {/* Right Section */}
                <div className="signup-right">
                    <h1>Welcome back!<br />Please sign in to your <span>Market.Trad Account</span></h1>
                    <p>Ranked #1 forex broker in execution speed by CompareForexBrokers.com</p>
                    <img src="./lapi.webp" alt="Laptop trading screen" className="laptop-img" />
                </div>
            </div>

        </div>
    )
}

export default CreateAccount