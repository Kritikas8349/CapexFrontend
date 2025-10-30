import React from "react";
import { Link } from 'react-router-dom';
import "./Footers.css"; // ✅ link your styles here

function Footers() {
  return (
    <>
    <div className="footer">
        {/* Payment Logos */}
        
        <div className="paymentgrid1">
  <h1 className="payment-title">Market.trad <span>Payment Accept</span></h1>
  <div className="payment-logos">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
      alt="Visa"
    />
    <img src="/mastercard.png" alt="MasterCard" />
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
      alt="Apple Pay"
      className="small-logo"
    />
    <img src="/googlepay.png" alt="Google Pay" className="small-logo" />
    <img src="/banktransfer.png" alt="Bank Transfer" />
    <img src="/crypto.png" alt="Crypto" />
    <img src="/neteller.png" alt="Neteller" />
    <img src="/skrill.png" alt="Skrill" />
    <img src="/Localbanktransfer.png" alt="Local Bank Transfer" />
  </div>
</div>



      
<div className="herocontainer1">
  <div className="herooverlay1">
    <h1>
      Start trading in less than <span>5 minutes</span>
    </h1>
    <p>with no minimum deposit</p>

    <div className="searchbox1">
      <input type="email" placeholder="Email Address" />
      {/* Keep button inside for large screens */}
      <Link to="/create-account" className="button1 desktop-btn">
  Join now
</Link>
    </div>

    {/* Button for mobile below searchbox */}
    <button className="button1 mobile-btn">Join now</button>
  </div>
</div>


      {/* Footer Section */}
      <div className="footercontainer1">
        {/* Top */}
        <div className="footertop1">
          <div className="footerlogo1">
            <img src="/logo2.png" alt="Market Trad Logo" />
          </div>
          <div className="footersocial1">
            <a href="https://www.facebook.com/">
              <img src="/facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.linkedin.com/mynetwork/grow/">
              <img src="/ri_linkedin-fill.png" alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/">
              <img src="/insta.png" alt="Instagram" />
            </a>
            <a href="https://x.com/?lang=en">
              <img src="/X.png" alt="X" />
            </a>
            <a href="https://www.whatsapp.com/?lang=en">
              <img src="/whatsapp.png" alt="WhatsApp" />
            </a>
            <a href="https://telegram.org/">
              <img src="/name.png" alt="Telegram" />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="footercontent1">
  <div className="footersection1">
    <h3>Markets</h3>
    <ul>
      <li><a href="/markets">Markets Overview</a></li>
      <li><a href="/markets/forex">Forex</a></li>
      <li><a href="/market/equities">Shares</a></li>
      <li><a href="/markets/commodities">Commodities</a></li>
      <li><a href="/markets/futures">Futures</a></li>
      <li><a href="/markets/indices">Indices</a></li>
    </ul>
  </div>

  <div className="footersection1">
    <h3>Platforms</h3>
    <ul>
      <li><a href="/platforms/tradingview">TradingView</a></li>
      <li><a href="/platforms/ctrade">cTrader</a></li>
      <li><a href="/platforms/mt4">MetaTrader 4</a></li>
      <li><a href="/platforms/mt5">MetaTrader 5</a></li>
      <li><a href="/webtrader">MetaTrader Web Trader</a></li>
      <li><a href="/platforms/copytrade">Markets.Trad Copy Trader</a></li>
      <li><a href="/trad-invest">Markets.Trad Invest</a></li>
      <li><a href="/platforms/tradingtools">Trading Tools</a></li>
    </ul>
  </div>

  <div className="footersection1">
    <h3>Education</h3>
    <ul>
      <li><a href="/education/education-hub">Education Hub</a></li>
      <li><a href="/education/forex">Forex Tutorials</a></li>
      <li><a href="/education/shares">Shares Tutorials</a></li>
      <li><a href="/education/commodities">Commodities Tutorials</a></li>
      <li><a href="/education/research/opportunities">Trading Opportunities</a></li>
      <li><a href="/support/economic-calendar">Economic Calendar</a></li>
      <li><a href="/demo-trade">Demo Trade</a></li>
    </ul>
  </div>

  <div className="footersection1">
    <h3>About</h3>
    <ul>
      <li><a href="/about/about-us">About us</a></li>
      <li><a href="/about/comparison">Account Comparison</a></li>
      <li><a href="/about/news">Company News</a></li>
      <li><a href="/about/compliance">Compliance</a></li>
      <li><a href="/careers">Careers</a></li>
    </ul>
  </div>

  <div className="footersection1">
    <h3>Support</h3>
    <ul>
      <li><a href="/support/platform-support">Platform Support</a></li>
      <li><a href="/support/market-support">Market Support</a></li>
      <li><a href="/support/account-support">Account Support</a></li>
      <li><a href="/support/contact-support">Contact Us</a></li>
    </ul>
  </div>

  <div className="footersection1">
    <h3>Legal</h3>
    <ul>
      <li><a href="/legal-hub">Legal Hub</a></li>
      <li><a href="/risk-warning">Risk Warning</a></li>
      <li><a href="/privacy-policy">Privacy Policy</a></li>
      <li><a href="/client-service-agreement">Client Service Agreement</a></li>
      <li><a href="/complaints-handling">Complaints Handling Procedure</a></li>
      <li><a href="/confidentiality-policy">Confidentiality Policy</a></li>
      <li><a href="/conflicts-policy">Conflicts of Interests Policy</a></li>
      <li><a href="/cookie-policy-eu">Cookie Policy EU</a></li>
    </ul>
  </div>
</div>


<div className="footerbottom1">
  <div className="footercontact1">
    <div className="footercol">
      <p>Customer Support Contacts</p>
      <p>
  WhatsApp Support:{" "}
  <a
    href="https://wa.me/918349102005" 
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-link"
  >
    +91 99xxx xxxxx
  </a>
</p>

      <p>Support: +41 xxx xxx xxxx</p>
    </div>

    <div className="footercol">
    <p>
   Email:{" "}
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=support@market.trad.com&su=Customer%20Support%20Request&body=Hello%20Market.Trad%20Support,"
    target="_blank"
    rel="noopener noreferrer"
  >
    support@market.trad.com
  </a>
</p>

    </div>

    <div className="footercol">
      <p><strong>Copyright © 2025 Market.trad Group Limited. All Rights Reserved.</strong></p>
    </div>
  </div>
</div>

      </div>
      </div>
    </>
  );
}

export default Footers;
