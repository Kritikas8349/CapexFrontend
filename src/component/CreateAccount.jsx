import React, { useState } from "react";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import './CreateAccount.css';

function CreateAccount() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
        applicationType: '',
        country: '',
        phone: '',
        password: ''
    });

    const [loading, setLoading] = useState(false);

    // ✅ Get backend URL from Vite env
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
    console.log("Backend URL:", BACKEND_URL); // Debug: check if it's correct

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (!BACKEND_URL) throw new Error("Backend URL is not defined");

            const res = await axios.post(`${BACKEND_URL}/api/auth/register`, formData);
            alert(res.data.message);

            // Reset form after success
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                dob: '',
                applicationType: '',
                country: '',
                phone: '',
                password: ''
            });
        } catch (err) {
            console.error("Axios error:", err.response || err);
            alert(err.response?.data?.message || err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id='Main9'>
            <div className="signup-container">
                <div className="signup-left">
                    <div className="logo">
                        <img src="/logo.png" alt="Market.trad Logo" />
                    </div>

                    <h2>Get started absolutely free</h2>
                    <p>Welcome to Market.Trad – Let’s Create Account</p>

                    <form className="signup-form" onSubmit={handleSubmit} autoComplete="off">
                        <input type="password" style={{ display: 'none' }} />

                        <div className="input-row">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                onChange={handleChange}
                                value={formData.firstName}
                                autoComplete="given-name"
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                onChange={handleChange}
                                value={formData.lastName}
                                autoComplete="family-name"
                                required
                            />
                        </div>

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            onChange={handleChange}
                            value={formData.email}
                            autoComplete="email"
                            required
                        />

                        <div className="input-row">
                            <input
                                type="date"
                                name="dob"
                                onChange={handleChange}
                                value={formData.dob}
                                autoComplete="bday"
                                required
                            />
                            <select
                                name="applicationType"
                                onChange={handleChange}
                                value={formData.applicationType}
                                required
                            >
                                <option value="">Application Types</option>
                                <option value="Individual">Individual</option>
                                <option value="Business">Business</option>
                            </select>
                        </div>

                        <div className="input-row">
                            <select
                                name="country"
                                onChange={handleChange}
                                value={formData.country}
                                required
                            >
                                <option value="">Select Country</option>
                                <option value="India">India</option>
                                <option value="USA">USA</option>
                                <option value="UK">UK</option>
                            </select>
                            <input
                                type="tel"
                                name="phone"
                                placeholder=" Mobile Number"
                                onChange={handleChange}
                                value={formData.phone}
                                required
                            />
                        </div>

                        <input
                            type="password"
                            name="password"
                            placeholder="Password (6+ characters)"
                            onChange={handleChange}
                            value={formData.password}
                            autoComplete="new-password"
                            required
                        />

                        <button className="create-btn" type="submit" disabled={loading}>
                            {loading ? "Creating..." : "Create account"}
                        </button>
                    </form>

                    <p className="terms">
                        By signing up, I agree to the <a href="#">Market.Trad FSA Policies</a>
                    </p>

                    <div className="social-login">
                        <button className="google"><FcGoogle size={20} /> Sign up with Google</button>
                        <button className="apple"><FaApple size={20} /> Sign up with Apple</button>
                    </div>

                    <p className="signin">
                        Already have an account? <a href="/loginform">Sign in</a>
                    </p>
                </div>

                <div className="signup-right">
                    <h1>
                        Welcome back!<br />
                        Please sign in to your <span>Market.Trad Account</span>
                    </h1>
                    <p>Ranked #1 forex broker in execution speed by CompareForexBrokers.com</p>
                    <img src="/lapi.webp" alt="Laptop trading screen" className="laptop-img" />
                </div>
            </div>
        </div>
    );
}

export default CreateAccount;

