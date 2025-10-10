import React from 'react'
import './TradingOpportunity.css'
function TradingOpportunity() {
    return (
        <div>
            <div className="m1-t-container">
                <h1 className="m1-t-heading">Trading Opportunities</h1>
                <div className="m1-t-card-container">
                    {[1, 2, 3, 4].map(i => (
                        <div className="m1-t-card" key={i}>
                            <img src={`/public/card${i}.webp`} alt={`card${i}`} className="m1-t-card-image" />
                            <div className="m1-t-card-content">
                                <h2 className="m1-t-card-title">Title for card {i}</h2>
                                <p className="m1-t-card-description">Some brief description of the card content for card {i}...</p>
                                <span className="m1-t-date">September {20 + i}, 2025</span>
                                <a href="#" className="m1-t-view-post">View Post</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TradingOpportunity