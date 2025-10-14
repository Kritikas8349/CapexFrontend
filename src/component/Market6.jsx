import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import './Market6.css';

function Market6() {

    const platforms = [
        {
            name: "TradingView",
            desc: "Trade directly in TradingView, the world’s leading charting and social platform.",
            icon: "/Frame84151.png", // apna icon path
            isNew: true,
        },
        {
            name: "MetaTrader 4",
            desc: "Trade via MetaTrader 4, the most popular trading platform in the world.",
            icon: "/Frame84153.png",
            isNew: false,
        },
        {
            name: "MetaTrader 5",
            desc: "Trade via MetaTrader 5, the most powerful premier trading platform.",
            icon: "/Frame84153.png",
            isNew: false,
        },
        {
            name: "cTrader",
            desc: "Experience BlackBull Markets’ institutional trading conditions combined with cTrader.",
            icon: "/Frame84152.png",
            isNew: true,
        },
        {
            name: "BlackBull CopyTrader",
            desc: "Copy trades or lead followers with the BlackBull CopyTrader platform.",
            icon: "/Frame84155.png",
            isNew: true,
        },

    ];



    const [menuOpen, setMenuOpen] = useState(false);

    // Dropdown toggles for Market Status and Sort By
    const [marketStatusOpen, setMarketStatusOpen] = useState(false);
    const [sortOptionsOpen, setSortOptionsOpen] = useState(false);

    const [sortOption, setSortOption] = useState(null);
    const [marketData, setMarketData] = useState([
        { name: 'XAUUSD', buy: 3643.41, sell: 3643.53, spread: 1.2, change: -0.056 },
        { name: 'EURUSD', buy: 1.234, sell: 1.235, spread: 0.1, change: 0.042 },
        { name: 'BTCUSD', buy: 42000, sell: 42010, spread: 10, change: 1.2 },
        { name: 'GBPUSD', buy: 1.557, sell: 1.558, spread: 0.5, change: -0.123 },
        { name: 'USDJPY', buy: 109.68, sell: 109.69, spread: 0.01, change: 0.025 },
        { name: 'AUDUSD', buy: 0.746, sell: 0.747, spread: 0.1, change: -0.015 },
        { name: 'USDCAD', buy: 1.240, sell: 1.241, spread: 0.1, change: 0.35 },
        { name: 'NZDUSD', buy: 0.695, sell: 0.696, spread: 0.1, change: 0.12 },
        { name: 'USDMXN', buy: 20.31, sell: 20.32, spread: 0.01, change: -0.05 },
        { name: 'XAGUSD', buy: 25.32, sell: 25.33, spread: 0.01, change: 0.76 },
    ]);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const sortTable = (option) => {
        setSortOption(option);
        let sortedData;
        switch (option) {
            case 'titleAsc':
                sortedData = [...marketData].sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'titleDesc':
                sortedData = [...marketData].sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'sellAsc':
                sortedData = [...marketData].sort((a, b) => a.sell - b.sell);
                break;
            case 'sellDesc':
                sortedData = [...marketData].sort((a, b) => b.sell - a.sell);
                break;
            case 'buyAsc':
                sortedData = [...marketData].sort((a, b) => a.buy - b.buy);
                break;
            case 'buyDesc':
                sortedData = [...marketData].sort((a, b) => b.buy - a.buy);
                break;
            case 'spreadAsc':
                sortedData = [...marketData].sort((a, b) => a.spread - b.spread);
                break;
            case 'spreadDesc':
                sortedData = [...marketData].sort((a, b) => b.spread - a.spread);
                break;
            case 'changeAsc':
                sortedData = [...marketData].sort((a, b) => a.change - b.change);
                break;
            case 'changeDesc':
                sortedData = [...marketData].sort((a, b) => b.change - a.change);
                break;
            default:
                sortedData = marketData;
                break;
        }
        setMarketData(sortedData);

        // Close sort dropdown after selection
        setSortOptionsOpen(false);
    };


    return (


        <div id='Main'>


            <section className="m-section">
                <div className="m-content">
                    <h1 className="m-title">Trade Indices</h1>
                    <p className="m-description">
                        Diversify with Index CFDs. All major Indices are available to trade at BlackBull Markets, including the NASDAQ 100, S&P 500, the Dow Jones Industrial Average, and many more.
                    </p>
                </div>
                <div className="m-wrapper">
                    <img src="/mob6.webp" alt="Trading chart" className="m-image" />
                </div>
            </section>




            {/* <div className="m1-stats-container">
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
            </div> */}




            <div className="q2-page-container">
                <div className="q2-header">
                    {/* Tabs */}
                    <div className="q2-tabs">
                        <button className="q2-tab active">All</button>
                        <button className="q2-tab">Commodities</button>
                        <button className="q2-tab">Crypto</button>
                        <button className="q2-tab">Equities</button>
                        <button className="q2-tab">Forex</button>
                        <button className="q2-tab">Indices</button>
                    </div>

                    {/* Search */}
                    <div className="q2-search-box">
                        <FiSearch className="q2-search-icon" />
                        <input
                            type="text"
                            className="q2-search-input"
                            placeholder="         Search instruments..."
                        />
                    </div>

                    {/* Dropdowns */}
                    <div className="q2-dropdowns">
                        <div className="q2-market-status">
                            <button className="q2-dropdown-btn">
                                Market Status <span className="q2-arrow"></span>
                            </button>
                            <div className="q2-dropdown-content">
                                <button>Open</button>
                                <button>Close</button>
                            </div>
                        </div>

                        <div className="q2-sort-options">
                            <button className="q2-dropdown-btn">
                                Sort By <span className="q2-arrow"></span>
                            </button>
                            <div className="q2-dropdown-content">
                                <button onClick={() => sortTable("titleAsc")}>By title A → Z</button>
                                <button onClick={() => sortTable("titleDesc")}>By title Z → A</button>
                                <button onClick={() => sortTable("sellAsc")}>Sell Asc</button>
                                <button onClick={() => sortTable("sellDesc")}>Sell Desc</button>
                                <button onClick={() => sortTable("buyAsc")}>Buy Asc</button>
                                <button onClick={() => sortTable("buyDesc")}>Buy Desc</button>
                                <button onClick={() => sortTable("spreadAsc")}>Spread Asc</button>
                                <button onClick={() => sortTable("spreadDesc")}>Spread Desc</button>
                                <button onClick={() => sortTable("changeAsc")}>1D Chg Asc</button>
                                <button onClick={() => sortTable("changeDesc")}>1D Chg Desc</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table Section */}
                <div className="q2-market-table">
                    <table>
                        <thead>
                            <tr>
                                <th id='name'></th>
                                <th id='name'>Name</th>
                                <th>Buy</th>
                                <th>Sell</th>
                                <th>Live Spread (Pips)</th>
                                <th>1D Chg</th>
                            </tr>
                        </thead>
                        <tbody>
                            {marketData.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <img src="/logo.png" alt="Logo" className="q2-logo" />
                                    </td>
                                    <td>{item.name}</td>
                                    <td className="q2-buy">{item.buy}</td>
                                    <td className="q2-sell">{item.sell}</td>
                                    <td className="q2-live-spread">{item.spread}</td>
                                    <td className="q2-change">{item.change}%</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>









            <div className="home-platforms-section-m1">
                <h2 className="home-platforms-heading-m1">Trading Platform</h2>
                <div className="home-platforms-grid-m1">

                    <div className="home-platform-card-m1">
                        <img src="/f1.png" alt="TradingView" className="home-platform-logo-m1" />
                        <div className="home-platform-content-m1">
                            <div className="home-platform-header-m1">
                                <h3 className="home-platform-title-m1">TradingView</h3>
                                <a href="/platforms/tradingview" className="home-learn-more-btn-m1">Learn More</a>
                            </div>
                            <p className="home-platform-desc-m1">Trade directly in TradingView, the world’s leading charting and social platform.</p>
                        </div>
                    </div>

                    <div className="home-platform-card-m1">
                        <img src="/f1.png" alt="cTrader" className="home-platform-logo-m1" />
                        <div className="home-platform-content-m1">
                            <div className="home-platform-header-m1">
                                <h3 className="home-platform-title-m1">cTrader</h3>
                                <a href="/platforms/ctrade" className="home-learn-more-btn-m1">Learn More</a>
                            </div>
                            <p className="home-platform-desc-m1">Experience Market.Trad’s institutional trading conditions combined with cTrader.</p>
                        </div>
                    </div>

                    <div className="home-platform-card-m1">
                        <img src="/f2.png" alt="MetaTrader 4" className="home-platform-logo-m1" />
                        <div className="home-platform-content-m1">
                            <div className="home-platform-header-m1">
                                <h3 className="home-platform-title-m1">MetaTrader 4</h3>
                                <a href="/platforms/mt4" className="home-learn-more-btn-m1">Learn More</a>
                            </div>
                            <p className="home-platform-desc-m1">Trade via MetaTrader 4 (MT4), the most popular trading platform in the world.</p>
                        </div>
                    </div>

                    <div className="home-platform-card-m1">
                        <img src="/f4.png" alt="MetaTrader 5" className="home-platform-logo-m1" />
                        <div className="home-platform-content-m1">
                            <div className="home-platform-header-m1">
                                <h3 className="home-platform-title-m1">MetaTrader 5</h3>
                                <a href="/platforms/mt5" className="home-learn-more-btn-m1">Learn More</a>
                            </div>
                            <p className="home-platform-desc-m1">Trade via MetaTrader 5 (MT5), the most powerful premier trading platform.</p>
                        </div>
                    </div>

                    <div className="home-platform-card-m1">
                        <img src="/f3.png" alt="CopyTrader" className="home-platform-logo-m1" />
                        <div className="home-platform-content-m1">
                            <div className="home-platform-header-m1">
                                <h3 className="home-platform-title-m1">CopyTrader</h3>
                                <a href="/platforms/copytrade" className="home-learn-more-btn-m1">Learn More</a>
                            </div>
                            <p className="home-platform-desc-m1">Copy trades or lead followers with the Market.Trad CopyTrader platform.</p>
                        </div>
                    </div>

                    <div className="home-platform-card-m1">
                        <img src="/f3.png" alt="Market.Trad Invest" className="home-platform-logo-m1" />
                        <div className="home-platform-content-m1">
                            <div className="home-platform-header-m1">
                                <h3 className="home-platform-title-m1">Market.Trad Invest</h3>
                                <a href="/platforms/tradingtools" className="home-learn-more-btn-m1">Learn More</a>
                            </div>
                            <p className="home-platform-desc-m1">Access 26,000+ Shares, Options, ETFs, Bonds and other underlying assets.</p>
                        </div>
                    </div>

                </div>
            </div>


            <div className="T-container">
                <h1 className="T-heading">Trading Opportunities</h1>
                <div className="T-card-container">
                    <div className="T-card">
                        <img src="/card1.webp" alt="Supreme Court" className="T-card-image" />
                        <div className="T-card-content">
                            <h2 className="T-card-title">Supreme Court ruling could lift gold further</h2>
                            <p className="T-card-description">The Supreme Court has apparently scheduled arguments for December on the issue of whether President Trump can fire Fed governor Lisa Cook...</p>
                            <span className="T-date">September 23, 2025</span>
                            <a href="#" className="T-view-post">View Post</a>
                        </div>
                    </div>

                    <div className="T-card">
                        <img src="/card2.webp" alt="BlackBull Markets" className="T-card-image" />
                        <div className="T-card-content">
                            <h2 className="T-card-title">BlackBull Markets Becomes Official Auckland FC Partner</h2>
                            <p className="T-card-description">BlackBull Markets is excited to announce a new partnership with Auckland FC, joining the club as an official partner ahead of the upcoming A-League Men’s season....</p>
                            <span className="T-date">September 23, 2025</span>
                            <a href="#" className="T-view-post">View Post</a>
                        </div>
                    </div>

                    <div className="T-card">
                        <img src="/card3.webp" alt="Peso Resilience" className="T-card-image" />
                        <div className="T-card-content">
                            <h2 className="T-card-title">Peso resilience tested ahead of Banxico decision</h2>
                            <p className="T-card-description">This technical setup frames the importance of Banxico’s upcoming decision. All 24 analysts surveyed by Reuters expect a 25-basis-point cut to 7.50%....</p>
                            <span className="T-date">September 22, 2025</span>
                            <a href="#" className="T-view-post">View Post</a>
                        </div>
                    </div>

                    <div className="T-card">
                        <img src="/card4.webp" alt="Dot Plot Divide" className="T-card-image" />
                        <div className="T-card-content">
                            <h2 className="T-card-title">Dot Plot Divide: Dollar Gains, Gold Stalls</h2>
                            <p className="T-card-description">The USDJPY spiked lower following the Fed’s 25 basis point cut yesterday but quickly reversed trajectory as the dot plot projections from the FOMC came in softer than markets had expected....</p>
                            <span className="T-date">September 19, 2025</span>
                            <a href="#" className="T-view-post">View Post</a>
                        </div>
                    </div>
                </div>
            </div>









        </div>
    )
}

export default Market6;