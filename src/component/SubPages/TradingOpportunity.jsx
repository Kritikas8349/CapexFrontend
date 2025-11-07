import React from 'react'
import './TradingOpportunity.css'
function TradingOpportunity() {
    return (
        <div className='bg-faq mt-lg-2 mx-lg-3 rounded rounded-4  pt-5' style={{minHeight: '98vh'}}>
            <div className="m1-t-container mt-5 pt-5 ">
                <h1 className="m1-t-heading  text-start mb-5 pb-4 ">Trading Opportunities</h1>
                <div className="m1-t-card-container text-start">
                    {[1, 2, 3, 4].map(i => (
                        <div className="m1-t-card custom-card" key={i}>
                            <img src={`/card${i}.webp`} alt={`card${i}`} className="m1-t-card-image " />
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