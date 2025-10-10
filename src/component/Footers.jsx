import React from "react";
import "./Footers.css"; // ✅ link your styles here

function Footers() {
  return (
    <>
      <div className="footer-fo">
        {/* Payment Logos */}
        <div className="paymentgrid1-fo">
          <h1 className="payment-title-fo">
            Market.trad <span>Payment Accept</span>
          </h1>
          <div className="payment-logos-fo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
              alt="Visa"
            />
            <img src="/public/mastercard.png" alt="MasterCard" />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple Pay"
              className="small-logo-fo"
            />
            <img
              src="/public/googlepay.png"
              alt="Google Pay"
              className="small-logo-fo"
            />
            <img src="/public/banktransfer.png" alt="Bank Transfer" />
            <img src="/public/crypto.png" alt="Crypto" />
            <img src="/public/neteller.png" alt="Neteller" />
            <img src="/public/skrill.png" alt="Skrill" />
            <img
              src="/public/Localbanktransfer.png"
              alt="Local Bank Transfer"
            />
          </div>
        </div>

        <div className="herocontainer1-fo">
          <div className="herooverlay1-fo">
            <h1>
              Start trading in less than <span>5 minutes</span>
            </h1>
            <p>with no minimum deposit</p>

            <div className="searchbox1-fo">
              <input type="email" placeholder="Email Address" />
              {/* Keep button inside for large screens */}
              <button className="button1-fo desktop-btn-fo">Join now</button>
            </div>

            {/* Button for mobile below searchbox */}
            <button className="button1-fo mobile-btn-fo">Join now</button>
          </div>
        </div>

        {/* Footer Section */}
        <div className="footercontainer1-fo">
          {/* Top */}
          <div className="footertop1-fo">
            <div className="footerlogo1-fo">
              <img src="/public/logo2.png" alt="Market Trad Logo" />
            </div>
            <div className="footersocial1-fo">
              <a href="#">
                <img src="/public/facebook.png" alt="Facebook" />
              </a>
              <a href="#">
                <img src="/public/ri_linkedin-fill.png" alt="LinkedIn" />
              </a>
              <a href="#">
                <img src="/public/insta.png" alt="Instagram" />
              </a>
              <a href="#">
                <img src="/public/X.png" alt="X" />
              </a>
              <a href="#">
                <img src="/public/whatsapp.png" alt="WhatsApp" />
              </a>
              <a href="#">
                <img src="/public/name.png" alt="Telegram" />
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="footercontent1-fo">
            <div className="footersection1-fo">
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

            <div className="footersection1-fo">
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

            <div className="footersection1-fo">
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

            <div className="footersection1-fo">
              <h3>About</h3>
              <ul>
                <li>About us</li>
                <li>Account Comparison</li>
                <li>Company News</li>
                <li>Compliance</li>
                <li>Careers</li>
              </ul>
            </div>

            <div className="footersection1-fo">
              <h3>Support</h3>
              <ul>
                <li>Platform Support</li>
                <li>Market Support</li>
                <li>Account Support</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="footersection1-fo">
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

          {/* Bottom */}
          <div className="footerbottom1-fo">
            <div className="footercontact1-fo">
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

export default Footers;
