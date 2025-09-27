import React from 'react'
import "./EquityResearch.css";

function EquityResearch() {

    const stockData = [
        {
            logo: "apple-big.svg",
            ticker: "AAPL:NASDAQ",
            name: "Apple Inc",
            price: "USD",
            marketCap: "—",
            recommendation: "Hold",
        },
        {
            logo: "EA.svg",
            ticker: "EA:NASDAQ",
            name: "Electronic Arts Inc",
            price: "USD",
            marketCap: "—",
            recommendation: "Hold",
        },
        {
            logo: "netflix.svg",
            ticker: "NFLX:NASDAQ",
            name: "Netflix Inc",
            price: "USD",
            marketCap: "—",
            recommendation: "Neutral",
        },
        {
            logo: "nike-big.svg",
            ticker: "NKE:NYSE",
            name: "Nike Inc",
            price: "USD",
            marketCap: "—",
            recommendation: "↑ Buy",
        },
        {
            logo: "amazon.svg",
            ticker: "AMZN:NASDAQ",
            name: "Amazon.com",
            price: "USD",
            marketCap: "—",
            recommendation: "↑ Buy",
        },
    ];

    const stockList = [
        {
            logo: "a.webp",
            ticker: "DG:NYSE",
            name: "Dollar General",
            price: "USD",
        },
        {
            logo: "84.webp",
            ticker: "RAK:NZX",
            name: "Rakon",
            price: "NZD",
        },
        {
            logo: "b.webp",
            ticker: "DGE:LON",
            name: "Diageo",
            price: "GPD",
        },
        {
            logo: "4.png",
            ticker: "HKSHY:NASDAQ",
            name: "Hong Kong & Shanghai Hotels",
            price: "US",
        },
        {
            logo: "c.webp",
            ticker: "SCHW:NYSE",
            name: "Charles Schwab",
            price: "US",
        },
        {
            logo: "6.webp",
            ticker: "OXY:NYSE",
            name: "Occidental Petroleum",
            price: "US",
        },
        {
            logo: "d.webp",
            ticker: "MANU:NYSE",
            name: "Manchester United",
            price: "23.00",
        },
        {
            logo: "8.webp",
            ticker: "GS:NYSE",
            name: "Goldman Sachs",
            price: "349.92 USD",
        },
        {
            logo: "e.webp",
            ticker: "SQSP:NYSE",
            name: "Squarespace",
            price: "USD",
        },
        {
            logo: "hd.webp",
            ticker: "HD:NYSE",
            name: "Home Depot",
            price: "USD",
        },
        {
            logo: "",
            ticker: "USD:nyse",
            name: "US Dollar",
            price: "USD",
        },
        {
            logo: "co.webp",
            ticker: "COST:NYSE",
            name: "Costco",
            price: "USD",
        },
        {
            logo: "f.webp",
            ticker: "EL:NYSE",
            name: "Estée Lauder",
            price: "USD",
        },
        {
            logo: "m.webp",
            ticker: "MA:NYSE",
            name: "Mastercard",
            price: "USD",
        },
        {
            logo: "dp.webp",
            ticker: "DPZ:NYSE",
            name: "Domino's Pizza",
            price: "USD",
        },
        {
            logo: "mcd.webp",
            ticker: "MCD:NYSE",
            name: "McDonald's",
            price: "USD",
        },
        {
            logo: "str.webp",
            ticker: "SBUX:NASDAQ",
            name: "Starbucks",
            price: "USD",
        },
        {
            logo: "meta.webp",
            ticker: "META:NASDAQ",
            name: "Meta",
            price: "USD",
        },
        {
            logo: "wmg.webp",
            ticker: "WMG:NASDAQ",
            name: "Warner Music Group",
            price: "USD",
        },
        {
            logo: "bf.webp",
            ticker: "BF.B:NYSE",
            name: "Brown–Forman",
            price: "USD",
        },
    ];


    return (
        <div id='Main'>

            <div className="R-news-section">
                <div className="R-overlay">
                    <h1 className="R1-news"> Stocks</h1>

                </div>
            </div>


            <section className="stock-section">
                <h2 className="stock-title">
                    List of stock recommendation that BlackBull Research provides to its memberships
                </h2>

                <div className="table-wrapper">
                    <table className="stock-table">
                        <thead>
                            <tr>
                                <th id='left'>Stock</th>
                                <th>Share Price</th>
                                <th>Market Cap</th>
                                <th>Recommendation</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {stockData.map((stock, index) => (
                                <tr key={index}>
                                    <td className="stock-info">
                                        <img src={stock.logo} alt={stock.name} className="stock-logo" />
                                        <div>
                                            <div className="ticker">{stock.ticker}</div>
                                            <div className="name">({stock.name})</div>
                                        </div>
                                    </td>
                                    <td>{stock.price}</td>
                                    <td>{stock.marketCap}</td>
                                    <td className={`recommendation ${stock.recommendation.toLowerCase().includes("buy") ? "buy" : ""}`}>
                                        {stock.recommendation}
                                    </td>
                                    <td>
                                        <button className="overview-btn">Overview</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p className="footer-note">
                    The full stock list with recommendations is available exclusively to BlackBull Research subscribers.
                </p>
            </section>



            <div className="stock-grid-unique-container">
                <div className="stock-grid-unique-grid">
                    {stockList.map((stock) => (
                        <div className="stock-grid-unique-card" key={stock.id || stock.ticker}>
                            <div className="stock-grid-unique-left">
                                <img
                                    src={stock.logo}
                                    alt={stock.name}
                                    className="stock-grid-unique-logo"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "/fallback-logo.png"; // ✅ Fallback image path
                                    }}
                                />
                                <div className="stock-grid-unique-details">
                                    <div className="stock-grid-unique-ticker">{stock.ticker}</div>
                                    <div className="stock-grid-unique-name">({stock.name})</div>
                                </div>
                            </div>
                            <div className="stock-grid-unique-right">
                                <div className="stock-grid-unique-price">
                                    {stock.currency} {parseFloat(stock.price).toFixed(2)}
                                </div>
                                <button
                                    className="stock-grid-unique-btn"
                                    aria-label={`View ${stock.name} overview`}
                                >
                                    Overview
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="stock-grid-unique-loadmore">
                    <button className="stock-grid-unique-loadmore-btn">Load More</button>
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

export default EquityResearch;