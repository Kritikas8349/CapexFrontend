import React from 'react';
import './Affiliate.css'; 
import { FaInfinity, FaTrophy, FaBolt, FaLifeRing, FaChartLine, FaBullhorn } from "react-icons/fa";


const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ"; 
const YOUTUBE_EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?controls=1&modestbranding=1&rel=0`;

function PartnerDetailsSection() {
    return (
        <section className="partner-details-section-unique">
            <div className="partner-details-content-wrapper">
                
                {/* Left Side: Live YouTube Video Player */}
                <div className="partner-video-container-unique">
                    <iframe
                        className="partner-youtube-iframe-unique"
                        src={YOUTUBE_EMBED_URL} 
                        title="Overview: BlackBull Partners"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Right Side: Text Content */}
                <div className="partner-text-content-unique">
                    <h2 className="partner-text-heading-unique">
                        Become a BlackBull Partner
                    </h2>
                    <p className="partner-text-body-unique">
                        BlackBull Partners offers a simple and effective way for introducing brokers and affiliates to grow their business. Our program provides competitive commissions, clear reporting, and reliable payouts, making it easy to track performance and maximise earnings. With access to marketing resources and dedicated support, partners can focus on reaching new clients while we handle the rest.
                    </p>
                </div>
            </div>
        </section>
    );
}

function PartnerPage() {
    return (
        <div className="partner-app-unique-container">

            {/* 1. Hero Section (Image Background) */}
            <div 
                className="partner-hero-unique-section" 
                style={{ backgroundImage: `url('/Affiliatebg.jpg')` }} 
            >
                <div className="partner-overlay-unique"></div>
                <div className="partner-content-unique partner-content-compact"> 
                    <h1 className="partner-heading-unique partner-heading-compact">
                        Partner to access uncapped commission
                    </h1>
                    <p className="partner-subheading-unique partner-subheading-compact">
                        with our affiliate or introducing broker programs
                    </p>
                    <div className="partner-buttons-unique-group partner-buttons-compact-group">
                        <div className="partner-div-button-unique partner-affiliate-button-unique partner-button-compact">
                            Affiliate Program
                        </div>
                        <div className="partner-div-button-unique partner-ib-button-unique partner-button-compact">
                            IB Program
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Partner Details Section (Video + Text) */}
            <PartnerDetailsSection />

            {/* 3. Client Choose Section */}
            <section className="client-choose-section-unique">
                <div className="client-choose-content-wrapper">
                    
                    {/* Left Column: Blue Background Text and Features */}
                    <div className="client-choose-left-column">
                        <h2 className="client-choose-heading">
                            Why clients choose BlackBull Markets?
                        </h2>
                        <p className="client-choose-paragraph">
                            Clients choose BlackBull Markets for our institutional-grade trading conditions – including spreads from 0.0 pips, leverage up to 1:500, access to over 26,000 instruments, and unrivaled execution speeds.
                        </p>
                        <p className="client-choose-paragraph client-choose-paragraph-small">
                            With no minimum deposit and client funds held in segregated accounts, we prioritise both flexibility and security.
                        </p>
                        <hr className="client-choose-divider"/>
                        
                        {/* Feature List */}
                        <div className="client-choose-features">
                            <div className="client-choose-feature-item">
                                <div className="client-choose-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm-2-4V7h2v5h-2z"/></svg>
                                </div> 
                                <div>
                                    <h3>1:500 Leverage</h3>
                                    <p>Control larger positions with less capital.</p>
                                </div>
                            </div>
                            <div className="client-choose-feature-item">
                                <div className="client-choose-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10M18 20V4M6 20v-4"/></svg>
                                </div> 
                                <div>
                                    <h3>26,000+ Instruments</h3>
                                    <p>80+ markets and 26,000+ tradable instruments.</p>
                                </div>
                            </div>
                            <div className="client-choose-feature-item">
                                <div className="client-choose-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                                </div> 
                                <div>
                                    <h3>{'< 100ms Execution'}</h3>
                                    <p>Ranked #1 for execution speed by CompareForexBrokers.com.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Column: Background Image */}
                    <div 
                        className="client-choose-right-column" 
                        style={{ backgroundImage: `url('/office.jpg')` }}
                        aria-label="Office workers trading on computers"
                    ></div>

                </div>
            </section>

            {/* Globe Section moved outside the client choose section */}
            <section className='lmax-section'>
            <div className='globediv'>
                <div className="lmax-container">
                    
                    {/* Left: Image */}
                    <div className="lmax-image-wrapper">
                        <img src="/globe.jpg" alt="LMAX Group" className="lmax-image" />
                    </div>

                    {/* Right: Text */}
                    <div className="lmax-text-wrapper">
                        <h2>LMAX Powering Institutional Conditions</h2>
                        <p>
                            BlackBull Markets has partnered with LMAX Group to deliver a market-leading institutional trading solution.
                        </p>
                        <p>
                            Through this strategic partnership, clients can access LMAX Group’s exclusive liquidity pools across forex, gold, silver, stocks, indices, commodities, and crypto CFDs.
                        </p>
                    </div>

                </div>
            </div>
            </section>
            {/* 4. Why Promote BlackBull Section */}
{/* 4. Why Promote BlackBull Section */}
<section className="why-promote-section">
  <h2 className="why-promote-heading">Why Promote BlackBull?</h2>
  <div className="why-promote-grid">

    <div className="why-promote-card">
      <div className="why-promote-icon">
        <FaInfinity />
      </div>
      <h3>No Limits</h3>
      <p>CPA up to US$1,000 per client with unlimited earning potential.</p>
    </div>

    <div className="why-promote-card">
      <div className="why-promote-icon">
        <FaTrophy />
      </div>
      <h3>Rebates</h3>
      <p>Unlimited, highly competitive, volume-based rebate structure.</p>
    </div>

    <div className="why-promote-card">
      <div className="why-promote-icon">
        <FaBolt />
      </div>
      <h3>Fast Payouts</h3>
      <p>Reliable commission payouts, on time, every time.</p>
    </div>

    <div className="why-promote-card">
      <div className="why-promote-icon">
        <FaLifeRing />
      </div>
      <h3>24/7 Support</h3>
      <p>Dedicated managers offering around-the-clock support.</p>
    </div>

    <div className="why-promote-card">
      <div className="why-promote-icon">
        <FaChartLine />
      </div>
      <h3>Commission Tracking</h3>
      <p>Advanced cookie tracking and web reporting.</p>
    </div>

    <div className="why-promote-card">
      <div className="why-promote-icon">
        <FaBullhorn />
      </div>
      <h3>Marketing Resources</h3>
      <p>Marketing resources and multilingual promotional assets.</p>
    </div>
     <div className="why-promote-card">
      <div className="why-promote-icon">
        <FaBullhorn />
      </div>
      <h3>Marketing Resources</h3>
      <p>Marketing resources and multilingual promotional assets.</p>
    </div>
    
    <div className="why-promote-card">
      <div className="why-promote-icon">
        <FaChartLine />
      </div>
      <h3>Commission Tracking</h3>
      <p>Advanced cookie tracking and web reporting.</p>
    </div>

  </div>
</section>
{/* 5. Marketing Affiliates Section */}
<section className="marketing-affiliates-section">
  <div className="marketing-affiliates-container">

    {/* Left Blue Card */}
    <div className="marketing-card">
      <h2>Marketing Affiliates</h2>
      <p>
        Digital marketers who use websites, blogs, forums, or advertising to drive 
        paid or organic traffic to BlackBull Markets.
      </p>

      <hr />

      <ul className="marketing-features">
        <li>✔ Earning up to: <strong>$1,000 USD</strong></li>
        <li>✔ Payments: <strong>Monthly</strong></li>
        <li>✔ Account Manager: <strong>Dedicated</strong></li>
        <li>✔ Remuneration: <strong>CPC/CPL/CPA</strong></li>
      </ul>

      <button className="learn-more-btn">Learn More</button>
    </div>

    {/* Right Dashboard Image */}
    <div className="marketing-dashboard">
      <img src="/affiliateg1.webp" alt="Affiliate Dashboard" />
    </div>

  </div>
</section>
<section className="marketing-affiliates-section">
  <div className="marketing-affiliates-container">

    {/* Left Blue Card */}
    <div className="marketing-card">
      <h2>Introducing Brokers</h2>
      <p>
       Experienced industry professionals who understand
the trading markets and want to grow their network
by referring clients to BlackBull Markets.
      </p>

      <hr />

      <ul className="marketing-features">
        <li>✔ Earning up to: <strong>$10/lot</strong></li>
        <li>✔ Payments: <strong>Monthly</strong></li>
        <li>✔ Account Manager: <strong>Dedicated</strong></li>
        <li>✔ Remuneration: <strong>CPC/CPL/CPA</strong></li>
      </ul>

      <button className="learn-more-btn">Learn More</button>
    </div>

    {/* Right Dashboard Image */}
    <div className="marketing-dashboard">
      <img src="/affiliateg2.webp" alt="Affiliate Dashboard" />
    </div>

  </div>
</section>
<section className="marketing-affiliates-section">
  <div className="marketing-affiliates-container">

    {/* Left Blue Card */}
    <div className="marketing-card">
      <h2>CopyTrade Managers</h2>
      <p>
        Digital marketers who use websites, blogs, forums, or advertising to drive 
        paid or organic traffic to BlackBull Markets.
      </p>

      <hr />

      <ul className="marketing-features">
        <li>✔ Earning up to: <strong>$1,000 USD</strong></li>
        <li>✔ Payments: <strong>Monthly</strong></li>
        <li>✔ Account Manager: <strong>Dedicated</strong></li>
        <li>✔ Remuneration: <strong>CPC/CPL/CPA</strong></li>
      </ul>

      <button className="learn-more-btn">Learn More</button>
    </div>

    {/* Right Dashboard Image */}
    <div className="marketing-dashboard">
      <img src="/affiliateg3.webp" alt="Affiliate Dashboard" />
    </div>

  </div>
</section>
<section className="bb-marketing-section">
  <h2 className="bb-marketing-heading">Marketing Tools & Resources</h2>
  <div className="bb-marketing-grid">
    
    <div className="bb-marketing-card">
      <h3>Promotional tools and materials</h3>
      <p>
        Partners get access to a range of promotional tools and assets to support
        their marketing efforts. This includes banners, landing pages, and more —
        customisable to suit your audience. Our team can also assist with creating
        co-branded content to help you promote BlackBull across your channels.{" "}
        <a href="#">Learn More</a>
      </p>
    </div>

    <div className="bb-marketing-card">
      <h3>Featured webinars</h3>
      <p>
        Partners can appear on BlackBull Markets’ webinars or invite our team to join
        theirs. It’s a simple way to share knowledge, grow your audience, and build
        trust. We help with content, promotion, and making sure everything runs
        smoothly. <a href="#">Learn More</a>
      </p>
    </div>

    <div className="bb-marketing-card">
      <h3>Events</h3>
      <p>
        We support partners in running in-person events, whether it’s a small meetup
        or a larger seminar. Our marketing team can help with planning, promotion,
        and materials to make sure your event is professional and effective.{" "}
        <a href="#">Learn More</a>
      </p>
    </div>

  </div>
</section>

<section className="bb-rating-partners-section">

  {/* Ratings Row */}
  <div className="bb-ratings-row">
    <div className="bb-rating-item">
      <div className="bb-stars">⭐⭐⭐⭐☆</div>
      <h3>Google</h3>
      <p>4.8 Stars | 1,202 reviews</p>
    </div>

    <div className="bb-rating-item">
      <div className="bb-stars">⭐⭐⭐⭐☆</div>
      <h3>Trustpilot</h3>
      <p>4.8 Stars | 1,372 reviews</p>
    </div>

    <div className="bb-rating-item">
      <div className="bb-stars">⭐⭐⭐⭐☆</div>
      <h3>TradingView</h3>
      <p>4.7 Stars | 3,500 reviews</p>
    </div>

    <div className="bb-rating-item">
      <div className="bb-stars">⭐⭐⭐⭐☆</div>
      <h3>ForexBrokers.com</h3>
      <p>78 Trust Score | Review</p>
    </div>
  </div>

  {/* Current Partners */}
  <h2 className="bb-partners-heading">Current Partners</h2>
  <div className="bb-partners-grid">
    <div className="bb-partner-card">
      <img src="/tradingnut.webp" alt="Trading Nut" className="bb-partner-logo" />
      <p>
        “Trading Nut has been partnered with BlackBull for the past two years and found
        the support of their market leading offering exceptional, keeping both my business
        and my clients happy.”
      </p>
    </div>

    <div className="bb-partner-card">
      <img src="/scruffy.webp" alt="The Scruffy Trader" className="bb-partner-logo" />
      <p>
        “I use BlackBull Markets because it’s one of the easiest brokers I’ve used, with seamless
        MT5 and TradingView integration that lets me trade hassle-free.”
      </p>
    </div>

    <div className="bb-partner-card">
      <img src="/traden.webp" alt="Traden.de" className="bb-partner-logo" />
      <p>
        “Working with BlackBull has been a consistently positive experience. Our BullPower
        template has proven to be an ideal match for their robust infrastructure and offerings.
        We greatly appreciate the professionalism and partnership.”
      </p>
    </div>
  </div>
</section>




        </div>
    );
}

export default PartnerPage;
