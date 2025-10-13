import React from "react";
import "./AboutUs.css"; 

const AboutUs = () => {
  return (
    <div className="aboutus-main-container">
    <div className="aboutus-hero-container">
    
  <img
    src="/Office1.jpg"
    alt="Platform Support"
    className="aboutus-hero-image"
  />

  <div className="aboutus-hero-text">
    {/* Breadcrumbs */}
    <nav className="aboutus-breadcrumbs">
      <span className="breadcrumb-item">Home</span>
      <span className="breadcrumb-separator">{">"}</span>
      <span className="breadcrumb-item">About</span>
      <span className="breadcrumb-separator">{">"}</span>
      <span className="breadcrumb-item">Company Information</span>
      <span className="breadcrumb-separator">{">"}</span>
      <span className="breadcrumb-item-current">About Us</span>
    </nav>

    <h1 className="aboutus-hero-heading">
      About Us
    </h1>
  </div>
</div>

<div className="aboutus-info-container">
  {/* Left: Heading */}
  <div className="aboutus-info-left">
    <h2 className="aboutus-info-heading">Market.trad Partners <br />About Us</h2>
  </div>

  {/* Right: Paragraph */}
  <div className="aboutus-info-right">
    <p className="aboutus-info-text">
      We aim to deliver the best trading experience for everyday investors. Our clients can manage all their investment portfolios from a single account, with seamless access to forex, stock trading, and insightful market research.
    </p>
  </div>
</div>


<div className="about-market-container">
  {/* Left: Content */}
  <div className="about-market-content">
    <h2 className="about-market-heading">About Market.trad Markets</h2>
    <p className="about-market-text">
      Market.trad is a leading, multi-regulated financial services provider delivering access to a wide range of assets, including shares, options, futures, derivatives, cryptocurrencies, and market research, for both local and international clients. We have built an integrated platform ecosystem powered by proprietary technology designed to prioritize client experience and streamline portfolio management. Market.trad operates as a true electronic communications network brokerage, providing non-dealing desk solutions with a variety of products to help clients consolidate and manage their investments efficiently.
    </p>
    <p className="about-market-text">
      <br />Founded and led by experienced professionals with extensive backgrounds in financial markets, trading technology, and data security, Market.trad was established with the goal of becoming a top-tier online multi-asset broker. Our client-focused approach to product innovation has allowed us to expand and adapt our offerings to meet the evolving needs of investors. Today, Market.trad serves a growing community of traders from over 180 countries, continuously enhancing our platforms and trading experience for all users.
    </p>
  </div>

  {/* Right: Image */}
  <div className="about-market-image-container">
    <img
      src="/markettrad.webp"
      alt="Market.trad Markets"
      className="about-market-image"
    />
  </div>
</div>


<div className="about-gallery-container">
  <div className="about-gallery-grid">
    <img src="/off1.jpg" alt="Office 1" className="about-gallery-item" />
    <img src="/off2.avif" alt="Office 2" className="about-gallery-item" />
    <img src="/off3.avif" alt="Office 3" className="about-gallery-item" />
    <img src="/off4.avif" alt="Office 4" className="about-gallery-item" />
    <img src="/off5.webp" alt="Office 5" className="about-gallery-item" />
    <img src="/off6.avif" alt="Office 6" className="about-gallery-item" />
  </div>
</div>



<div class="history-container">
    <h1>Our History</h1>
    <p>
        Founded in Auckland, New Zealand in 2014, our founders aimed to provide retail investors with a high-quality trading experience – a level of service that was rarely accessible at the time.
    </p>
    <p>
        Our team has accomplished this by creating advanced trading technologies, including proprietary in-house trade-order management systems.
    </p>
    <p>
        To complement our robust technology and competitive pricing, we offer professional services that elevate the trading experience for our clients.
    </p>

    <div class="history-features">
        <div class="feature-item">
            <img src="/traffic_icon.svg" alt="Logo" class="feature-logo"/>
            <span>Personal Account Managers</span>
        </div>
        <div class="feature-item">
            <img src="/traffic_icon.svg" alt="Logo" class="feature-logo"/>
            <span>Daily Market Insights</span>
        </div>
        <div class="feature-item">
            <img src="/traffic_icon.svg" alt="Logo" class="feature-logo"/>
            <span>Comprehensive Trade Analysis</span>
        </div>
    </div>

    <p>
        The success of our professional trading solutions has enabled rapid expansion, with offices across the Asia-Pacific, North America, and Europe. We also operate data centers on leading trading servers in Tokyo, London, New York, Shanghai, and Hong Kong.
    </p>
</div>



</div>


  );
};

export default AboutUs;
