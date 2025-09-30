import React from 'react'
import "./Footer.css"
import { FaSearch } from "react-icons/fa";
import { Search } from "lucide-react";



function Footer() {
    return (
        <div id='main-F'>


            <section className="hero-section-F">
                <div className="hero-overlay-F">
                    <div className="hero-content-F">
                        <h1 className="hero-title-F">Start trading in less than 5 minutes</h1>
                        <p className="hero-subtitle-F">with no minimum deposit</p>

                        <div className="hero-form-F">
                            <div className="hero-input-container-F">
                                {/* <Search className="hero-icon-F" size={20} /> */}
                                <input
                                    type="email"
                                    placeholder="Enter your email....."
                                    className="hero-input-F"
                                />
                            </div>
                            <button className="hero-button-F">Join Now</button>
                        </div>
                    </div>
                </div>
            </section>


            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-logo">
                        <img src="Frame9.png" alt="" />
                    </div>
                    <div className="footer-social">
                        <a href="#"><img src="Framefb.png" alt="Facebook" /></a>
                        <a href="#"><img src="Framein.png" alt="LinkedIn" /></a>
                        <a href="#"><img src="Frameinsta.png" alt="Instagram" /></a>
                        <a href="#"><img src="Framex.png" alt="X" /></a>
                        <a href="#"><img src="Framew.png" alt="WhatsApp" /></a>
                        <a href="#"><img src="Frameu.png" alt="Telegram" /></a>
                    </div>
                </div>

                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Markets</h3>
                        <ul>
                            <li>Markets Overview</li>
                            <li>Forex</li>
                            <li>Shares</li>
                            <li>Commodities</li>
                            <li>Futures</li>
                            <li>Indices</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Platforms</h3>
                        <ul>
                            <li>TradingView</li>
                            <li>cTrader</li>
                            <li>MetaTrader 4</li>
                            <li>MetaTrader 5</li>
                            <li>MetaTrader Web Trader</li>
                            <li>Markets.Trad Copy Trader</li>
                            <li>Markets.Trad Invest</li>
                            <li>Trading Tools</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Education</h3>
                        <ul>
                            <li>Education Hub</li>
                            <li>Forex Tutorials</li>
                            <li>Shares Tutorials</li>
                            <li>Commodities Tutorials</li>
                            <li>Trading Opportunities</li>
                            <li>Economic Calendar</li>
                            <li>Demo Trade</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>About</h3>
                        <ul>
                            <li>About us</li>
                            <li>Account Comparison</li>
                            <li>Company News</li>
                            <li>Compliance</li>
                            <li>Careers</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Support</h3>
                        <ul>
                            <li>Platform Support</li>
                            <li>Market Support</li>
                            <li>Account Support</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Legal</h3>
                        <ul>
                            <li>Legal Hub</li>
                            <li>Risk Warning</li>
                            <li>Privacy Policy</li>
                            <li>Client Service Agreement</li>
                            <li>Complaints Handling Procedure</li>
                            <li>Confidentiality Policy</li>
                            <li>Conflicts of Interests Policy</li>
                            <li>Cookie Policy EU</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-contact">
                        <p>Customer Support Contacts</p>
                        <p>Whatsapp Support: +41 xxx xxx xxxx</p>
                        <p>Support: +41 xxx xxx xxxx</p>
                        <p>Email: support@market.trad.com</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer