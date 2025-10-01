import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import "./QuickStart4.css";

function QuickStart4() {
    const [step, setStep] = useState(1);
    const [selectedOption, setSelectedOption] = useState('');
    const [activeIndex, setActiveIndex] = useState(null); // ✅ FIXED

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const nextStep = () => {
        if (step < 3) {
            setStep(step + 1);
        }
    };

    const previousStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const toggleFaq = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const faqData = [
        {
            question: 'Can I switch between different account types?',
            answer: 'Yes, you have the flexibility to switch between different account types. If you wish to change account type, email support@blackbull.com or talk to our live support staff.'
        },
        {
            question: 'How is commission charged for a Prime Account?',
            answer: 'Commission for a Prime Account is charged per trade depending on the asset class and volume.'
        },
        {
            question: 'Can I open a Swap Free Account?',
            answer: 'Yes, swap-free accounts are available for clients who follow Shariah law. Contact support to request one.'
        },
        {
            question: 'Can I use any platform with any account type?',
            answer: 'Yes, our platforms are compatible with all account types, giving you full flexibility.'
        }
    ];

    return (
        <div id='Main'>


            <div className="outer">
                <div className="top-section">
                    <h1>
                        Trading Account <br /> Type Comparison
                    </h1>
                </div>

                <div className="table-section">
                    <table>
                        <thead>
                            <tr>
                                <th id='end'>Compare Accounts</th>
                                <th className="blue">
                                    Standard<br /><span>Perfect for traders who are just beginning</span>
                                </th>
                                <th className="blue">
                                    Raw<br /><span>Perfect for traders with experience</span>
                                </th>
                                <th className="blue">
                                    Pro<br /><span>Perfect for high-volume traders</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr id='background'>
                                <td>Spreads (pips)</td>
                                <td>From 1.5</td>
                                <td>From 0.0</td>
                                <td>From 0.6</td>
                            </tr>
                            <tr>
                                <td>Commission (Per side)</td>
                                <td>No commission</td>
                                <td>US$3.00</td>
                                <td>No commission</td>
                            </tr>
                            <tr id='background'>
                                <td>Minimum Deposit</td>
                                <td>US$50</td>
                                <td>US$100</td>
                                <td>US$500</td>
                            </tr>
                            <tr>
                                <td>Minimum Trade Size</td>
                                <td>0.01 lots</td>
                                <td>0.01 lots</td>
                                <td>0.01 lots</td>
                            </tr>
                            <tr id='background'>
                                <td>Leverage</td>
                                <td>Up to 1:500</td>
                                <td>Up to 1:500</td>
                                <td>Up to 1:500</td>
                            </tr>
                            <tr>
                                <td>Margin Call Level</td>
                                <td>50%</td>
                                <td>50%</td>
                                <td>50%</td>
                            </tr>
                            <tr id='background'>
                                <td>Stop Out Level</td>
                                <td>20%</td>
                                <td>20%</td>
                                <td>20%</td>
                            </tr>
                            <tr>
                                <td>Swap Free</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr id='background'>
                                <td>Local INR Payments</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><button className="btn blue">Open Standard</button></td>
                                <td><button className="btn green">Open Raw</button></td>
                                <td><button className="btn blue">Open Pro</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <section className="account-section">
                <div className="account-content">
                    <h1>Our Account Types</h1>
                    <p className="highlight">
                        <a href="#">Standard</a>, <a href="#">Prime</a>, and <a href="#">Institutional</a>
                    </p>
                    <p className="desc">
                        We understand every trader is different. Compare<br /> our trading accounts
                        and find the perfect fit for your trading needs.
                    </p>
                </div>

                <div className="account-video">
                    <video controls>
                        <source src="vid.html" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>

            <div className="quiz-container">
                <div className="quiz-header">
                    <h1>Not sure which account type is best for you?</h1>
                    <p>Take our short quiz:</p>
                </div>

                <div className="progress-bar">
                    <div className="progress" style={{ width: `${(step / 3) * 100}%` }}></div>
                </div>

                <div className="quiz-step">
                    <h3>Step {step} of 3</h3>

                    {step === 1 && (
                        <>
                            <h4>1. How many years of trading experience do you have?</h4>
                            <div className="options">
                                <label>
                                    <input type="radio" name="experience" value="less1" checked={selectedOption === 'less1'} onChange={handleOptionChange} />
                                    Less than 1
                                </label>
                                <label>
                                    <input type="radio" name="experience" value="1to3" checked={selectedOption === '1to3'} onChange={handleOptionChange} />
                                    Between 1-3
                                </label>
                                <label>
                                    <input type="radio" name="experience" value="moreThan3" checked={selectedOption === 'moreThan3'} onChange={handleOptionChange} />
                                    More than 3
                                </label>
                            </div>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <h4>2. How much do you plan to fund?</h4>
                            <div className="options">
                                <label><input type="radio" name="option2" value="optionA" /> Less than US$2,000</label>
                                <label><input type="radio" name="option2" value="optionB" /> Between US$2,000 - US$10,000</label>
                                <label><input type="radio" name="option2" value="optionC" /> More than US$10,000</label>
                            </div>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <h4>3. What is your typical trade size?</h4>
                            <div className="options">
                                <label><input type="radio" name="option3" value="optionA" /> I’ve never placed a trade before</label>
                                <label><input type="radio" name="option3" value="optionB" /> Small (micro-lots)</label>
                                <label><input type="radio" name="option3" value="optionC" /> Medium (mini-lots)</label>
                                <label><input type="radio" name="option3" value="optionD" /> Large (standard-lots)</label>
                            </div>
                        </>
                    )}

                    <div className="navigation-buttons">
                        <button className="prev-btn" onClick={previousStep} disabled={step === 1}>Previous</button>
                        <button className="next-btn" onClick={nextStep} disabled={!selectedOption}>Next</button>
                    </div>
                </div>
            </div>

            <div className="blackbull-section-p">
                <div className="blackbull-content">
                    <h2 className="header">Why BlackBull Markets?</h2>
                    <div className="cards-container">
                        <div className="card"><h3>26k+</h3><p>Tradable Assets</p></div>
                        <div className="card"><h3>1:500</h3><p>Leverage up to</p></div>
                        <div className="card"><h3>Regulated</h3><p>Multi-Regulated</p></div>
                        <div className="card"><h3>24/7</h3><p>Client Support</p></div>
                        <div className="card"><h3>$0</h3><p>No Minimum Deposit</p></div>
                    </div>
                </div>
            </div>

            {/* Account cards */}
            {/* <!-- Block 1 --> */}
            <div className='res-img'>
            <div class="standard-account">
                <div class="left-image">
                    <img src="pho.avif" alt="Trader 1" />
                    <div class="right-content">
                        <h2 class="heading">Standard</h2>
                        <h3 class="subheading">Create an account<br />in less than 5 minutes</h3>
                        <ul class="features">
                            <li>US$0 Minimum Deposit</li>
                            <li>Leverage up to 1:500</li>
                            <li>No Commissions</li>
                            <li>Swap free available</li>
                        </ul>
                        <button class="create-btn">Create Account</button>
                    </div>
                </div>
            </div>

            {/* <!-- Block 2 --> */}
            <div class="standard-account">
                <div class="left-image">
                    <img src="pho2.avif" alt="Trader 2" />
                    <div class="right-content">
                        <h2 class="heading">Standard </h2>
                        <h3 class="subheading">Instant access<br />to global markets</h3>
                        <ul class="features">
                            <li>Low spreads starting at 0.5 pips</li>
                            <li>Fast execution</li>
                            <li>Advanced trading tools</li>
                            <li>24/5 support</li>
                        </ul>
                        <button class="create-btn">Create Account</button>
                    </div>
                </div>
            </div>

            {/* <!-- Block 3 --> */}
            <div class="standard-account">
                <div class="left-image">
                    <img src="pho3.avif" alt="Trader 3" />
                    <div class="right-content">
                        <h2 class="heading">Pro Trader</h2>
                        <h3 class="subheading">Designed for<br />experienced traders</h3>
                        <ul class="features">
                            <li>Raw spreads from 0.0 pips</li>
                            <li>Commission-based pricing</li>
                            <li>High liquidity access</li>
                            <li>Priority support</li>
                        </ul>
                        <button class="create-btn   ">Create Account</button>
                    </div>
                </div>
            </div>
            </div>


            {/* FAQ Section */}
            <div className="faq-container">
                <h2 className="faq-title">FAQ</h2>
                {faqData.map((item, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => toggleFaq(index)}>
                            <h3>{item.question}</h3>
                            <span className="icon">
                                {activeIndex === index ? <FiMinus /> : <FiPlus />}
                            </span>
                        </div>
                        {activeIndex === index && (
                            <div className="faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>





            <div className="payment-container4">
                <div className="payment-grid4">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" />
                    <img src="mastercard.png" alt="MasterCard" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" className="small-logo" />
                    <img src="googlepay.png" alt="Google Pay" className="small-logo" />
                    <img src="banktransfer.png" alt="Bank Transfer" />
                    <img src="crypto.png" alt="Crypto" />
                    <img src="neteller.png" alt="Neteller" />
                    <img src="skrill.png" alt="Skrill" />
                    <img src="banktransfer.png" alt="Local Bank Transfer" />
                    {/* <img src="banktransfer.png" alt="Local Bank Transfer" /> */}
                </div>
            </div>



            {/* <section className="hero4">
                <div className="hero-overlay4">
                    <div className="hero-content4">
                        <h1>
                            Start trading in less than <span>5 minutes</span>
                        </h1>
                        <p>with no minimum deposit</p>

                        <div className="hero-form4">
                            <input type="email" placeholder="Email address" />
                            <button className="join-btn4">Join Now</button>
                        </div>
                    </div>

                    
                    <div className="awards4">
                        <p>AWARDED BY THE BEST</p>
                        <div className="awards-logos4">
                            
                            <span>🏆 Award 1</span>
                            <span>🏆 Award 2</span>
                            <span>🏆 Award 3</span>
                        </div>
                    </div>
                </div>
            </section>



            <div className="footer-container4">
                <div className="footer-top4">
                    <div className="footer-logo4">
                        <img src="Frame9.png" alt="" />
                    </div>
                    <div className="footer-social4">
                        <a href="#"><img src="Framefb.png" alt="Facebook" /></a>
                        <a href="#"><img src="Framein.png" alt="LinkedIn" /></a>
                        <a href="#"><img src="Frameinsta.png" alt="Instagram" /></a>
                        <a href="#"><img src="Framex.png" alt="X" /></a>
                        <a href="#"><img src="Framew.png" alt="WhatsApp" /></a>
                        <a href="#"><img src="Frameu.png" alt="Telegram" /></a>
                    </div>
                </div>

                <div className="footer-content4">
                    <div className="footer-section4">
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

                    <div className="footer-section4">
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

                    <div className="footer-section4">
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

                    <div className="footer-section4">
                        <h3>About</h3>
                        <ul>
                            <li>About us</li>
                            <li>Account Comparison</li>
                            <li>Company News</li>
                            <li>Compliance</li>
                            <li>Careers</li>
                        </ul>
                    </div>

                    <div className="footer-section4">
                        <h3>Support</h3>
                        <ul>
                            <li>Platform Support</li>
                            <li>Market Support</li>
                            <li>Account Support</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    <div className="footer-section4">
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

                <div className="footer-bottom4">
                    <div className="footer-contact4">
                        <p>Customer Support Contacts</p>
                        <p>Whatsapp Support: +41 xxx xxx xxxx</p>
                        <p>Support: +41 xxx xxx xxxx</p>
                        <p>Email: support@market.trad.com</p>
                    </div>
                </div>
            </div> */}











        </div>
    );
}

export default QuickStart4;
