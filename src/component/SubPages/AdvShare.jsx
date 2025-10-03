import React from 'react';
import "./AdvShare.css";

function AdvShare() {

    const lessons = [
        {
            id: 1,
            title: "Stocks Advanced: Lesson 1 of 5",
            description: "In this lesson, we explore: What is a Stock Split?, Impact on Share Quantity, Reverse Splits, and Market reactions...",
        },
        {
            id: 2,
            title: "Stocks Advanced: Lesson 2 of 5",
            description: "In this lesson, we explore: Covered Call Strategy, Protective Put Strategy, Straddle Strategy, Iron...",
        },
        {
            id: 3,
            title: "Stocks Advanced: Lesson 3 of 5",
            description: "In this lesson, we explore: Implied Volatility Defined, Historical vs. Implied Volatility...",
        },
        {
            id: 4,
            title: "Stocks Advanced: Lesson 4 of 5",
            description: "In this lesson, we explore: Covered Call Writing, Cash-Secured Puts, Credit Spreads, Calendar Spreads...",
        },
    ];

    return (
        <div id='AdvShareMain'>

            <div className="adv-tutorial">
                <h1 className="adv-tutorial-heading">Advanced Shares Tutorial</h1>

                <div className="adv-tutorial-grid">
                    {/* Left Section: Lesson 1 */}
                    <div className="adv-left-section">
                        <div className="adv-lesson1-image" style={{ backgroundImage: 'url(/public/stocks-303.webp)' }}>
                            <div className="adv-lesson1-title"></div>
                        </div>
                        <div className="adv-lesson1-text">
                            <h3>Stocks Advanced: Lesson 1 of 5</h3>
                            <p>
                                In this lesson, we explore: What is a Stock Split?, Impact on Share Quantity, Reverse Splits, and Market Reactions...
                            </p>
                        </div>
                    </div>

                    {/* Right Section: Lesson 2-4 */}
                    <div className="adv-right-section">
                        <div className="adv-lesson-card">
                            <div className="adv-lesson-card-image" style={{ backgroundImage: 'url(/public/stocks-303.1.webp)' }}>
                                <div className="adv-lesson-card-overlay"></div>
                            </div>
                            <div className="adv-lesson-card-text">
                                <h4>Stocks Advanced: Lesson 2 of 5</h4>
                                <p>
                                    In this lesson, we explore: Covered Call Strategy, Protective Put Strategy, Straddle Strategy, Iron...
                                </p>
                            </div>
                        </div>

                        <div className="adv-lesson-card">
                            <div className="adv-lesson-card-image" style={{ backgroundImage: 'url(/public/stocks-303.2.webp)' }}>
                                <div className="adv-lesson-card-overlay"></div>
                            </div>
                            <div className="adv-lesson-card-text">
                                <h4>Stocks Advanced: Lesson 3 of 5</h4>
                                <p>
                                    In this lesson, we explore: Implied Volatility Defined, Historical vs. Implied Volatility...
                                </p>
                            </div>
                        </div>

                        <div className="adv-lesson-card">
                            <div className="adv-lesson-card-image" style={{ backgroundImage: 'url(/public/stocks-303.3.png)' }}>
                                <div className="adv-lesson-card-overlay"></div>
                            </div>
                            <div className="adv-lesson-card-text">
                                <h4>Stocks Advanced: Lesson 4 of 5</h4>
                                <p>
                                    In this lesson, we explore: Covered Call Writing, Cash-Secured Puts, Credit Spreads, Calendar Spreads...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="adv-right-extra">
                <div className="adv-lesson1-extra-image" style={{ backgroundImage: 'url(/public/stocks-303.4.webp)' }}>
                    <div className="adv-lesson1-extra-title"></div>
                </div>
                <div className="adv-lesson1-extra-text">
                    <h3>Stocks Advanced: Lesson 5 of 5</h3>
                </div>
            </div>

        </div>
    )
}

export default AdvShare;
