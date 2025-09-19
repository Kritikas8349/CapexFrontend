import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { HiOutlineMenu } from 'react-icons/hi';
import { FaSearch } from "react-icons/fa";

import "../styles/NewsSection.css";

const articles = [
  {
    image: "trade1.avif",
    title: "Enhanced Prime Account Offering with Zero Spreads on Forex Majors",
    description:
      "Prime clients will now see zero spreads through most of the trading day, representing a 48% to 71% reduction.",
    date: "September 18, 2025",
    link: "#",
  },
  {
    image: "trade2.avif",
    title: "Market.trad to Attend Forex Expo Dubai 2025",
    description:
      "Market.trad will be participating in Forex Expo Dubai 2025, on 6 Oct 2025 at the Dubai World Trade Centre.",
    date: "September 4, 2025",
    link: "#",
  },
  {
    image: "trade3.avif",
    title: "Market.trad launches 24/5 trading on U.S. stocks",
    description:
      "Market.trad is pleased to announce the launch of 24/5 trading on a wide range of U.S. stock CFDs.",
    date: "August 7, 2025",
    link: "#",
  },
  {
    image: "awards.jpg",
    title: "Global Trading Awards – Best Execution Broker 2025",
    description:
      "We’re honored to be awarded Best Execution Broker 2025 at the Global Trading Awards.",
    date: "July 15, 2025",
    link: "#",
  },
  {
    image: "tarde4.avif",
    title: "BlackBull expands cryptocurrency CFD offerings",
    description:
      "New crypto pairs have been added to the Market.trad platform for more diversified trading.",
    date: "June 30, 2025",
    link: "#",
  },
  {
    image: "trade5.avif",
    title: "New Office Opens in Singapore to Serve Asian Clients",
    description:
      "Market.trad is proud to open its new regional office in Singapore to enhance service in the Asian region.",
    date: "June 1, 2025",
    link: "#",
  },
  {
    image: "trade6.avif",
    title: "New Office Opens in Singapore to Serve Asian Clients",
    description:
      "Market.trad is proud to open its new regional office in Singapore to enhance service in the Asian region.",
    date: "June 1, 2025",
    link: "#",
  },
  {
    image: "trade1.avif",
    title: "New Office Opens in Singapore to Serve Asian Clients",
    description:
      "Market.trad is proud to open its new regional office in Singapore to enhance service in the Asian region.",
    date: "June 1, 2025",
    link: "#",
  },
  {
    image: "trade2.avif",
    title: "New Office Opens in Singapore to Serve Asian Clients",
    description:
      "Market.trad is proud to open its new regional office in Singapore to enhance service in the Asian region.",
    date: "June 1, 2025",
    link: "#",
  },
];

const NewsSection = () => {
  return (
    <div className="news-container">
      <h2 className="news-heading">Company News</h2>
      <div className="news-grid">
        {articles.map((article, index) => (
          <div className="news-card" key={index}>
            <img src={article.image} alt={article.title} className="news-img" />
            <div className="news-content">
              <h3 className="news-title">{article.title}</h3>
              <p className="news-desc">{article.description}</p>
              <div className="news-footer">
                <span className="news-date">{article.date}</span>
                <a href={article.link} className="news-readmore">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="paymentgrid1">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" />
          <img src="mastercard.png" alt="MasterCard" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" className="small-logo"/>
          <img src="googlepay.png" alt="Google Pay" className="small-logo"/>
          <img src="banktransfer.png" alt="Bank Transfer" />
          <img src="crypto.png" alt="Crypto" />
          <img src="neteller.png" alt="Neteller" />
          <img src="skrill.png" alt="Skrill" />
          <img src="Localbanktransfer.png" alt="Local Bank Transfer" />
          
        </div>

       
        <div className="herocontainer1">
        <div className="herooverlay1">
          <h1>
            Start trading in less than <span>5 minutes</span>
          </h1>
          <p>with no minimum deposit</p>

          <div className="searchbox1">
              
              <input type="email" placeholder="    Email Address" />
              
              <button className="join-btn1">Join Now</button>
            </div>
        </div>
      </div>

        <div className="footercontainer1">
          <div className="footertop1">
            <div className="footerlogo1">
              <img src="logo2.png" alt="" />
            </div>
            <div className="footersocial1">
              <a href="#"><img src="facebook.png" alt="Facebook" /></a>
              <a href="#"><img src="ri_linkedin-fill.png" alt="LinkedIn" /></a>
              <a href="#"><img src="insta.png" alt="Instagram" /></a>
              <a href="#"><img src="X.png" alt="X" /></a>
              <a href="#"><img src="whatsapp.png" alt="WhatsApp" /></a>
              <a href="#"><img src="name.png" alt="Telegram" /></a>
            </div>
          </div>

          <div className="footercontent1">
            <div className="footersection">
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
            
            <div className="footersection1">
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
            
            <div className="footersection1">
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

            <div className="footersection1">
              <h3>About</h3>
              <ul>
                <li>About us</li>
                <li>Account Comparison</li>
                <li>Company News</li>
                <li>Compliance</li>
                <li>Careers</li>
              </ul>
            </div>

            <div className="footersection1">
              <h3>Support</h3>
              <ul>
                <li>Platform Support</li>
                <li>Market Support</li>
                <li>Account Support</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="footersection1">
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

          <div className="footerbottom1">
            <div className="footercontact1">
              <p>Customer Support Contacts</p>
              <p>Whatsapp Support: +41 xxx xxx xxxx</p>
              <p>Support: +41 xxx xxx xxxx</p>
              <p>Email: support@market.trad.com</p>
            </div>
          </div>
        </div>
        
    </div>
  );
};

export default NewsSection;