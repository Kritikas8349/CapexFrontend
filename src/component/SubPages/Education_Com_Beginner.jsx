import React from 'react';
import "./Education_Com_Beginner.css";


function Education_Com_Beginner() {

    const lessons = [
        {
            id: 1,
            title: "Forex 101: Lesson 1 of 7",
            description: "In this lesson, we explore: Overview of the foreign exchange market, Understanding currency pairs, and Key terms and concepts in forex trading...",
        },
        {
            id: 2,
            title: "Forex 101: Lesson 2 of 7",
            description: "In this lesson, we explore: Understanding charts, Understanding technical indicators, and Using technical analysis to make trading decisions...",
        },
        {
            id: 3,
            title: "Forex 101: Lesson 3 of 7",
            description: "In this lesson, we explore: Understanding economic reports and their impact on currency prices, Analyzing news and events to predict...",
        },
        {
            id: 4,
            title: "Forex 101: Lesson 4 of 7",
            description: "In this lesson, we explore: Understanding the risks involved in forex trading, Implementing risk management strategies, and Using stop-loss and...",
        },
    ];

    return (
        <div id='Main'>

            <div className="forex-tutorial">
                <h1 className="tutorial-heading">Beginner Commodities Tutorial</h1>

                <div className="tutorial-grid">
                    {/* Left Section: Lesson 1 */}
                    <div className="left-section">
                        <div className="lesson1-image" style={{ backgroundImage: 'url(b11.webp)' }}>
                            <div className="lesson1-title"></div>
                        </div>
                        <div className="lesson1-text">
                            <h3>Commodities 101: Lesson 1 of 7</h3>
                            <p>
                                In this lesson, we explore: Overview of the foreign exchange market,
                                Understanding currency pairs, and Key terms and concepts in forex trading...
                            </p>
                        </div>
                    </div>

                    {/* Right Section: Lesson 2-4 */}
                    <div className="right-section">
                        <div className="lesson-card">
                            <div className="lesson-card-image" style={{ backgroundImage: 'url(b12.webp)' }}>
                                <div className="lesson-card-overlay"></div>
                            </div>
                            <div className="lesson-card-text">
                                <h4>Commodities 101: Lesson 2 of 7</h4>
                                <p>
                                    In this lesson, we explore: Understanding charts, technical indicators,
                                    and using technical analysis to make trading decisions...
                                </p>
                            </div>
                        </div>

                        <div className="lesson-card">
                            <div className="lesson-card-image" style={{ backgroundImage: 'url(b13.webp)' }}>
                                <div className="lesson-card-overlay"></div>
                            </div>
                            <div className="lesson-card-text">
                                <h4>Commodities 101: Lesson 3 of 7</h4>
                                <p>
                                    In this lesson, we explore: Understanding economic reports and their impact
                                    on currency prices, Analyzing news and events to predict...
                                </p>
                            </div>
                        </div>

                        <div className="lesson-card">
                            <div className="lesson-card-image" style={{ backgroundImage: 'url(b14.webp)' }}>
                                <div className="lesson-card-overlay"></div>
                            </div>
                            <div className="lesson-card-text">
                                <h4>Commodities 101: Lesson 4 of 7</h4>
                                <p>
                                    In this lesson, we explore: Understanding the risks involved in forex trading,
                                    Implementing risk management strategies, and Using stop-loss and...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="card-bottom-grid">
                {/* Lesson 5 */}
                <div className="card-bottom">
                    <div className="card-bottom-image" style={{ backgroundImage: "url('b15.webp')" }}>

                    </div>
                    <div className="card-bottom-title">Commodities 101: Lesson 5 of 7</div>
                </div>

                {/* Lesson 6 */}
                <div className="card-bottom">
                    <div className="card-bottom-image" style={{ backgroundImage: "url('b16.webp')" }}>

                    </div>
                    <div className="card-bottom-title">Commodities 101: Lesson 6 of 7</div>
                </div>

                {/* Lesson 7 */}
                {/* <div className="card-bottom">
                    <div className="card-bottom-image" style={{ backgroundImage: "url('c3.webp')" }}>

                    </div>
                    <div className="card-bottom-title">Forex 101: Lesson 7 of 7</div>
                </div> */}
            </div>


            <div className="m1-payment-container">
                <div className="m1-payment-grid">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" />
                    <img src="mastercard.png" alt="MasterCard" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" className="m1-small-logo" />
                    <img src="googlepay.png" alt="Google Pay" className="m1-small-logo" />
                    <img src="banktransfer.png" alt="Bank Transfer" />
                    <img src="crypto.png" alt="Crypto" />
                    <img src="neteller.png" alt="Neteller" />
                    <img src="skrill.png" alt="Skrill" />
                    <img src="banktransfer.png" alt="Local Bank Transfer" />
                    {/* <img src="banktransfer.png" alt="Local Bank Transfer" /> */}
                </div>
            </div>




        </div>
    )
}

export default Education_Com_Beginner;