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
            logo: "b.webp",
            ticker: "RAK:NZX",
            name: "Rakon",
            price: "NZD",
        },
        {
            logo: "c.webp",
            ticker: "DGE:LON",
            name: "Diageo",
            price: "GPD",
        },
        {
            logo: "d.webp",
            ticker: "HKSHY:NASDAQ",
            name: "Hong Kong & Shanghai Hotels",
            price: "US",
        },
        {
            logo: "e.webp",
            ticker: "SCHW:NYSE",
            name: "Charles Schwab",
            price: "US",
        },
        {
            logo: "https://logo.clearbit.com/oxy.com",
            ticker: "OXY:NYSE",
            name: "Occidental Petroleum",
            price: "US",
        },
        {
            logo: "https://logo.clearbit.com/manutd.com",
            ticker: "MANU:NYSE",
            name: "Manchester United",
            price: "23.00",
        },
        {
            logo: "https://logo.clearbit.com/goldmansachs.com",
            ticker: "GS:NYSE",
            name: "Goldman Sachs",
            price: "349.92 USD",
        },
        {
            logo: "https://logo.clearbit.com/squarespace.com",
            ticker: "SQSP:NYSE",
            name: "Squarespace",
            price: "USD",
        },
        {
            logo: "https://logo.clearbit.com/homedepot.com",
            ticker: "HD:NYSE",
            name: "Home Depot",
            price: "USD",
        },
        {
            logo: "https://logo.clearbit.com/us.com",
            ticker: "USD:nyse",
            name: "US Dollar",
            price: "USD",
        },
        {
            logo: "https://logo.clearbit.com/costco.com",
            ticker: "COST:NYSE",
            name: "Costco",
            price: "USD",
        },
        {
            logo: "https://logo.clearbit.com/estee.com",
            ticker: "EL:NYSE",
            name: "Estée Lauder",
            price: "USD",
        },
        {
            logo: "https://logo.clearbit.com/mastercard.com",
            ticker: "MA:NYSE",
            name: "Mastercard",
            price: "USD",
        },
        {
            logo: "https://logo.clearbit.com/dominos.com",
            ticker: "DPZ:NYSE",
            name: "Domino's Pizza",
            price: "USD",
        },
        {
            logo: "https://logo.clearbit.com/mcdonalds.com",
            ticker: "MCD:NYSE",
            name: "McDonald's",
            price: "USD",
        },
        {
            logo: "https://logo.clearbit.com/starbucks.com",
            ticker: "SBUX:NASDAQ",
            name: "Starbucks",
            price: "USD",
        },
        {
            logo: "https://logo.clearbit.com/meta.com",
            ticker: "META:NASDAQ",
            name: "Meta",
            price: "USD",
        },
        {
            logo: "https://logo.clearbit.com/wmg.com",
            ticker: "WMG:NASDAQ",
            name: "Warner Music Group",
            price: "USD",
        },
        {
            logo: "https://logo.clearbit.com/brown-forman.com",
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

        </div>
    )
}

export default EquityResearch;