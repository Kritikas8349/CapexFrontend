import React from "react";
import { FaCheck, FaTimes, FaBolt } from "react-icons/fa"; 
import "./ExampleReview.css";

const ExampleReview = () => {
  return (
    <div>
      {/* First Section */}
      <div className="example-review-wrapper">
        {/* Hero Section */}
        <div
          className="example-hero-section"
          style={{ backgroundImage: `url(/12.jpg)` }}
        >
          <div className="example-breadcrumb">
            HOME &gt; SUPPORT &gt; SUPPORT &gt; <b>EXAMPLE REVIEW</b>
          </div>
          <h1 className="example-hero-title">Example Review</h1>
        </div>

        {/* Info Section */}
        <div className="example-info-section">
          <h2 className="example-info-title">Example Review</h2>
          <p className="example-info-text">
            Example Review page contains a compilation of factual information
            about Market Trading which you can use to assist in the preparation
            of company reviews or comparisons for your own referral channel.
            Please get in touch with our team if there is any other information
            you require and we’d be glad to assist.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="example-shortdesc-wrapper">
        {/* Title and Description */}
        <h2 className="example-shortdesc-title">Short Description</h2>
        <p className="example-shortdesc-text">
          Market Trading is an award-winning trading platform that provides
          institutional-grade trading conditions and exceptional customer
          service and support. We provide access to hundreds of markets for
          clients who want to diversify their portfolio after outgrowing their
          traditional investing platforms.
        </p>
        <p className="example-shortdesc-highlight">
          Marjet Trading continuously improves its offerings and services to
          meet the evolving needs of its clients, and aims to be a trusted
          partner in the financial markets.
        </p>

        {/* Info Table */}
        <div className="example-shortdesc-table">
          <div className="example-row">
            <div className="example-col-label">Headquarters</div>
            <div className="example-col-value">New Zealand</div>
          </div>

          <div className="example-row">
            <div className="example-col-label">Year of Foundation</div>
            <div className="example-col-value">2014</div>
          </div>

          <div className="example-row">
            <div className="example-col-label">Financial Regulation</div>
            <div className="example-col-value">
              FMA (New Zealand), FSA (Seychelles)
            </div>
          </div>

          <div className="example-row">
            <div className="example-col-label">Live Accounts</div>
            <div className="example-col-value">
              Three account types: <br />
              <span className="account-types">
                <span>➕ Standard</span>
                <span>Prime</span>
                <span>Institutional</span>
              </span>
            </div>
          </div>

          <div className="example-row">
            <div className="example-col-label">Supported Platform</div>
            <div className="example-col-value">
              <ul>
                <li>MetaTrader 4 (MT4)</li>
                <li>MetaTrader 5 (MT5)</li>
                <li>TradingView</li>
                <li>cTrader</li>
                <li>Webtrader</li>
                <li>Marjet CopyTrader</li>
                <li>Marjet Invest</li>
              </ul>
            </div>
          </div>

          <div className="example-row">
            <div className="example-col-label">Demo Accounts</div>
            <div className="example-col-value">Yes</div>
          </div>

          <div className="example-row">
            <div className="example-col-label">Account Currencies</div>
            <div className="example-col-value">
              Eleven base account currencies: <br />
              <ul>
                <li>USD – United States Dollar</li>
                <li>EUR – Euro</li>
                <li>GBP – Great British Pound</li>
                <li>AUD – Australian Dollar</li>
                <li>NZD – New Zealand Dollar</li>
                <li>SGD – Singapore Dollar</li>
                <li>CAD – Canadian Dollar</li>
                <li>JPY – Japanese Yen</li>
                <li>ZAR – South African Rand</li>
                <li>CHF – Swiss Franc</li>
                <li>THB – Thai Baht</li>
              </ul>
            </div>
          </div>

          <div className="example-row">
            <div className="example-col-label">Payment Methods</div>
            <div className="example-col-value">
              A variety of country-specific funding methods including:
              <ul>
                <li>Local/International Bank Transfer (SWIFT/SEPA/Faster)</li>
                <li>Visa</li>
                <li>MasterCard</li>
                <li>American Express (AMEX)</li>
                <li>Skrill</li>
                <li>Neteller</li>
                <li>China Union Pay</li>
                <li>FasaPay</li>
                <li>PoliPay</li>
                <li>AstroPay</li>
                <li>Help2Pay</li>
                <li>PaymentAsia</li>
                <li>Crypto (BTC, BCH, LTC, ETH, USDT, XLM, XRP, LINK, USDC)</li>
              </ul>
            </div>
          </div>

          <div className="example-row">
            <div className="example-col-label">Transaction Conditions</div>
            <div className="example-col-value">
              Deposits are typically within 5 minutes (depending on the system refresh).  
              Bank transfers vary, as they can take longer depending on where funds originate from.  
              Withdrawals are processed within 24 hours and carry a 5-unit base currency administration fee.
            </div>
          </div>

          <div className="example-row">
            <div className="example-col-label">Customer Support</div>
            <div className="example-col-value">
              24/7 Live Chat, Email, and Phone
            </div>
          </div>

          <div className="example-row">
            <div className="example-col-label">Awards</div>
            <div className="example-col-value">
              <h4>2023</h4>
              <ul>
                <li>#1 Execution Speed – Compare Forex Brokers</li>
                <li>Best in Class for Offering of Investments – Forex Brokers</li>
              </ul>
              <h4>2022</h4>
              <ul>
                <li>Excellence in International Trade – Industry Awards</li>
                <li>Best ECN Forex Broker – Broker Tested</li>
              </ul>
              <h4>2021</h4>
              <ul>
                <li>Fastest Growing Trading Platform – Deloitte Fast 50</li>
              </ul>
              <h4>2020</h4>
              <ul>
                <li>Best NZ Forex Broker – Compare Forex Brokers</li>
              </ul>
            </div>
          </div>

          <div className="example-row">
            <div className="example-col-label">Tradeable Assets</div>
            <div className="example-col-value">
              26,000+ including Shares, Forex, CFDs, Commodities, Crypto
            </div>
          </div>

          <div className="example-row">
            <div className="example-col-label">Minimum Deposit</div>
            <div className="example-col-value">$0 – No Minimum Deposit</div>
          </div>

          <div className="example-row">
            <div className="example-col-label">Forex Pairs (Total)</div>
            <div className="example-col-value">64 (major, minor and exotics)</div>
          </div>

          <div className="example-row">
            <div className="example-col-label">CFD Trading</div>
            <div className="example-col-value">
              Forex, Indices, Commodities, Stocks and Futures
            </div>
          </div>

          <div className="example-row">
            <div className="example-col-label">US Stock Trading (Non-CFD)</div>
            <div className="example-col-value">
              <FaCheck className="icon-check" />
            </div>
          </div>

          <div className="example-row">
            <div className="example-col-label">Int’l Stock Trading (Non-CFD)</div>
            <div className="example-col-value">
              <FaCheck className="icon-check" />
            </div>
          </div>

          <div className="example-row">
            <div className="example-col-label">Cryptocurrency (Physical)</div>
            <div className="example-col-value">Soon</div>
          </div>

          <div className="example-row">
            <div className="example-col-label">Cryptocurrency (CFD)</div>
            <div className="example-col-value">
              <FaCheck className="icon-check" />
            </div>
          </div>

          <div className="example-row">
            <div className="example-col-label">Market Maker</div>
            <div className="example-col-value">
              <FaTimes className="icon-cross" />
            </div>
          </div>

          <div className="example-row">
            <div className="example-col-label">Social Trading / Copy Trading</div>
            <div className="example-col-value">
              ZuluTrade, MyFxbook and Marjet Copy Trade System
            </div>
          </div>

          <div className="example-row">
            <div className="example-col-label">Swap-free Accounts</div>
            <div className="example-col-value">
              <FaCheck className="icon-check" />
            </div>
          </div>
        </div>

        {/* ===================== ECN Standard Account Section ===================== */}
        <h2 className="example-shortdesc-title">ECN Standard Account</h2>
        <p className="example-shortdesc-text">
          Perfect for traders who are just beginning. With access to all our
          tradeable instruments and no minimum deposit, our commission-free
          Standard Account allows you to attain a complete trading experience.
          The Standard Account is perfect for traders looking for a great value
          Forex experience. With no commissions and low spreads, it’s easy to
          get started. Trade with your Standard Account on any of the platforms
          we offer, including PC, Mac, mobile, and Webtrader.
        </p>

        <div className="example-shortdesc-table">
          <div className="example-row">
            <div className="example-col-label">Minimum Deposit</div>
            <div className="example-col-value">No Minimum Deposit</div>
          </div>
          <div className="example-row">
            <div className="example-col-label">Spreads From</div>
            <div className="example-col-value">0.8 pips (8 points)</div>
          </div>
          <div className="example-row">
            <div className="example-col-label">Minimum Lot Size</div>
            <div className="example-col-value">0.01</div>
          </div>
          <div className="example-row">
            <div className="example-col-label">Leverage Up To</div>
            <div className="example-col-value">1:500</div>
          </div>
          <div className="example-row">
            <div className="example-col-label">Commission</div>
            <div className="example-col-value">No commission</div>
          </div>
          <div className="example-row">
            <div className="example-col-label">Equinix Server</div>
            <div className="example-col-value">NY4, LD4 and TY3</div>
          </div>
        </div>
         {/* ===================== ECN Institutional Account Section ===================== */}
        <h2 className="example-shortdesc-title">ECN Institutional Account</h2>
        <p className="example-shortdesc-text">
          For traders looking for Institutional Services and Functionality to
          provide a truly institutional experience, we offer custom accounts to
          our largest traders.
        </p>

        <div className="example-shortdesc-table">
          <div className="example-row">
            <div className="example-col-label">Minimum Deposit</div>
            <div className="example-col-value">US $2,000</div>
          </div>
          <div className="example-row">
            <div className="example-col-label">Spreads From</div>
            <div className="example-col-value">0.0 pips</div>
          </div>
          <div className="example-row">
            <div className="example-col-label">Minimum Lot Size</div>
            <div className="example-col-value">0.01</div>
          </div>
          <div className="example-row">
            <div className="example-col-label">Leverage Up To</div>
            <div className="example-col-value">1:500</div>
          </div>
          <div className="example-row">
            <div className="example-col-label">Commission</div>
            <div className="example-col-value">Negotiable</div>
          </div>
          <div className="example-row">
            <div className="example-col-label">Equinix Server</div>
            <div className="example-col-value">Custom options</div>
          </div>
        </div>
         {/* ===================== Swap-Free Account Section ===================== */}
        <h2 className="example-shortdesc-title">Swap-Free Account</h2>
        <p className="example-shortdesc-text">
          As paying or receiving interest is prohibited in Islam, Market Trading has created a swap-free account that operates in full compliance with Sharia Law. Swap-free (Islamic) accounts are offered as a variant of our Standard, Prime, and Institutional Accounts, retaining all the great features of the regular account types.
        </p>
         {/* ===================== Client Education Section ===================== */}
        <h2 className="example-shortdesc-title">Client Education</h2>
        <div className="example-shortdesc-table">
          <div className="example-row">
            <div className="example-col-label">Client Webinars</div>
            <div className="example-col-value">Interactive online sessions for traders of all levels.</div>
          </div>
          <div className="example-row">
            <div className="example-col-label">Market Reviews</div>
            <div className="example-col-value">Regular analysis of market conditions and trends.</div>
          </div>
          <div className="example-row">
            <div className="example-col-label">Trading Videos</div>
            <div className="example-col-value">Video tutorials covering strategies, tools, and platforms.</div>
          </div>
          <div className="example-row">
            <div className="example-col-label">Trading Glossary</div>
            <div className="example-col-value">A comprehensive dictionary of trading terms and definitions.</div>
          </div>
          <div className="example-row">
            <div className="example-col-label">Trading Guides</div>
            <div className="example-col-value">Step-by-step guides for beginners and advanced traders.</div>
          </div>
        </div>

         <section className="promotions">
      <h2 className="title">What Promotions Or Offers Do We Have For New Clients?</h2>
      <p className="description">
        We actively review our promotional offerings for new clients. The current
        promotion we are offering is free TradingView Pro subscriptions.
      </p>

      <div className="promotions-grid">
        <div className="column">
          <h3>What are your trading conditions?</h3>
          <ul>
            <li><FaBolt className="icon" /> Market Execution</li>
            <li><FaBolt className="icon" /> Market Execution</li>
            <li><FaBolt className="icon" /> Minimum lot size 0.01</li>
            <li><FaBolt className="icon" /> Max lot size 100 lots per click</li>
            <li><FaBolt className="icon" /> Margin call 70%</li>
            <li><FaBolt className="icon" /> Stop out 50%</li>
          </ul>
        </div>

        <div className="column">
          <h3>What are your top three selling points or key features?</h3>
          <ul>
            <li><FaBolt className="icon" /> 1:500 Leverage</li>
            <li><FaBolt className="icon" /> Multi-Award-Winning New Zealand Broker</li>
            <li><FaBolt className="icon" /> Institutional-grade spreads from 0.0 pips</li>
          </ul>
        </div>
      </div>
    </section>
      </div>
    </div>
  );
};

export default ExampleReview;
