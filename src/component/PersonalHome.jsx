import React from "react";
import "./PersonalHome.css";
import { Link } from "react-router-dom";


const PersonalHome = () => {
  return (
    <div className="homecontainer">
    <div className="home-container">
      {/* Floating Crypto Icons */}
      <img src="Cam2.png" alt="Bitcoin" className="crypto-icon btc" />
      <img src="Cam1.png" alt="Ethereum" className="crypto-icon eth" />
      <img src="Cam3.png" alt="Litecoin" className="crypto-icon ltc" />
      <img src="coin.png" alt="Cardano" className="crypto-icon ada" />

      {/* Header Content */}
      <div className="home-header">
        <h1>
          Trade with lightning fast <span className="highlight"><br />execution speed</span>
        </h1>
        <p className="ranked-text">
          Ranked #1 forex broker in execution speed by CompareForexBrokers.com
        </p>

        <div className="p-email-form">
          <input className="p-emailadd" type="email" placeholder="Email Address..." />
          <Link to="/create-account">
            <button className="p-join-btn">Join Now</button>
          </Link> 
          <a href="#" className="p-demo-link">
            or try Demo
          </a>
        </div>
      </div>

      {/* Trading Screenshot */}
      <div className="laptop-section">
        <img src="laptop.png" alt="Trading Interface" className="laptop-image" />
      </div>
    </div>

    <div className="features-section">
  <div className="feature">
    <div className="feature-title">26k+</div>
    <div className="feature-subtitle">Tradable Assets</div>
  </div>
  <div className="feature">
    <div className="feature-title">1:500</div>
    <div className="feature-subtitle">Leverage up to</div>
  </div>
  <div className="feature">
    <div className="feature-title">Regulated</div>
    <div className="feature-subtitle">Multi-Regulated</div>
  </div>
  <div className="feature">
    <div className="feature-title">24/7</div>
    <div className="feature-subtitle">Client Support</div>
  </div>
  <div className="feature">
    <div className="feature-title">$0</div>
    <div className="feature-subtitle">No Minimum Deposit</div>
  </div>
</div>



<div className="tradeable-assets-section">
  <h2 className="assets-heading">Tradable Assets</h2>

  <div className="assets-grid">
    <div className="asset-box">
      <img src="t1.png" alt="Equities" className="asset-logo" />
      <h3 className="asset-title">Equities</h3>
      <p className="asset-desc">We offer stocks across 27 global markets like Apple, Alibaba, BMW and Netflix.</p>
    </div>

    <div className="asset-box">
      <img src="t2.png" alt="Forex" className="asset-logo" />
      <h3 className="asset-title">Forex</h3>
      <p className="asset-desc">70+ major, minor, and exotic currency pairs.</p>
    </div>

    <div className="asset-box">
      <img src="t3.png" alt="Commodities" className="asset-logo" />
      <h3 className="asset-title">Commodities</h3>
      <p className="asset-desc">Energies like crude oil, and agricultural cash crops.</p>
    </div>

    <div className="asset-box">
      <img src="t4.png" alt="Indices" className="asset-logo" />
      <h3 className="asset-title">Indices</h3>
      <p className="asset-desc">Major stock indices like US30, S&P500, and NAS100.</p>
    </div>

    <div className="asset-box">
      <img src="t5.png" alt="Metals" className="asset-logo" />
      <h3 className="asset-title">Metals</h3>
      <p className="asset-desc">Precious and industry metals like gold, silver, and copper.</p>
    </div>

    <div className="asset-box">
      <img src="t6.png" alt="View All" className="asset-logo" />
      <h3 className="asset-title">View all</h3>
      <p className="asset-desc">Explore Market. Trade a diverse range of tradable assets.</p>
    </div>
  </div>
</div>



<div className="home-platforms-section">
    <h2 className="home-platforms-heading">Trading Platform</h2>
  <div className="home-platforms-grid">

    <div className="home-platform-card">
      <img src="f1.png" alt="TradingView" className="home-platform-logo"/>
      <div className="home-platform-content">
        <div className="home-platform-header">
          <h3 className="home-platform-title">TradingView</h3>
          <a href="/platforms/tradingview" className="home-learn-more-btn">Learn More</a>
        </div>
        <p className="home-platform-desc">Trade directly in TradingView, the world’s leading charting and social platform.</p>
      </div>
    </div>

    <div className="home-platform-card">
      <img src="f1.png" alt="cTrader" className="home-platform-logo"/>
      <div className="home-platform-content">
        <div className="home-platform-header">
          <h3 className="home-platform-title">cTrader</h3>
          <a href="/platforms/ctrade" className="home-learn-more-btn">Learn More</a>
        </div>
        <p className="home-platform-desc">Experience Market.Trad’s institutional trading conditions combined with cTrader.</p>
      </div>
    </div>

    <div className="home-platform-card">
      <img src="f2.png" alt="MetaTrader 4" className="home-platform-logo"/>
      <div className="home-platform-content">
        <div className="home-platform-header">
          <h3 className="home-platform-title">MetaTrader 4</h3>
          <a href="/platforms/mt4" className="home-learn-more-btn">Learn More</a>
        </div>
        <p className="home-platform-desc">Trade via MetaTrader 4 (MT4), the most popular trading platform in the world.</p>
      </div>
    </div>

    <div className="home-platform-card">
      <img src="f4.png" alt="MetaTrader 5" className="home-platform-logo"/>
      <div className="home-platform-content">
        <div className="home-platform-header">
          <h3 className="home-platform-title">MetaTrader 5</h3>
          <a href="/platforms/mt5" className="home-learn-more-btn">Learn More</a>
        </div>
        <p className="home-platform-desc">Trade via MetaTrader 5 (MT5), the most powerful premier trading platform.</p>
      </div>
    </div>

    <div className="home-platform-card">
      <img src="f3.png" alt="CopyTrader" className="home-platform-logo"/>
      <div className="home-platform-content">
        <div className="home-platform-header">
          <h3 className="home-platform-title">CopyTrader</h3>
          <a href="/platforms/copytrade" className="home-learn-more-btn">Learn More</a>
        </div>
        <p className="home-platform-desc">Copy trades or lead followers with the Market.Trad CopyTrader platform.</p>
      </div>
    </div>

    <div className="home-platform-card">
      <img src="f3.png" alt="Market.Trad Invest" className="home-platform-logo"/>
      <div className="home-platform-content">
        <div className="home-platform-header">
          <h3 className="home-platform-title">Market.Trad Invest</h3>
          <a href="/platforms/tradingtools" className="home-learn-more-btn">Learn More</a>
        </div>
        <p className="home-platform-desc">Access 26,000+ Shares, Options, ETFs, Bonds and other underlying assets.</p>
      </div>
    </div>

  </div>
</div>


<div className="home-compare-accounts-container">
  <table className="home-compare-table">
    <thead>
      <tr>
        <th className="home-feature-column">Compare Accounts</th>
        <th className="home-account-column">
          <div className="home-account-header">
            <img src="f11.png" alt="Standard Logo" className="home-account-logo" />
            <div>
              <div className="home-account-title">Standard</div>
              <div className="home-account-subtitle">Perfect for traders who are just beginning</div>
            </div>
          </div>
        </th>
        <th className="home-account-column">
          <div className="home-account-header">
            <img src="f11.png" alt="Raw Logo" className="home-account-logo" />
            <div>
              <div className="home-account-title">Raw</div>
              <div className="home-account-subtitle">Perfect for traders with experience</div>
            </div>
          </div>
        </th>
        <th className="home-account-column">
          <div className="home-account-header">
            <img src="f11.png" alt="Pro Logo" className="home-account-logo" />
            <div>
              <div className="home-account-title">Pro</div>
              <div className="home-account-subtitle">Perfect for high-volume traders</div>
            </div>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="home-feature">Spreads (pips)</td>
        <td className="home-value">From 1.5</td>
        <td className="home-value">From 0.0</td>
        <td className="home-value">From 0.6</td>
      </tr>
      <tr>
        <td className="home-feature">Commission</td>
        <td className="home-value">No commission</td>
        <td className="home-value">US$6.00 per lot</td>
        <td className="home-value">No commission</td>
      </tr>
      <tr>
        <td className="home-feature">Minimum Deposit</td>
        <td className="home-value">US$50</td>
        <td className="home-value">US$100</td>
        <td className="home-value">US$500</td>
      </tr>
      <tr>
        <td className="home-feature">Minimum Trade Size</td>
        <td className="home-value">0.01 lots</td>
        <td className="home-value">0.01 lots</td>
        <td className="home-value">0.01 lots</td>
      </tr>
      <tr>
        <td className="home-feature">Leverage</td>
        <td className="home-value">Up to 1:500</td>
        <td className="home-value">Up to 1:500</td>
        <td className="home-value">Up to 1:500</td>
      </tr>
      <tr>
        <td className="home-feature">Margin Call Level</td>
        <td className="home-value">50%</td>
        <td className="home-value">50%</td>
        <td className="home-value">50%</td>
      </tr>
      <tr>
        <td className="home-feature">Stop Out Level</td>
        <td className="home-value">20%</td>
        <td className="home-value">20%</td>
        <td className="home-value">20%</td>
      </tr>
      <tr>
        <td className="home-feature">Swap Free</td>
        <td className="home-value">Yes</td>
        <td className="home-value">Yes</td>
        <td className="home-value">Yes</td>
      </tr>
      <tr>
        <td className="home-feature">Local INR Payments</td>
        <td className="home-value">Yes</td>
        <td className="home-value">Yes</td>
        <td className="home-value">Yes</td>
      </tr>
      <tr className="home-open-row">
        <td></td>
        <td><button className="home-open-btn">Open Standard</button></td>
        <td><button className="home-open-btn">Open Raw</button></td>
        <td><button className="home-open-btn">Open Pro</button></td>
      </tr>
    </tbody>
  </table>
</div>


<section className="market-section">
    <div className="image-container">
      <img src="fam1.png" alt="Team" className="team-img" />
      <div className="overlay-text">
        <h2 className="heading">Why <span>Market.Trad?</span></h2>
        <p className="description">
          Market.Trad offers an institutional-grade trading experience with spreads from 0.0 pips, leverage up to 1:500, 26,000+ instruments, and 24/7 support — all with no minimum deposit. Client funds are secured in segregated accounts, while Equinix servers in NY, London, and Tokyo ensure ultra-fast market access.
        </p>
        
      </div>
    </div>
  </section>



<div className="features-container">
  <div className="feature-card">
    <div className="feature-header">
      <img src="b11.png" alt="icon" className="feature-icon"/>
      <h3>Segregated Accounts</h3>
    </div>
    <p>Client funds held in accounts segregated from company funds.</p>
  </div>

  <div className="feature-card">
    <div className="feature-header">
      <img src="b12.png" alt="icon" className="feature-icon"/>
      <h3>$0 Minimum Deposit</h3>
    </div>
    <p>Start with a $0 minimum deposit and enter the world of trading.</p>
  </div>

  <div className="feature-card">
    <div className="feature-header">
      <img src="b3.png" alt="icon" className="feature-icon"/>
      <h3>1:500 Leverage</h3>
    </div>
    <p>Amplify your potential with leverage up to 1:500.</p>
  </div>

  <div className="feature-card">
    <div className="feature-header">
      <img src="b4.png" alt="icon" className="feature-icon"/>
      <h3>24/7 Client Support</h3>
    </div>
    <p>Round-the-clock assistance whenever you need.</p>
  </div>

  <div className="feature-card">
    <div className="feature-header">
      <img src="b15.png" alt="icon" className="feature-icon"/>
      <h3>26,000+ Instruments</h3>
    </div>
    <p>Access 80+ markets and 26,000+ tradable instruments.</p>
  </div>

  <div className="feature-card">
    <div className="feature-header">
      <img src="b6.png" alt="icon" className="feature-icon"/>
      <h3>&lt; 100ms Execution</h3>
    </div>
    <p>Experience unrivaled execution speeds with every trade.</p>
  </div>
</div>


<section className="execution-section">
  <div className="execution-container">
 
    <div className="graph-container">
      <img src="graph.png" alt="Graph showing execution speed" className="graph-img" />
    </div>

    <div className="execution-text">
      <h2 className="execution-heading">Best in class execution speed</h2>
      <p className="execution-description">
        Research by CompareForexBrokers.com revealed that Markets.Trad achieved average execution speeds of less than 75 milliseconds. With speeds under 100 milliseconds, traders have a better chance of avoiding slippage and getting the price they desire for their order.
      </p>
      <h3 className="brand-name">Market.Trad</h3>
      <Link to="/create-account"> <button className="join-btn">Join Now</button> </Link>
    </div>
  </div>
</section>


<section className="trading-education">
  <div className="education-header">
    <div>
      <h2 className="education-title">Trading Education</h2>
      <p className="education-subtitle">
        Watch and Learn with 30+ videos on <span>YouTube</span>
      </p>
    </div>
    <button className="view-all-btn">View All ➜</button>
  </div>

  <div className="video-main">
    <iframe
      src="https://www.youtube.com/embed/YPh63f3Q3RY" 
      title="Main Trading Video"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  </div>

  <div className="video-grid">
    <iframe
      src="https://www.youtube.com/embed/YPh63f3Q3RY" 
      title="Video 1"
      frameBorder="0"
      allowFullScreen
    ></iframe>

    <iframe
      src="https://www.youtube.com/embed/YPh63f3Q3RY" 
      title="Video 2"
      frameBorder="0"
      allowFullScreen
    ></iframe>

    <iframe
      src="https://www.youtube.com/embed/YPh63f3Q3RY" 
      title="Video 3"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  </div>
</section>




    </div>
  );
};

export default PersonalHome;