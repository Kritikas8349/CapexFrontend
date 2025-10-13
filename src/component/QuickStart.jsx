import React, { useState } from "react"; // ✅ Yeh import zaroori hai
import "./QuickStart.css";
import { FaSearch } from "react-icons/fa";
function QuickStart() {

  const videos = [
    "https://www.youtube.com/embed/-YlmnPh-6rE", // Main video
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/tgbNymZ7vqY",
    "https://www.youtube.com/embed/kJQP7kiw5Fk"
  ];
  return (
    <>
      <div id="main" >


        <div className="quickstart-page">

          {/* 1. Navbar Section */}




          {/* 2. Main Content Section */}
          <div className="main-content">
            <div id="alignment" >
              <h1>About Us</h1>
              <p>
                Market.Trad is a multi-regulated multi-asset broker headquartered in Auckland,
                New Zealand, providing an institutional trading experience for all traders.
              </p>

            </div>

            <div className="image-wrapper">
              <img src="/public/Rectangle4393.png" alt="About Us" />
            </div>
          </div>

        </div>



        <div className="institutional-section">
          <div className="institutional-content">
            <h2>
              Providing an <span className="highlight">institutional experience</span> for all traders
            </h2>
            <p>
              The BlackBull Markets mission is to provide traders with a superior trading experience through innovative technology and exceptional customer service.
            </p>
            <p>
              BlackBull Markets provide access to hundreds of different markets for traders who want to diversify their portfolio after outgrowing their traditional investing platforms.
            </p>
            <p>
              BlackBull Markets continuously improves its offerings and services to meet the evolving needs of traders, and to be a trusted leader in the financial markets.
            </p>
          </div>

          <div className="institutional-image">
            <img src="Rectangle4394.png" alt="Office workspace" />
          </div>
        </div>


        <div className="history-section">

          <div className="history-image">
            <img src="Rectangle4395.png" alt="Office workspace" />
          </div>
          <div className="history-content">
            <h1>
              Company <span className="highlight">History</span>
            </h1>
            <p>
              BlackBull Markets was founded in 2014 in Auckland, New Zealand by Michael Walker and Selwyn Loekman.
            </p>
            <p>
              Since 2014, BlackBull Markets has served tens of thousands of traders from over 180 countries and established itself as a trusted and regulated ECN broker offering access to more than 26,000 tradable instruments including stocks, forex, CFDs, and commodities.
            </p>

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




        <div className="home-platforms-section-Q">
          <h2 className="home-platforms-heading-Q">Trading Platform</h2>
          <div className="home-platforms-grid-Q">

            <div className="home-platform-card-Q">
              <img src="f1.png" alt="TradingView" className="home-platform-logo-Q" />
              <div className="home-platform-content-Q">
                <div className="home-platform-header-Q">
                  <h3 className="home-platform-title-Q">TradingView</h3>
                  <a href="/platforms/tradingview" className="home-learn-more-btn-Q">Learn More</a>
                </div>
                <p className="home-platform-desc-Q">Trade directly in TradingView, the world’s leading charting and social platform.</p>
              </div>
            </div>

            <div className="home-platform-card-Q">
              <img src="f1.png" alt="cTrader" className="home-platform-logo-Q" />
              <div className="home-platform-content-Q">
                <div className="home-platform-header-Q">
                  <h3 className="home-platform-title-Q">cTrader</h3>
                  <a href="/platforms/ctrade" className="home-learn-more-btn-Q">Learn More</a>
                </div>
                <p className="home-platform-desc-Q">Experience Market.Trad’s institutional trading conditions combined with cTrader.</p>
              </div>
            </div>

            <div className="home-platform-card-Q">
              <img src="f2.png" alt="MetaTrader 4" className="home-platform-logo-Q" />
              <div className="home-platform-content-Q">
                <div className="home-platform-header-Q">
                  <h3 className="home-platform-title-Q">MetaTrader 4</h3>
                  <a href="/platforms/mt4" className="home-learn-more-btn-Q">Learn More</a>
                </div>
                <p className="home-platform-desc-Q">Trade via MetaTrader 4 (MT4), the most popular trading platform in the world.</p>
              </div>
            </div>

            <div className="home-platform-card-Q">
              <img src="f4.png" alt="MetaTrader 5" className="home-platform-logo-Q" />
              <div className="home-platform-content-Q">
                <div className="home-platform-header-Q">
                  <h3 className="home-platform-title-Q">MetaTrader 5</h3>
                  <a href="/platforms/mt5" className="home-learn-more-btn-Q">Learn More</a>
                </div>
                <p className="home-platform-desc-Q">Trade via MetaTrader 5 (MT5), the most powerful premier trading platform.</p>
              </div>
            </div>

            <div className="home-platform-card-Q">
              <img src="f3.png" alt="CopyTrader" className="home-platform-logo-Q" />
              <div className="home-platform-content-Q">
                <div className="home-platform-header-Q">
                  <h3 className="home-platform-title-Q">CopyTrader</h3>
                  <a href="/platforms/copytrade" className="home-learn-more-btn-Q">Learn More</a>
                </div>
                <p className="home-platform-desc-Q">Copy trades or lead followers with the Market.Trad CopyTrader platform.</p>
              </div>
            </div>

            <div className="home-platform-card-Q">
              <img src="f3.png" alt="Market.Trad Invest" className="home-platform-logo-Q" />
              <div className="home-platform-content-Q">
                <div className="home-platform-header-Q">
                  <h3 className="home-platform-title-Q">Market.Trad Invest</h3>
                  <a href="/platforms/tradingtools" className="home-learn-more-btn-Q">Learn More</a>
                </div>
                <p className="home-platform-desc-Q">Access 26,000+ Shares, Options, ETFs, Bonds and other underlying assets.</p>
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



        <section className="protect-section">
          <div className="protect-container">

            <h2 className="protect-heading">
              How we <span className="highlight">protect</span> client <span className="highlight">funds</span>
            </h2>

            <p className="protect-description">
              BlackBull Markets protects its clients’ funds through the following measures:
            </p>

            <div className="protect-cards">
              <div className="protect-card">
                <h3>Tier-1 banking partners</h3>
                <p>Client funds are held safely in Tier 1 New Zealand-based banks.</p>
              </div>

              <div className="protect-card">
                <h3>Segregated Accounts</h3>
                <p>Client funds are kept in segregated accounts, separate from the company’s operating funds.</p>
              </div>

              <div className="protect-card">
                <h3>Regulated Environment</h3>
                <p>BlackBull Markets operates in a regulated environment, which requires strict adherence to financial and operational standards.</p>
              </div>
            </div>

          </div>
        </section>




        <div className="education-container">
          <div className="header">
            <div>
              <h1>Trading Education</h1>
              <p>
                Watch and Learn with 30+ videos on{" "}
                <span className="yt-text"> YouTube</span>
              </p>
            </div>
            <a href="https://www.youtube.com/">
              <button className="view-btn"  >View All ➜</button>
            </a>

          </div>


          {/* Main video */}
          <div className="main-video">
            <iframe
              src={videos[0]}
              title="Main Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Small videos */}
          <div className="video-grid">
            {videos.slice(1).map((video, index) => (
              <div key={index} className="video-card">
                <iframe
                  src={video}
                  title={`Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>





      </div>
    </>


  );
}

export default QuickStart;
