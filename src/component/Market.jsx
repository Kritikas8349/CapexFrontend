import React, { useState, useEffect } from "react";
import './Market.css';

function Market() {

    const platforms = [
        {
            name: "TradingView",
            desc: "Trade directly in TradingView, the world’s leading charting and social platform.",
            icon: "Frame84151.png", // apna icon path
            isNew: true,
        },
        {
            name: "MetaTrader 4",
            desc: "Trade via MetaTrader 4, the most popular trading platform in the world.",
            icon: "Frame84153.png",
            isNew: false,
        },
        {
            name: "MetaTrader 5",
            desc: "Trade via MetaTrader 5, the most powerful premier trading platform.",
            icon: "Frame84153.png",
            isNew: false,
        },
        {
            name: "cTrader",
            desc: "Experience BlackBull Markets’ institutional trading conditions combined with cTrader.",
            icon: "Frame84152.png",
            isNew: true,
        },
        {
            name: "BlackBull CopyTrader",
            desc: "Copy trades or lead followers with the BlackBull CopyTrader platform.",
            icon: "Frame84155.png",
            isNew: true,
        },
        {
            name: "BlackBull Invest",
            desc: "Access 26,000+ Shares, Options, ETFs, Bonds, and other underlying assets.",
            icon: "Frame84155.png",
            isNew: false,
        },
    ];

    const initialInstruments = [
        {
            icon: "i1.webp",
            name: "XAUUSD",
            desc: "Gold vs US-Dollar",
            buy: 3752.41000,
            sell: 3752.53000,
            spread: 1.2,
            change: -0.003
        },
        {
            icon: "icons/eurusd.png",
            name: "EURUSD",
            desc: "Euro vs US-Dollar",
            buy: 1.17976,
            sell: 1.17977,
            spread: 0.1,
            change: 0.111
        },
        {
            icon: "icons/gbpusd.png",
            name: "GBPUSD",
            desc: "Great Britain Pound vs US-Dollar",
            buy: 1.35057,
            sell: 1.35058,
            spread: 0.1,
            change: 0.103
        },
        {
            icon: "icons/nas100.png",
            name: "NAS100",
            desc: "NAS100 Index",
            buy: 24754.50000,
            sell: 24756.30000,
            spread: 1.8,
            change: -0.017
        },
        {
            icon: "icons/audusd.png",
            name: "AUDUSD",
            desc: "Australian Dollar vs US-Dollar",
            buy: 0.65868,
            sell: 0.65869,
            spread: 0.1,
            change: 0.058
        },
        {
            icon: "icons/usdjpy.png",
            name: "USDJPY",
            desc: "US-Dollar vs Japanese Yen",
            buy: 147.81200,
            sell: 147.81300,
            spread: 0.1,
            change: -0.015
        },
        {
            icon: "icons/us30.png",
            name: "US30",
            desc: "Dow Jones 30",
            buy: 46398.00000,
            sell: 46400.00000,
            spread: 0.2,
            change: -0.019
        },
        {
            icon: "icons/gbpjpy.png",
            name: "GBPJPY",
            desc: "Great Britain Pound vs Japanese Yen",
            buy: 199.62900,
            sell: 199.63800,
            spread: 0.9,
            change: 0.044
        },
        {
            icon: "icons/usdcad.png",
            name: "USDCAD",
            desc: "US-Dollar vs Canadian Dollar",
            buy: 1.38271,
            sell: 1.38273,
            spread: 0.2,
            change: 0.008
        },
        {
            icon: "icons/eurjpy.png",
            name: "EURJPY",
            desc: "Euro vs Japanese Yen",
            buy: 174.38000,
            sell: 174.38700,
            spread: 0.7,
            change: 0.083
        },
        {
            icon: "icons/audnzd.png",
            name: "AUDNZD",
            desc: "Australian Dollar vs New Zealand Dollar",
            buy: 1.12566,
            sell: 1.12580,
            spread: 1.4,
            change: 0.016
        }
    ];

    const commodities = [
        {
            name: 'Gold vs US-Dollar',
            symbol: 'XAUUSD',
            buy: 3753.24000,
            sell: 3753.36000,
            spread: 1.2,
            change: -0.003,
        },
        {
            name: 'Silver vs US-Dollar',
            symbol: 'XAGUSD',
            buy: 43.78400,
            sell: 43.79400,
            spread: 1,
            change: 0.070,
        },
        {
            name: 'West Texas Intermediate Crude Oil cash',
            symbol: 'WTI',
            buy: 61.83000,
            sell: 61.87000,
            spread: 4,
            change: -0.241,
        },
        {
            name: 'Crude Oil Brent Cash',
            symbol: 'BRENT',
            buy: 65.61800,
            sell: 65.64200,
            spread: 2.4,
            change: -0.151,
        },
        {
            name: 'Barrick Gold Corporation',
            symbol: 'GOLD',
            buy: 35.38000,
            sell: 35.41000,
            spread: 0.3,
            change: -2.541,
        },
        {
            name: 'Copper (Spot)',
            symbol: 'COPPER',
            buy: 9973.95000,
            sell: 9976.95000,
            spread: 30,
            change: -0.061,
        },
        {
            name: 'Aluminium (Spot)',
            symbol: 'ALUMINIUM',
            buy: 2640.85000,
            sell: 2643.40000,
            spread: 25.5,
            change: -0.002,
        },
        {
            name: 'Lead (Spot)',
            symbol: 'LEAD',
            buy: 1991.75000,
            sell: 1994.75000,
            spread: 30,
            change: 0.053,
        },
        {
            name: 'Zinc (Spot)',
            symbol: 'ZINC',
            buy: 2872.45000,
            sell: 2874.95000,
            spread: 25,
            change: -0.122,
        },
    ];


    const [instruments, setInstruments] = useState(initialInstruments);
    const [sortBy, setSortBy] = useState("");
    const [marketState, setMarketState] = useState("All");

    useEffect(() => {
        sortInstruments(sortBy);
    }, [sortBy]);

    const sortInstruments = (sortOption) => {
        let sorted = [...instruments];
        if (sortOption === "name-asc") {
            sorted.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOption === "name-desc") {
            sorted.sort((a, b) => b.name.localeCompare(a.name));
        } else if (sortOption === "buy-asc") {
            sorted.sort((a, b) => a.buy - b.buy);
        } else if (sortOption === "buy-desc") {
            sorted.sort((a, b) => b.buy - a.buy);
        }
        // you can add more sort options
        setInstruments(sorted);
    };

    // Optional: filter based on marketState
    const filteredInstruments = instruments.filter(item => {
        if (marketState === "All") return true;
        return item.desc.toLowerCase().includes(marketState.toLowerCase());
    });



    const [isOpen, setIsOpen] = useState(false);

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    return (


        <div id='Main-m'>

            <section className="m-section">
                <div className="m-content">
                    <h1 className="m-title">Market-Overview</h1>
                    <p className="m-description">
                       Access forex trading with spreads starting from 0.0 pips, leverage up to 1:500, and industry leading execution speeds averaging less than 20 milliseconds.
                    </p>
                </div>
                <div className="m-wrapper">
                    <img src="mobile.webp" alt="Trading chart" className="m-image" />
                </div>
            </section>

            <div className="m1-stats-container">
                <div className="m1-stat-item">
                    <h2>26k+</h2>
                    <p>Tradable Assets</p>
                </div>
                <div className="m1-stat-item">
                    <h2>1:500</h2>
                    <p>Leverage Up To</p>
                </div>
                <div className="m1-stat-item">
                    <h2>Regulated</h2>
                    <p>Multi-Regulated</p>
                </div>
                <div className="m1-stat-item">
                    <h2>24/7</h2>
                    <p>Client Support</p>
                </div>
                <div className="m1-stat-item">
                    <h2>$0</h2>
                    <p>No Minimum Deposit</p>
                </div>
            </div>

            <div className="m1-table-container">
                <div className="m1-controls">
                    <div className="m1-filters">
                        <button className={marketState === "All" ? "m1-active" : ""} onClick={() => setMarketState("All")}>All</button>
                        <button className={marketState === "Commodities" ? "m1-active" : ""} onClick={() => setMarketState("Commodities")}>Commodities</button>
                        <button className={marketState === "Crypto" ? "m1-active" : ""} onClick={() => setMarketState("Crypto")}>Crypto</button>
                        <button className={marketState === "Equities" ? "m1-active" : ""} onClick={() => setMarketState("Equities")}>Equities</button>
                        <button className={marketState === "Forex" ? "m1-active" : ""} onClick={() => setMarketState("Forex")}>Forex</button>
                        <button className={marketState === "Indices" ? "m1-active" : ""} onClick={() => setMarketState("Indices")}>Indices</button>
                    </div>

                    <input
                        type="text"
                        placeholder="Search...."
                        className="m1-search"
                        onChange={(e) => {
                            const text = e.target.value.toLowerCase();
                            setInstruments(prev =>
                                initialInstruments.filter(i =>
                                    i.name.toLowerCase().includes(text) ||
                                    i.desc.toLowerCase().includes(text)
                                )
                            );
                        }}
                    />

                    <select
                        className="m1-sort-dropdown"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="" disabled hidden>Sort By</option>
                        <option value="name-asc">Name A → Z</option>
                        <option value="name-desc">Name Z → A</option>
                        <option value="buy-asc">Buy Price ↑</option>
                        <option value="buy-desc">Buy Price ↓</option>
                    </select>

                    <div className="m1-dropdown">
                        <button className="m1-dropdown-btn" onClick={toggleDropdown}>Market State ▼</button>
                        {isOpen && (
                            <ul className="m1-dropdown-menu">
                                <a href="#"><li>Market Status</li></a>
                                <a href="#"><li>Open</li></a>
                                <a href="#"><li>Closed</li></a>
                            </ul>
                        )}
                    </div>
                </div>

                <div className="m1-table-wrapper">
                    <table className="m1-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Buy</th>
                                <th>Sell</th>
                                <th>Live Spread (Pips)</th>
                                <th>1D Chg</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredInstruments.map((item, index) => (
                                <tr key={index}>
                                    <td className="m1-name-cell">
                                        <img src={item.icon} alt={item.name} className="m1-flag" />
                                        <div>
                                            <div className="m1-symbol">{item.name}</div>
                                            <div className="m1-desc">{item.desc}</div>
                                        </div>
                                    </td>
                                    <td className="m1-buy">{item.buy.toFixed(5)}</td>
                                    <td className="m1-sell">{item.sell.toFixed(5)}</td>
                                    <td>{item.spread.toFixed(1)}</td>
                                    <td className={`m1-change ${item.change < 0 ? "m1-red" : "m1-green"}`}>
                                        {item.change < 0
                                            ? item.change.toFixed(3) + "%"
                                            : "+" + item.change.toFixed(3) + "%"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="m1-pagination">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>...</span>
                    <span>164</span>
                    <span className="m1-next">Next</span>
                </div>
            </div>

            <section className="m1-trade-platforms">
                <h2 className="m1-title-section">Trading Platforms</h2>

                <div className="m1-platforms-wrapper">
                    {platforms.map((platform, index) => (
                        <div className="m1-platform-box" key={index}>
                            <div className="m1-platform-top">
                                <img src={platform.icon} alt={platform.name} className="m1-platform-image" />
                                <h3>{platform.name}</h3>
                                {platform.isNew && <span className="m1-badge-new">New</span>}
                            </div>
                            <p>{platform.desc}</p>
                            <button className="m1-btn-learn">Learn More</button>
                        </div>
                    ))}
                </div>
            </section>

            <div className="m1-t-container">
                <h1 className="m1-t-heading">Trading Opportunities</h1>
                <div className="m1-t-card-container">
                    {[1, 2, 3, 4].map(i => (
                        <div className="m1-t-card" key={i}>
                            <img src={`card${i}.webp`} alt={`card${i}`} className="m1-t-card-image" />
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
                </div>
            </div>
        </div>

    )
}

export default Market