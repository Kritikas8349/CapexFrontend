import React from 'react';
import "./Intermediate.css";

function Intermediate() {

    const lessons = [
        {
            id: 1,
            title: "Stocks 202: Lesson 1 of 5",
            description: "In this lesson, we explore: Regular Trading Hours, Per-Market and After-Hours Trading, Liuidity Flucations, and Factors Influencing Trading Hours...",
        },
        {
            id: 2,
            title: "Stocks 202: Lesson 2 of 5",
            description: "In this lesson, we explore: Investing for the Long Term, Trading for Short-Term, Risk Profiles, and Objectives...",
        },
        {
            id: 3,
            title: "Stocks 202: Lesson 3 of 5",
            description: "In this lesson, we explore: Ownership vs. Contracts, Leverage, Short Selling, and Market Access...",
        },
        {
            id: 4,
            title: "Stocks 202: Lesson 4 of 5",
            description: "In this lesson, we explore: What is Leverage?, Leverage Magnifies Gains and Losses...",
        },
    ];

    return (
        <div id='IntermediateMain'>

            <div className="intermediate-tutorial">
               

                <div className="intermediate-tutorial-grid">
                    {/* Left Section: Lesson 1 */}
                    <div className="intermediate-left-section">
                        <div className="intermediate-lesson1-image" style={{ backgroundImage: 'url(/stock-202.webp)' }}>
                            <div className="intermediate-lesson1-title"></div>
                        </div>
                        <div className="intermediate-lesson1-text">
                            <h3>Stocks 202: Lesson 1 of 5</h3>
                            <p>
                                In this lesson, we explore: Regular Trading Hours, Per-Market and After-Hours Trading, Liuidity Flucations, and Factors Influencing Trading Hours...
                            </p>
                        </div>
                    </div>

                    {/* Right Section: Lesson 2-4 */}
                    <div className="intermediate-right-section">
                        <div className="intermediate-lesson-card">
                            <div className="intermediate-lesson-card-image" style={{ backgroundImage: 'url(/stock-202.1.webp)' }}>
                                <div className="intermediate-lesson-card-overlay"></div>
                            </div>
                            <div className="intermediate-lesson-card-text">
                                <h4>Stocks 202: Lesson 2 of 5</h4>
                                <p>
                                    In this lesson, we explore: Investing for the Long Term, Trading for Short-Term, Risk Profiles, and Objectives...
                                </p>
                            </div>
                        </div>

                        <div className="intermediate-lesson-card">
                            <div className="intermediate-lesson-card-image" style={{ backgroundImage: 'url(/stock-202.2.webp)' }}>
                                <div className="intermediate-lesson-card-overlay"></div>
                            </div>
                            <div className="intermediate-lesson-card-text">
                                <h4>Stocks 202: Lesson 3 of 5</h4>
                                <p>
                                    In this lesson, we explore: Ownership vs. Contracts, Leverage, Short Selling, and Market Access...
                                </p>
                            </div>
                        </div>

                        <div className="intermediate-lesson-card">
                            <div className="intermediate-lesson-card-image" style={{ backgroundImage: 'url(/stock-202.3.webp)' }}>
                                <div className="intermediate-lesson-card-overlay"></div>
                            </div>
                            <div className="intermediate-lesson-card-text">
                                <h4>Stocks 202: Lesson 4 of 5</h4>
                                <p>
                                    In this lesson, we explore: What is Leverage?, Leverage Magnifies Gains and Losses...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="intermediate-right-extra">
                <div className="intermediate-lesson1-extra-image" style={{ backgroundImage: 'url(/stocks-102.webp)' }}>
                    <div className="intermediate-lesson1-extra-title"></div>
                </div>
                <div className="intermediate-lesson1-extra-text">
                    <h3>Stocks 202: Lesson 5 of 5</h3>
                </div>
            </div>

        </div>
    )
}

export default Intermediate;
