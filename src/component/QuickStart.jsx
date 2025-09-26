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
              <img src="/Rectangle4393.png" alt="About Us" />
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



        <div className="tradable-assets-section2">
          <h2 className="section-title2">Tradable Assets</h2>

          <div className="assets-grid2">
            <div className="asset-card2">
              <div className="icon-placeholder2"><img src="Frame8415.png" alt="" /></div>
              <h3>Forex</h3>
              <p>70+ major, minor, and exotic currency pairs.</p>
            </div>

            <div className="asset-card2">
              <div className="icon-placeholder2"><img src="Frame8416.png" alt="" /></div>
              <h3>Commodities</h3>
              <p>Energies like crude oil, and agricultural cash crops.</p>
            </div>

            <div className="asset-card2">
              <div className="icon-placeholder2"><img src="Frame8417.png" alt="" /></div>
              <h3>Equities</h3>
              <p>We offer stocks across 27 global markets like Apple, Alibaba, BMW.</p>
            </div>

            <div className="asset-card2">
              <div className="icon-placeholder2"><img src="Frame8418.png" alt="" /></div>
              <h3>Indices</h3>
              <p>Major stock indices like US30, S&P500, and NAS100.</p>
            </div>

            <div className="asset-card2">
              <div className="icon-placeholder2"><img src="Frame8419.png" alt="" /></div>
              <h3>Metals</h3>
              <p>Precious and industry metals like gold, silver, and copper.</p>
            </div>

            <div className="asset-card2">
              <div className="icon-placeholder2"><img src="Frame8411.png" alt="" /></div>
              <h3>View all</h3>
              <p>Explore Market.Trad's diverse range of tradable assets.</p>
            </div>
          </div>
        </div>




        <div className="trading-platform-section1">
          <h2 className="section-title1">Trading Platform</h2>

          <div className="platform-cards-grid1">
            {[
              {
                img: "Frame84151.png",
                title: "Trading View",
                desc: "Trade directly in TradingView, the world’s leading charting and social platform."
              },
              {
                img: "Frame84152.png",
                title: "cTrader",
                desc: "Experience Market.Trad’ institutional trading conditions combined with cTrader."
              },
              {
                img: "Frame84153.png",
                title: "Meta Trader 4",
                desc: "Trade via MetaTrader 4 (MT4), the most popular trading platform in the world."
              },
              {
                img: "Frame84153.png",
                title: "Meta Trader 5",
                desc: "Trade via MetaTrader 5 (MT5), the most powerful premier trading platform."
              },
              {
                img: "Frame84155.png",
                title: "Market.Trad copy trader",
                desc: "Copy trades or lead followers with the Market.Trad CopyTrader platform."
              },
              {
                img: "Frame84155.png",
                title: "Market.Trad Invest",
                desc: "Access 26,000+ Shares, Options, ETFs, Bonds and other underlying assets."
              }
            ].map(({ img, title, desc }, index) => (
              <div className="platform-card1" key={index}>
                <div className="icon-placeholder1">
                  <img src={img} alt={`${title} Icon`} />
                </div>
                <div className="card-content1">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
                <a href="#" className="learn-more-btn1">
                  Learn More <span>&rarr;</span>
                </a>
              </div>
            ))}
          </div>
        </div>




        <section className="why-market-trad">
          <h2 className="section-title">
            Why <span className="highlight">Market.Trad</span>?
          </h2>

          <div className="stats-grid">
            <div className="stat-item">
              <h3>26k+</h3>
              <p>Tradable Assets</p>
            </div>
            <div className="stat-item">
              <h3>1:500</h3>
              <p>Leverage up to</p>
            </div>
            <div className="stat-item">
              <h3>Regulated</h3>
              <p>Multi-Regulated</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Client Support</p>
            </div>
            <div className="stat-item">
              <h3>$0</h3>
              <p>No Minimum Deposit</p>
            </div>
          </div>
        </section>


        <section className="compare-accounts-section">

          <table className="compare-table">
            <thead>
              <tr className="compare-header-row">
                <th className="compare-header-left">Compare Accounts</th>


                {/* STANDARD */}
                <th className="compare-header-item">
                  <div className="account-header">
                    <div className="icon-circle">
                      <img src="Frame84156.png" alt="Standard" />
                    </div>
                    <strong>Standard</strong>
                    <p>Perfect for traders<br />who are just beginning</p>
                  </div>
                </th>

                {/* RAW */}
                <th className="compare-header-item">
                  <div className="account-header">
                    <div className="icon-circle">
                      <img src="Frame84156.png" alt="Raw" />
                    </div>
                    <strong>Raw</strong>
                    <p>Perfect for traders<br />with experience</p>
                  </div>
                </th>

                {/* PRO */}
                <th className="compare-header-item">
                  <div className="account-header">
                    <div className="icon-circle">
                      <img src="Frame84156.png" alt="Pro" />
                    </div>
                    <strong>Pro</strong>
                    <p>Perfect for<br />high-volume traders</p>
                  </div>
                </th>


              </tr>
            </thead>

            <tbody>
              <tr>
                <td><strong>Spreads (pips)</strong></td>
                <td>From 1.5</td>
                <td>From 0.0</td>
                <td>From 0.6</td>
              </tr>
              <tr>
                <td><strong>Commission</strong></td>
                <td>No commission</td>
                <td>US$6.00 per lot</td>
                <td>No commission</td>
              </tr>
              <tr>
                <td><strong>Minimum Deposit</strong></td>
                <td>US$50</td>
                <td>US$100</td>
                <td>US$500</td>
              </tr>
              <tr>
                <td><strong>Minimum Trade Size</strong></td>
                <td>0.01 lots</td>
                <td>0.01 lots</td>
                <td>0.01 lots</td>
              </tr>
              <tr>
                <td><strong>Leverage</strong></td>
                <td>Up to 1:500</td>
                <td>Up to 1:500</td>
                <td>Up to 1:500</td>
              </tr>
              <tr>
                <td><strong>Margin Call Level</strong></td>
                <td>50%</td>
                <td>50%</td>
                <td>50%</td>
              </tr>
              <tr>
                <td><strong>Stop Out Level</strong></td>
                <td>20%</td>
                <td>20%</td>
                <td>20%</td>
              </tr>
              <tr>
                <td><strong>Swap Free</strong></td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td><strong>Local INR Payments</strong></td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr className="open-buttons-row">
                <td></td>
                <td><button className="open-btn">Open Standard</button></td>
                <td><button className="open-btn">Open Raw</button></td>
                <td><button className="open-btn">Open Pro</button></td>
              </tr>
            </tbody>
          </table>
        </section>



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



        <div className="payment-container1">
          <h2 className="title">
            Market.Trad <span>Payment Accept</span>
          </h2>

          <div className="payment-grid1">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" />
            <img src="mastercard.png" alt="MasterCard" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" className="small-logo" />
            <img src="googlepay.png" alt="Google Pay" className="small-logo" />
            <img src="banktransfer.png" alt="Bank Transfer" />
            <img src="crypto.png" alt="Crypto" />
            <img src="neteller.png" alt="Neteller" />
            <img src="skrill.png" alt="Skrill" />
            <img src="banktransfer.png" alt="Local Bank Transfer" />
            <img src="banktransfer.png" alt="Local Bank Transfer" />
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
              <input type="email" placeholder="Email Address" />
              <button className="join-btn1">Join Now</button>
            </div>
          </div>
        </div>




        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-logo">
              <img src="Frame9.png" alt="" />
            </div>
            <div className="footer-social">
              <a href="#"><img src="Framefb.png" alt="Facebook" /></a>
              <a href="#"><img src="Framein.png" alt="LinkedIn" /></a>
              <a href="#"><img src="Frameinsta.png" alt="Instagram" /></a>
              <a href="#"><img src="Framex.png" alt="X" /></a>
              <a href="#"><img src="Framew.png" alt="WhatsApp" /></a>
              <a href="#"><img src="Frameu.png" alt="Telegram" /></a>
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
    </>


  );
}

export default QuickStart;
