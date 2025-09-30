import React from 'react';
import {
FiTrendingUp,   
FiZap,
FiLifeBuoy,
FiTarget,
FiMousePointer,
} from "react-icons/fi";

import { FaTrophy } from 'react-icons/fa';
import "./PartnerHome.css"

const PartnerHome = () => {
const features = [
{
    icon: <FiTrendingUp />,
    title: "Unlimited Earnings",
    desc: "Earn CPA commissions up to $1,000 per client with no cap on growth.",
},
{
    icon: <FiZap />,
    title: "Lightning-Fast Payments",
    desc: "Get your commissions quickly and reliably, every single time.",
},
{
    icon: <FaTrophy />,
    title: "Exclusive Rewards",
    desc: "Achieve top results and unlock special bonuses and recognition.",
},
{
    icon: <FiLifeBuoy />,
    title: "24/7 Assistance",
    desc: "Dedicated affiliate managers available anytime you need help.",
},
{
    icon: <FiTarget />,
    title: "Smart Tracking",
    desc: "Accurate cookie tracking and detailed performance reporting tools.",
},
{
    icon: <FiMousePointer />,
    title: "Powerful Marketing Tools",
    desc: "Access a library of multilingual creatives and promotional materials.",
},
];

const ratingsData = [
    { starsImg: "stars.webp", logoImg: "Google.webp", text: "4.8 Stars | 1,202 reviews" },
    { starsImg: "stars.webp", logoImg: "Trustpilot.webp", text: "4.8 Stars | 1,372 reviews" },
    { starsImg: "stars.webp", logoImg: "TradingView.webp", text: "4.7 Stars | 3,500 reviews" },
    { starsImg: "stars.webp", logoImg: "ForexBrokers.webp", text: "78 Trust Score | Reviews" },
  ];


return (
<div className="partner-home-container">

{/* Hero Section */}
<div className="partner-home-image-container">
<img
    src="Office1.jpg"
    alt="Platform Support"
    className="partner-home-image"
/>

<div className="partner-home-text">
    <h1 className="partner-home-heading">
    Unlock unlimited commission potential as a partner
    </h1>
    <p className="partner-home-subtext">
    through our Affiliate or Introducing Broker programs.
    </p>
    <div className="partner-home-buttons">
    <button className="partner-home-btn">Affiliate Program</button>
    <button className="partner-home-btn">IB Program</button>
    </div>
</div>
</div>


{/* Account Types Section */}
<section className="partner-home-account-section">
<div className="partner-home-account-content">
    <h1>Become a Market.trad Affiliate</h1>
    <p className="partner-home-desc">
    Market.Trad Partners: A Smarter Way to Grow Your Affiliate or IB Business
    <br /><br />
    Market.Trad Partners offers a straightforward and effective solution for affiliates and introducing brokers looking to expand their business. Our program features competitive commission structures, transparent reporting, and dependable payouts, making it easy to monitor your performance and maximise your earnings. With access to professional marketing resources and dedicated partner support, you can focus on acquiring new clients—while we take care of the rest.
    </p>
</div>

<div className="partner-home-account-video">
    <video controls>
    <source src="" type="video/mp4" />
    Your browser does not support the video tag.
    </video>
</div>
</section>

{/* Features Section 1 */}
<div className="ph-container-reverse">
<div className="ph-image-container-reverse">
    <img
    src="office3.avif"
    alt="Person working at multiple monitors"
    className="ph-image-reverse"
    />
</div>

<div className="ph-content-reverse">
    <h2 className="ph-title-reverse">Why ChooseMarket.trad Markets?</h2>
    <p className="ph-paragraph-reverse">
    Traders preferMarket.trad Markets for our top-tier trading conditions — offering spreads starting at 0.0 pips, leverage up to 1:500, access to over 26,000 tradable instruments, and lightning-fast execution.
    </p>
    <p className="ph-paragraph-reverse">
    We require no minimum deposit and keep client funds securely segregated, ensuring both flexibility and safety.
    </p>
    <div className="ph-divider-reverse"></div>

    <div className="ph-feature-reverse">
    <div className="ph-feature-icon-reverse" aria-label="User Icon">👤</div>
    <div className="ph-feature-content-reverse">
        <div className="ph-feature-title-reverse">Leverage up to 1:500</div>
        <div className="ph-feature-desc-reverse">Trade larger volumes with smaller capital.</div>
    </div>
    </div>

    <div className="ph-feature-reverse">
    <div className="ph-feature-icon-reverse" aria-label="Globe Icon">🌐</div>
    <div className="ph-feature-content-reverse">
        <div className="ph-feature-title-reverse">26,000+ Trading Instruments</div>
        <div className="ph-feature-desc-reverse">Access a broad range of over 80 markets.</div>
    </div>
    </div>

    <div className="ph-feature-reverse">
    <div className="ph-feature-icon-reverse" aria-label="Dollar Icon">💲</div>
    <div className="ph-feature-content-reverse">
        <div className="ph-feature-title-reverse">Execution under 100ms</div>
        <div className="ph-feature-desc-reverse">Top-ranked for speed by CompareForexBrokers.com.</div>
    </div>
    </div>
</div>
</div>

{/* Features Section 2 */}
<div className="ph-container">
<div className="ph-content">
    <h2 className="ph-title">Why Choose Market.trad Markets?</h2>
    <p className="ph-paragraph">
    LMAX Empowering Institutional-Grade Trading Conditions
    <br /><br />
    Market.trad partners with LMAX Group to offer an advanced institutional trading solution.
    Through this partnership, Market.trad clients can access LMAX Group’s exclusive liquidity pools, including forex, gold, silver, stocks, indices, commodities, and crypto CFDs.
    </p>
</div>

<div className="ph-image-container">
    <img
    src="planet.avif"
    alt="Market institutional trading"
    className="ph-image"
    />
</div>
</div>

{/* Promote Features */}
<div className="promote-wrapper">
<section className="promote-section">
    <h2 className="promote-title">Why Promote Market.trad?</h2>
    <div className="promote-grid">
    {features.map((feature, idx) => (
        <div className="promote-card" key={idx}>
        <div className="promote-icon" aria-hidden="true">
            {feature.icon}
        </div>
        <h3 className="promote-card-title">{feature.title}</h3>
        <p className="promote-card-desc">{feature.desc}</p>
        </div>
    ))}
    </div>
</section>
</div>

<div className="affiliate-container">
{/* Left Image Section */}
<div className="affiliate-image-container">
<img
src="Dashboard1.webp"
alt="Affiliate Marketing"
className="affiliate-image"
/>
</div>

{/* Right Text Section */}
<div className="affiliate-content">
<h2 className="affiliate-title">Marketing Affiliates</h2>
<p className="affiliate-text">
Digital marketers who use websites, blogs, forums, or advertising to drive
paid or organic traffic to BlackBull Markets.
</p>

<p className="affiliate-text"><strong>Earning up to:</strong> $1,000 USD</p>
<p className="affiliate-text"><strong>Payments:</strong> Monthly</p>
<p className="affiliate-text"><strong>Account Manager:</strong> Dedicated</p>

<button className="affiliate-btn">Learn More</button>
</div>
</div>


<div className="affiliate-container1">
  {/* Left Image Section */}
  <div className="affiliate-image-container1">
    <img
      src="Dashboard2.webp"
      alt="Introducing Brokers"
      className="affiliate-image1"
    />
  </div>

  {/* Right Text Section */}
  <div className="broker-card">
    <h2 className="broker-card-title">Introducing Brokers</h2>
    <p className="broker-card-text">
      Experienced industry professionals who understand the trading markets and want to grow their network
      by referring clients to BlackBull Markets.
    </p>

    <p className="broker-card-text"><strong>Earning up to:</strong> $10/lot</p>
    <p className="broker-card-text"><strong>Referral tiers:</strong> 10 levels</p>
    <p className="broker-card-text"><strong>Reporting:</strong> Client level reporting</p>
    <p className="broker-card-text"><strong>Remuneration:</strong> Rebate, Markup</p>

    <button className="broker-card-btn">Learn More</button>
  </div>
</div>

<div className="copytrade-container">
  {/* Left Image Section */}
  <div className="copytrade-image-container">
    <img
      src="Dashboard3.webp"
      alt="CopyTrade Manager"
      className="copytrade-image"
    />
  </div>

  {/* Right Text Section */}
  <div className="copytrade-card">
    <h2 className="copytrade-card-title">CopyTrade Managers</h2>
    <p className="copytrade-card-text">
      Traders with a proven track record who want to share their strategies or automated trading systems with followers.
    </p>

    <p className="copytrade-card-text"><strong>Advanced risk management control</strong></p>
    <p className="copytrade-card-text"><strong>Customisable performance fees</strong></p>
    <p className="copytrade-card-text"><strong>Custom subscriber criteria</strong></p>
    <p className="copytrade-card-text"><strong>No profit limits</strong></p>

    <button className="copytrade-card-btn">Learn More</button>
  </div>
</div>



<div className="partner-resources-main">
      <div className="partner-resources-container">
        <h1 className="partner-resources-heading">Partner Resources</h1>

        <div className="partner-resources-grid">
          {/* Box 1 */}
          <div className="partner-box">
            <h2 className="partner-box-title">Promotional Tools & Materials</h2>
            <p className="partner-box-text">
              Partners have access to a variety of promotional tools and assets to enhance marketing efforts. This includes banners, landing pages, and other materials — all customizable for your audience. Our team can also help create co-branded content to promote BlackBull across your channels.{" "}
              <a href="#" className="partner-box-link">Learn More</a>
            </p>
          </div>

          {/* Box 2 */}
          <div className="partner-box">
            <h2 className="partner-box-title">Featured Webinars</h2>
            <p className="partner-box-text">
              Partners can participate in BlackBull Markets’ webinars or invite our team to join theirs. It’s an easy way to share knowledge, grow your audience, and build trust. We assist with content, promotion, and smooth execution.{" "}
              <a href="#" className="partner-box-link">Learn More</a>
            </p>
          </div>

          {/* Box 3 */}
          <div className="partner-box">
            <h2 className="partner-box-title">Events</h2>
            <p className="partner-box-text">
              We support partners in organizing in-person events, from small meetups to large seminars. Our marketing team helps with planning, promotion, and materials to ensure every event is professional and effective.{" "}
              <a href="#" className="partner-box-link">Learn More</a>
            </p>
          </div>
        </div>
      </div>
    </div>



    <div className="ratings-section">
      {ratingsData.map((item, index) => (
        <div className="rating-card" key={index}>
          <img src={item.starsImg} alt="Stars" className="rating-stars" />
          <img src={item.logoImg} alt="Company Logo" className="rating-logo" />
          <p className="rating-text">{item.text}</p>
        </div>
      ))}
    </div>
     

    <div className="partner-resources-main-new">
  <div className="partner-resources-container-new">
    <h1 className="partner-resources-heading-new">Current Partners</h1>

    <div className="partner-resources-grid-new">
      {/* Box 1 */}
      <div className="partner-box-new">
        <img src="tradenut.webp" alt="Partner Logo 1" className="partner-box-logo" />
        <p className="partner-box-text-new">
          “Trading Nut has been collaborating with Market.trad for over two years. Their top-tier support and market-leading services have helped both my business and clients thrive.”{" "}
        </p>
      </div>

      {/* Box 2 */}
      <div className="partner-box-new">
        <img src="thetrade.webp" alt="Partner Logo 2" className="partner-box-logo" />
        <p className="partner-box-text-new">
          “I choose Market.trad Markets because it’s one of the simplest brokers to use. With smooth MT5 and TradingView integration, I can trade efficiently without any hassle.”{" "}
        </p>
      </div>

      {/* Box 3 */}
      <div className="partner-box-new">
        <img src="tradeen.webp" alt="Partner Logo 3" className="partner-box-logo" />
        <p className="partner-box-text-new">
          “Partnering with Market.trad has consistently been a positive experience. Our BullPower template fits perfectly with their strong infrastructure, and we truly value the professionalism and collaboration.”{" "}
        </p>
      </div>
    </div>
  </div>
</div>

</div>
);
};

export default PartnerHome;
