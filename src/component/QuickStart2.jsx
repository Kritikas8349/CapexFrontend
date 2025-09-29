import React, { useState } from 'react';
import './QuickStart2.css';
import { FiSearch } from 'react-icons/fi';
import { FaSearch } from "react-icons/fa";

function QuickStart2() {
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
    <div className="market-wrapper">
     
      <div className="market-page">
        
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-left">
            <h1>Markets Overview</h1>
            <p>
              We provide access to diverse markets on all our accounts, offering superior trade execution,
              competitive costs, and a wide range of tradable products. These include 70 currency pairs,
              major market indices and stocks, precious metals like gold and silver, cryptocurrency, and
              commodities such as gas and oil.
            </p>
          </div>
          <div className="hero-right">
            <img src="phone.png" alt="Trading chart" className="mobile-image" />
          </div>
        </section>
      </div>

      <div className="stats-container">
        <div className="stat-item">
          <h2>26k+</h2>
          <p>Tradable Assets</p>
        </div>
        <div className="stat-item">
          <h2>1:500</h2>
          <p>Leverage up to</p>
        </div>
        <div className="stat-item">
          <h2>Regulated</h2>
          <p>Multi-Regulated</p>
        </div>
        <div className="stat-item">
          <h2>24/7</h2>
          <p>Client Support</p>
        </div>
        <div className="stat-item">
          <h2>$0</h2>
          <p>No Minimum Deposit</p>
        </div>
      </div>

      <div className="page-container">
        <div className="header">
          {/* Tabs */}
          <div className="tabs">
            <button className="tab active">All</button>
            <button className="tab">Commodities</button>
            <button className="tab">Crypto</button>
            <button className="tab">Equities</button>
            <button className="tab">Forex</button>
            <button className="tab">Indices</button>
          </div>

          {/* Search */}
          <div className="search-box">
            <FiSearch className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="         Search instruments..."
            />
          </div>

          {/* Dropdowns */}
          <div className="dropdowns">
            <div className="market-status">
              <button className="dropdown-btn">
                Market Status <span className="arrow"></span>
              </button>
              <div className="dropdown-content">
                <button>Open</button>
                <button>Close</button>
              </div>
            </div>

            <div className="sort-options">
              <button className="dropdown-btn">
                Sort By <span className="arrow"></span>
              </button>
              <div className="dropdown-content">
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
        <div className="market-table">
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
                    <img src="logo.png" alt="Logo" className="logo" />
                  </td>
                  <td>{item.name}</td>
                  <td className="buy">{item.buy}</td>
                  <td className="sell">{item.sell}</td>
                  <td className="live-spread">{item.spread}</td>
                  <td className="change">{item.change}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tradable Assets Section */}
      <div className="tradable-assets-section2">
        <h2 className="section-title2">Tradable Platform</h2>
        <div className="assets-grid2">
          {[
            { icon: "Frame8415.png", title: "Forex", desc: "70+ major, minor, and exotic currency pairs." },
            { icon: "Frame8416.png", title: "Commodities", desc: "Energies like crude oil, and agricultural cash crops." },
            { icon: "Frame8417.png", title: "Equities", desc: "We offer stocks across 27 global markets like Apple, Alibaba, BMW and Netflix." },
            { icon: "Frame8418.png", title: "Indices", desc: "Major stock indices like US30, S&P500, and NAS100." },
            { icon: "Frame8419.png", title: "Metals", desc: "Precious and industry metals like gold, silver, and copper." },
            { icon: "Frame8419.png", title: "View all", desc: "Explore Market.Trad's diverse range of tradable assets." }
          ].map((item, index) => (
            <div className="platform-card2" key={index}>
              <div className="icon-placeholder2">
                <img src="" alt={item.title} />
              </div>
              <div className="card-content2">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <a href="#" className="learn-more-btn2">Learn More →</a>
            </div>
          ))}
        </div>
      </div>

      <div className="trading-opportunities-section2">
        <h2 className="section-title2">Trading Opportunities</h2>
        <div className="opportunity-grid2">
          {/* Card 1 */}
          <div className="opportunity-card2">
            <img src="rectangle.png" alt="Oracle's surge" />
            <div className="card-content2">
              <h3>Oracle's surge mints new richest man & Traders eye 50bps cut</h3>
              <p>Oracle's shares jumped 35% after reporting a surge in cloud bookings driven by AI demand...</p>
              <span className="date">September 11, 2025</span>
              <a href="#" className="view-post2"><br />View post</a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="opportunity-card">
            <img src="rectangle.png" alt="Tech stocks rise" />
            <div className="card-content">
              <h3>Tech stocks soar amidst AI <br /> boom</h3>
              <p>Tech stocks surged after the announcement of significant breakthroughs in AI and machine learning...</p>
              <span className="date">September 15, 2025</span>
              <a href="#" className="view-post"><br />View post</a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="opportunity-card">
            <img src="rectangle.png" alt="Crypto market rebound" />
            <div className="card-content">
              <h3>Crypto market rebounds with new regulations</h3>
              <p>The cryptocurrency market is seeing a rebound as new regulations bring stability and confidence...</p>
              <span className="date">September 17, 2025</span>
              <a href="#" className="view-post"><br />View post</a>
            </div>
          </div>
        </div>
      </div>

      <div className="payment-container12">
        <h2 className="title12">
          Market.Trad <span>Payment Accept</span>
        </h2>

        <div className="payment-grid12">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" />
          <img src="mastercard.png" alt="MasterCard" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" className="small-logo12" />
          <img src="googlepay.png" alt="Google Pay" className="small-logo12" />
          <img src="banktransfer.png" alt="Bank Transfer" />
          <img src="crypto.png" alt="Crypto" />
          <img src="neteller.png" alt="Neteller" />
          <img src="skrill.png" alt="Skrill" />
          <img src="Localbanktransfer.png" alt="Local Bank Transfer" />
        </div>
      </div>



      <div className="hero-container">
        <div className="hero-overlay">
          <h1>
            Start trading in less than <span>5 minutes</span>
          </h1>
          <p>with no minimum deposit</p>

          <div className="search-box">
            <FaSearch className="search-icon" />
            <input type="email" placeholder="    Email Address" />
            <button className="join-btn">Join Now</button>
          </div>
        </div>
      </div>



      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <img src="logo2.png" alt="" />
          </div>
          <div className="footer-social">
            <a href="#"><img src="facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="ri_linkedin-fill.png" alt="LinkedIn" /></a>
            <a href="#"><img src="insta.png" alt="Instagram" /></a>
            <a href="#"><img src="X.png" alt="X" /></a>
            <a href="#"><img src="whatsapp.png" alt="WhatsApp" /></a>
            <a href="#"><img src="name.png" alt="Telegram" /></a>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-section">
            <h3>Markets</h3>
            <ul>
              <li>Markets Overview</li>
              <li>Forex</li>
              <li>Shares</li>
              <li>Commodities</li>
              <li>Futures</li>
              <li>Indices</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Platforms</h3>
            <ul>
              <li>TradingView</li>
              <li>cTrader</li>
              <li>MetaTrader 4</li>
              <li>MetaTrader 5</li>
              <li>MetaTrader Web Trader</li>
              <li>Markets.Trad Copy Trader</li>
              <li>Markets.Trad Invest</li>
              <li>Trading Tools</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Education</h3>
            <ul>
              <li>Education Hub</li>
              <li>Forex Tutorials</li>
              <li>Shares Tutorials</li>
              <li>Commodities Tutorials</li>
              <li>Trading Opportunities</li>
              <li>Economic Calendar</li>
              <li>Demo Trade</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>About</h3>
            <ul>
              <li>About us</li>
              <li>Account Comparison</li>
              <li>Company News</li>
              <li>Compliance</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li>Platform Support</li>
              <li>Market Support</li>
              <li>Account Support</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li>Legal Hub</li>
              <li>Risk Warning</li>
              <li>Privacy Policy</li>
              <li>Client Service Agreement</li>
              <li>Complaints Handling Procedure</li>
              <li>Confidentiality Policy</li>
              <li>Conflicts of Interests Policy</li>
              <li>Cookie Policy EU</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-contact">
            <p>Customer Support Contacts</p>
            <p>Whatsapp Support: +41 xxx xxx xxxx</p>
            <p>Support: +41 xxx xxx xxxx</p>
            <p>Email: support@market.trad.com</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default QuickStart2;
