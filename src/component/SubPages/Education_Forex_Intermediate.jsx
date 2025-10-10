import React from 'react';
import "./Education_Forex_Intermediate.css";


function Education_Forex_Intermediate() {

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
                {/* <h1 className="tutorial-heading">Intermediate Forex Tutorial</h1> */}

                <div className="tutorial-grid">
                    {/* Left Section: Lesson 1 */}
                    <div className="left-section">
                        <div className="lesson1-image" style={{ backgroundImage: 'url(/public/i1.png)' }}>
                            <div className="lesson1-title"></div>
                        </div>
                        <div className="lesson1-text">
                            <h3>Forex 202: Lesson 1 of 5</h3>
                            <p>
                                In this lesson, we explore: Overview of the foreign exchange market,
                                Understanding currency pairs, and Key terms and concepts in forex trading...
                            </p>
                        </div>
                    </div>

                    {/* Right Section: Lesson 2-4 */}
                    <div className="right-section">
                        <div className="lesson-card">
                            <div className="lesson-card-image" style={{ backgroundImage: 'url(/public/i2.webp)' }}>
                                <div className="lesson-card-overlay"></div>
                            </div>
                            <div className="lesson-card-text">
                                <h4>Forex 202: Lesson 2 of 5</h4>
                                <p>
                                    In this lesson, we explore: Understanding charts, technical indicators,
                                    and using technical analysis to make trading decisions...
                                </p>
                            </div>
                        </div>

                        <div className="lesson-card">
                            <div className="lesson-card-image" style={{ backgroundImage: 'url(/public/i3.webp)' }}>
                                <div className="lesson-card-overlay"></div>
                            </div>
                            <div className="lesson-card-text">
                                <h4>Forex 202: Lesson 3 of 5</h4>
                                <p>
                                    In this lesson, we explore: Understanding economic reports and their impact
                                    on currency prices, Analyzing news and events ..
                                </p>
                            </div>
                        </div>

                        <div className="lesson-card">
                            <div className="lesson-card-image" style={{ backgroundImage: 'url(/public/i4.webp)' }}>
                                <div className="lesson-card-overlay"></div>
                            </div>
                            <div className="lesson-card-text">
                                <h4>Forex 202: Lesson 4 of 5</h4>
                                <p>
                                    In this lesson, we explore: Understanding the risks involved in forex trading,
                                    Implementing risk management strategies...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="card-bottom-grid">
                {/* Lesson 5 */}
                <div className="card-bottom">
                    <div className="card-bottom-image" style={{ backgroundImage: "url('/public/i5.webp')" }}>

                    </div>
                    <div className="card-bottom-title">Forex 202: Lesson 5 of 5</div>
                </div>

                
            </div>


           




        </div>
    )
}

export default Education_Forex_Intermediate;