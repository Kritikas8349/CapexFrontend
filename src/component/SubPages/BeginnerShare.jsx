import React from 'react';
import "./BeginnerShare.css";

function BeginnerShare() {

    const lessons = [
        {
            id: 1,
            title: "Stocks 101: Lesson 1 of 5",
            description: "In this lesson, we explore: Understanding the stock market...",
        },
        {
            id: 2,
            title: "Stocks 101: Lesson 2 of 5",
            description: "In this lesson, we explore: Overview of stock market indices, and Key indices...",
        },
        {
            id: 3,
            title: "Stocks 101: Lesson 3 of 5",
            description: "In this lesson, we explore: Overview of stock and index CFD...",
        },
        {
            id: 4,
            title: "Stocks 101: Lesson 4 of 5",
            description: "In this lesson, we explore: Overview of financial statements, and Key ratios for stock analysis...",
        },
    ];

    return (
        <div id='BeginnerMain'>

            <div className="beginner-forex-tutorial">
                <h1 className="beginner-tutorial-heading">Beginner Shares Tutorial</h1>

                <div className="beginner-tutorial-grid">
                    {/* Left Section: Lesson 1 */}
                    <div className="beginner-left-section">
                        <div className="beginner-lesson1-image" style={{ backgroundImage: 'url(/public/stocks-101.1.png)' }}>
                            <div className="beginner-lesson1-title"></div>
                        </div>
                        <div className="beginner-lesson1-text">
                            <h3>Stocks 101: Lesson 1 of 5</h3>
                            <p>
                                In this lesson, we explore: Understanding the stock market...
                            </p>
                        </div>
                    </div>

                    {/* Right Section: Lesson 2-4 */}
                    <div className="beginner-right-section">
                        <div className="beginner-lesson-card">
                            <div className="beginner-lesson-card-image" style={{ backgroundImage: 'url(/public/stocks-102.webp)' }}>
                                <div className="beginner-lesson-card-overlay"></div>
                            </div>
                            <div className="beginner-lesson-card-text">
                                <h4>Stocks 101: Lesson 2 of 5</h4>
                                <p>
                                    In this lesson, we explore: Overview of stock market indices, and Key indices...
                                </p>
                            </div>
                        </div>

                        <div className="beginner-lesson-card">
                            <div className="beginner-lesson-card-image" style={{ backgroundImage: 'url(/public/stocks-101.3.png)' }}>
                                <div className="beginner-lesson-card-overlay"></div>
                            </div>
                            <div className="beginner-lesson-card-text">
                                <h4>Stocks 101: Lesson 3 of 5</h4>
                                <p>
                                    In this lesson, we explore: Overview of stock and index CFD...
                                </p>
                            </div>
                        </div>

                        <div className="beginner-lesson-card">
                            <div className="beginner-lesson-card-image" style={{ backgroundImage: 'url(/public/stocks-101.4.webp)' }}>
                                <div className="beginner-lesson-card-overlay"></div>
                            </div>
                            <div className="beginner-lesson-card-text">
                                <h4>Stocks 101: Lesson 4 of 5</h4>
                                <p>
                                    In this lesson, we explore: Overview of financial statements, and Key ratios for stock analysis...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="beginnerrightsection">
                        <div className="beginnerlesson1image" style={{ backgroundImage: 'url(/public/stocks-101.5.webp)' }}>
                            <div className="beginnerlesson1title"></div>
                        </div>
                        <div className="beginnerlesson1text">
                            <h3>Stocks 101: Lesson 5 of 5</h3>
                            
                        </div>
                    </div>

        </div>
    )
}

export default BeginnerShare;
