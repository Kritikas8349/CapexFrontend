import React from 'react'
import "./QuickStart3.css";

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

function QuickStart3() {
  return (
    <div id='Main' >


      <section className="landing-section3">
        <div className="left-section3">
          <h1 className="title3">Integrated <br /> Trading Platforms</h1>
          <p className="description3">
            Explore our range of leading trading platforms including <br /> MetaTrader 4, MetaTrader 5, cTrader, and TradingView.
          </p>
          <form className="email-form3">
            <input
              type="email"
              className="email-input31"
              placeholder="Email address...."
              required
            />
            <button type="submit" className="join-btn3">  Join Now</button>
          </form>
        </div>
        <div className="right-section3">
          <img src="1.png" alt="Phone" className="phone-image3" />
        </div>
      </section>





      <div className="home-platforms-section-Q1-1">
        <h2 className="home-platforms-heading-Q-1">Trading Platform</h2>
        <div className="home-platforms-grid-Q-1">

          <div className="home-platform-card-Q-1">
            <img src="f1.png" alt="TradingView" className="home-platform-logo-Q-1" />
            <div className="home-platform-content-Q-1">
              <div className="home-platform-header-Q-1">
                <h3 className="home-platform-title-Q-1">TradingView</h3>
                <a href="/platforms/tradingview" className="home-learn-more-btn-Q-1">Learn More</a>
              </div>
              <p className="home-platform-desc-Q-1">Trade directly in TradingView, the world’s leading charting and social platform.</p>
            </div>
          </div>

          <div className="home-platform-card-Q-1">
            <img src="f1.png" alt="cTrader" className="home-platform-logo-Q-1" />
            <div className="home-platform-content-Q-1">
              <div className="home-platform-header-Q-1">
                <h3 className="home-platform-title-Q-1">cTrader</h3>
                <a href="/platforms/ctrade" className="home-learn-more-btn-Q-1">Learn More</a>
              </div>
              <p className="home-platform-desc-Q-1">Experience Market.Trad’s institutional trading conditions combined with cTrader.</p>
            </div>
          </div>

          <div className="home-platform-card-Q-1">
            <img src="f2.png" alt="MetaTrader 4" className="home-platform-logo-Q-1" />
            <div className="home-platform-content-Q-1">
              <div className="home-platform-header-Q-1">
                <h3 className="home-platform-title-Q-1">MetaTrader 4</h3>
                <a href="/platforms/mt4" className="home-learn-more-btn-Q-1">Learn More</a>
              </div>
              <p className="home-platform-desc-Q-1">Trade via MetaTrader 4 (MT4), the most popular trading platform in the world.</p>
            </div>
          </div>

          <div className="home-platform-card-Q-1">
            <img src="f4.png" alt="MetaTrader 5" className="home-platform-logo-Q-1" />
            <div className="home-platform-content-Q-1">
              <div className="home-platform-header-Q-1">
                <h3 className="home-platform-title-Q-1">MetaTrader 5</h3>
                <a href="/platforms/mt5" className="home-learn-more-btn-Q-1">Learn More</a>
              </div>
              <p className="home-platform-desc-Q-1">Trade via MetaTrader 5 (MT5), the most powerful premier trading platform.</p>
            </div>
          </div>

          <div className="home-platform-card-Q-1">
            <img src="f3.png" alt="CopyTrader" className="home-platform-logo-Q-1" />
            <div className="home-platform-content-Q-1">
              <div className="home-platform-header-Q-1">
                <h3 className="home-platform-title-Q-1">CopyTrader</h3>
                <a href="/platforms/copytrade" className="home-learn-more-btn-Q-1">Learn More</a>
              </div>
              <p className="home-platform-desc-Q-1">Copy trades or lead followers with the Market.Trad CopyTrader platform.</p>
            </div>
          </div>

          <div className="home-platform-card-Q-1">
            <img src="f3.png" alt="Market.Trad Invest" className="home-platform-logo-Q-1" />
            <div className="home-platform-content-Q-1">
              <div className="home-platform-header-Q-1">
                <h3 className="home-platform-title-Q-1">Market.Trad Invest</h3>
                <a href="/platforms/tradingtools" className="home-learn-more-btn-Q-1">Learn More</a>
              </div>
              <p className="home-platform-desc-Q-1">Access 26,000+ Shares, Options, ETFs, Bonds and other underlying assets.</p>
            </div>
          </div>

        </div>
      </div>






      {/* <div className="payment-grid">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" />
          <img src="mastercard.png" alt="MasterCard" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" className="small-logo" />
          <img src="googlepay.png" alt="Google Pay" className="small-logo" />
          <img src="banktransfer.png" alt="Bank Transfer" />
          <img src="crypto.png" alt="Crypto" />
          <img src="neteller.png" alt="Neteller" />
          <img src="skrill.png" alt="Skrill" />
          <img src="banktransfer.png" alt="Local Bank Transfer" />
          {/* <img src="banktransfer.png" alt="Local Bank Transfer" /> */}
      {/* </div>  */}




      {/* <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>
              Start trading in less than <span>5 minutes</span>
            </h1>
            <p>with no minimum deposit</p>

            <div className="hero-form">
              <input type="email" placeholder="Email address" />
              <button className="join-btn">Join Now</button>
            </div>
          </div>

          
          <div className="awards">
            <p>AWARDED BY THE BEST</p>
            <div className="awards-logos">
              
              <span>🏆 Award 1</span>
              <span>🏆 Award 2</span>
              <span>🏆 Award 3</span>
            </div>
          </div>
        </div>
      </section> */}



      {/* <div className="footer-container">
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
      </div> */}


    </div>
  )
}

export default QuickStart3