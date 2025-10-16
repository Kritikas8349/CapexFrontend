import React from 'react'
import "./DailyNews.css";
import trd from '/trd.jpg';

function DailyNews() {

    const newsData = [
        {
            date: '23 September 2025',
            title: 'Outliers aren’t the rule — but the illusion is'
        },
        {
            date: '12 September 2025',
            title: 'The challenge of market timing: Missing the best days cuts returns in half',
            description:
                'Stock indices continue to grind higher, with the S&P recently closing at a record high of 6,532. Investor optimism is powered by hopes for rate cuts, easing Treasury yields, and strong earnings momentum. Still, some market commentators caution that rapid gains and stretched valuations warrant close scrutiny.'
        },
        {
            date: '8 May 2025',
            title: 'Why is a shiny block of metal so popular?'
        },
        {
            date: '1 May 2025',
            title: 'Auto loans are bad; but earnings are good'
        },
        {
            date: '21 April 2025',
            title: 'Have you heard the one about the oil prospector…'
        },
        {
            date: '8 April 2025',
            title: 'Tariffs, but like a supermarket'
        },
        {
            date: '4 April 2025',
            title: 'Well, here’s Stagflation and a whole lot of tariffs'
        },
        {
            date: '2 April 2025',
            title: 'Serato (and the whole Tiny thing); Kering just keeps getting cheaper'
        },
        {
            date: '31 March 2025',
            title: 'Is a 100% independent board good?'
        }
    ];


    return (
        <div id='Main'>
             <div className="news-section" style={{ backgroundImage: `url(${trd})` }}>
                <div className="overlay">
                    <h1 className="newsh">News</h1>
                    <p className="news-des">
                        Stay ahead with real-time updates on major economic events, expert insights, videos,<br />
                        and more from our global market specialists.
                    </p>
                </div>
            </div>


            <div className="newsfeed-container">
                {newsData.map((item, index) => (
                    <div key={index} className="newsfeed-item">
                        <h3 className="newsfeed-title">
                            {item.date} - {item.title}
                        </h3>
                        {item.description && <p className="newsfeed-description">{item.description}</p>}
                    </div>
                ))}

                <div className="newsfeed-pagination">
                    <button className="newsfeed-page-btn active">1</button>
                    <button className="newsfeed-page-btn">2</button>
                    <span className="newsfeed-dots">...</span>
                    <button className="newsfeed-page-btn">198</button>
                    <button className="newsfeed-page-btn next">Next ›</button>
                </div>
            </div>


            <section className="pricing-section">
                <h1 className="section-title">Choose Your Plan</h1>
                <p className="section-subtitle">
                    Access market intelligence tailored for serious investors. Choose a plan that fits your needs—whether you’re looking for timely insights, in-depth analysis, or custom research solutions backed by real expertise.
                    <span className="link"> view more.</span>
                </p>

                <div className="pricing-cards">
                    {/* Monthly Plan */}
                    <div className="card">
                        <h2>Monthly</h2>
                        <p className="billing">Billed Monthly/NZD</p>
                        <div className="price">$45</div>
                        <div className="tag">Per Month</div>
                        <p className="description">
                            Ideal for active investors who want to stay informed without a long-term commitment.
                        </p>
                        <button className="btn">Subscribe Now</button>
                    </div>

                    {/* Annual Plan */}
                    <div className="card ">
                        <div className="badge">$37.5 P/M</div>
                        <h2>Annually</h2>
                        <p className="billing">Billed Annually/NZD</p>
                        <div className="price">$450</div>
                        <div className="tag">Per Year</div>
                        <p className="description">
                            Perfect for serious investors who rely on consistent, high-quality market insights.
                        </p>
                        <button className="btn">Subscribe Now</button>
                    </div>

                    {/* Custom Research */}
                    <div className="card">
                        <h2>Custom Research</h2>
                        <p className="billing">$200 Per Hour/NZD</p>
                        <div className="price">$5K</div>
                        <div className="tag light">Starting From</div>
                        <p className="description">
                            Our team can deliver tailored insights and deep-dive reports to support your investment.
                        </p>
                        <button className="btn secondary">Request a Quote</button>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default DailyNews;