import React from "react";
import "./AffiliateOverview.css";
import { 
  FaInfinity, FaTrophy, FaGlobe, FaBullseye, FaBolt, FaHeadset,
  FaLightbulb, FaImage, FaLaptop, FaChalkboardTeacher, FaComments, FaChartBar
} from "react-icons/fa";

const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ";
const YOUTUBE_EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?controls=1&modestbranding=1&rel=0`;

function AffiliateOverview() {
  return (
    <>
      <section
        className="affiliate-hero-section"
        style={{ backgroundImage: "url('/office.jpg')" }}
      >
        <div className="affiliate-overlay"></div>

        <div className="affiliate-hero-content">
          <h1 className="affiliate-heading">Affiliate Overview</h1>
          <p className="affiliate-subheading">Earn up to US$1,000 CPA</p>

          <div className="affiliate-form">
            <input
              type="email"
              placeholder="Email address"
              className="affiliate-input"
            />
            <button className="affiliate-button">Partner Now</button>
          </div>
        </div>
      </section>

      <section className="partner-details-section-unique">
        <div className="partner-details-content-wrapper">
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

          <div className="partner-text-content-unique">
            <h2 className="partner-text-heading-unique">
              Become a BlackBull Partner
            </h2>
            <p className="partner-text-body-unique">
              BlackBull Partners offers a simple and effective way for
              introducing brokers and affiliates to grow their business. Our
              program provides competitive commissions, clear reporting, and
              reliable payouts, making it easy to track performance and maximise
              earnings. With access to marketing resources and dedicated
              support, partners can focus on reaching new clients while we
              handle the rest.
            </p>
          </div>
        </div>
      </section>

      {/* Affiliates Program Benefits */}
      <section className="affiliate-benefits-section">
        <div className="aff_card">
          <div className="aff_card1">
            <div className="benefit_head">
              <h1 className="benefit_heading">Affiliates Program Benefits</h1>
              <p className="benefit_para">
                Our affiliate program gives you everything you need to grow and scale. Partners gain access to real-time tracking tools, multilingual marketing assets, and consistent commission payouts. Focus on growing your traffic—we’ll handle the rest.
              </p>
            </div>
          </div>

          <div className="benefit_maindiv">
            <div className="benefit-card">
              <div className="benefit-icon"><FaInfinity /></div>
              <h3>No Limits</h3>
              <p>Unlimited referrals and commissions.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon"><FaTrophy /></div>
              <h3>CPAs</h3>
              <p>Volume-based CPA rebate structure.</p>
            </div>
          </div>
        </div>

        <div className="aff_cards">
          <div className="benefit-card1">
            <div className="benefit-icon"><FaBolt /></div>
            <h3>Commission Payout</h3>
            <p>Fast and reliable payments on time, every time.</p>
          </div>

          <div className="benefit-card1">
            <div className="benefit-icon"><FaHeadset /></div>
            <h3>24/7 Support</h3>
            <p>Dedicated IB managers offering around-support.</p>
          </div>

          <div className="benefit-card1">
            <div className="benefit-icon"><FaGlobe /></div>
            <h3>Marketing Resources</h3>
            <p>Marketing resources and multilingual assets.</p>
          </div>

          <div className="benefit-card1">
            <div className="benefit-icon"><FaBullseye /></div>
            <h3>Commission Tracking</h3>
            <p>Advanced cookie tracking and web reporting.</p>
          </div>
        </div>
      </section>

      {/* Who Should Join */}
      <section className="who-section">
        <div className="who-container">
          <div className="who-left">
            <h2 className="who-heading">Who Should Join?</h2>
            <p className="who-subtext">
              Our affiliate program is designed for affiliates looking to monetise their traffic and maximize earnings.
            </p>
            <p className="who-subtext">
              Whether you’re a digital marketer, content creator, trading educator, or run a financial website, our program provides the resources and opportunities to grow your revenue.
            </p>
            <img
              src="/who-join.webp"
              alt="Who should join"
              className="who-image"
            />
          </div>

          <div className="who-right">
            <div className="who-card">
              <div className="who-icon"><FaLightbulb /></div>
              <h3>Digital Marketers</h3>
            </div>

            <div className="who-card">
              <div className="who-icon"><FaImage /></div>
              <h3>Content Creators</h3>
            </div>

            <div className="who-card">
              <div className="who-icon"><FaLaptop /></div>
              <h3>Website Owners</h3>
            </div>

            <div className="who-card">
              <div className="who-icon"><FaChalkboardTeacher /></div>
              <h3>Trading Educator</h3>
            </div>

            <div className="who-card">
              <div className="who-icon"><FaComments /></div>
              <h3>Forum Managers</h3>
            </div>

            <div className="who-card">
              <div className="who-icon"><FaChartBar /></div>
              <h3>Forex and CFD Analysts</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="cpa-section">
  <div className="cpa-container">
    <h2 className="cpa-heading">CPA Structures Overview</h2>
    <p className="cpa-subtext">
      Our affiliate payment structure is designed with our partners in mind.
      We’ve made it easy to understand, so you can keep track of how you’re
      performing and simply focus on growing your business,{" "}
      <a href="#">view more.</a>
    </p>

    <div className="cpa-table">
      {/* Table Header */}
      <div className="cpa-row cpa-header">
        <div className="cpa-cell">Monthly Referral Amount</div>
        <div className="cpa-cell group-a">Group A</div>
        <div className="cpa-cell group-b">Group B</div>
        <div className="cpa-cell group-c">Group C</div>
        <div className="cpa-cell group-other">* Other Countries</div>
      </div>

      {/* Row 1 */}
      <div className="cpa-row">
        <div className="cpa-cell">
          <strong>1–10</strong>
          <p>(Monthly Qualified Accounts)</p>
        </div>
        <div className="cpa-cell">$500<br />CPA Commissions</div>
        <div className="cpa-cell">$375<br />CPA Commissions</div>
        <div className="cpa-cell">$250<br />CPA Commissions</div>
        <div className="cpa-cell">$125<br />CPA Commissions</div>
      </div>

      {/* Row 2 */}
      <div className="cpa-row">
        <div className="cpa-cell">
          <strong>11–25</strong>
          <p className="bonus">+10% Bonus*</p>
          <p>(Monthly Qualified Accounts)</p>
        </div>
        <div className="cpa-cell">
          $500<br />CPA Commissions<br />
          <span className="bonus">+ $50 Bonus*</span>
        </div>
        <div className="cpa-cell">
          $375<br />CPA Commissions<br />
          <span className="bonus">+ $37.5 Bonus*</span>
        </div>
        <div className="cpa-cell">
          $250<br />CPA Commissions<br />
          <span className="bonus">+ $25 Bonus*</span>
        </div>
        <div className="cpa-cell">
          $125<br />CPA Commissions<br />
          <span className="bonus">+ $12.5 Bonus*</span>
        </div>
      </div>

      {/* Row 3 */}
      <div className="cpa-row">
        <div className="cpa-cell">
          <strong>26–50</strong>
          <p className="bonus">+25% Bonus*</p>
          <p>(Monthly Qualified Accounts)</p>
        </div>
        <div className="cpa-cell">
          $500<br />CPA Commissions<br />
          <span className="bonus">+ $125 Bonus*</span>
        </div>
        <div className="cpa-cell">
          $375<br />CPA Commissions<br />
          <span className="bonus">+ $93.75 Bonus*</span>
        </div>
        <div className="cpa-cell">
          $250<br />CPA Commissions<br />
          <span className="bonus">+ $62.5 Bonus*</span>
        </div>
        <div className="cpa-cell">
          $125<br />CPA Commissions<br />
          <span className="bonus">+ $31.25 Bonus*</span>
        </div>
      </div>

      {/* Row 4 */}
      <div className="cpa-row">
        <div className="cpa-cell">
          <strong>51–100</strong>
          <p className="bonus">+50% Bonus*</p>
          <p>(Monthly Qualified Accounts)</p>
        </div>
        <div className="cpa-cell">
          $500<br />CPA Commissions<br />
          <span className="bonus">+ $250 Bonus*</span>
        </div>
        <div className="cpa-cell">
          $375<br />CPA Commissions<br />
          <span className="bonus">+ $187.5 Bonus*</span>
        </div>
        <div className="cpa-cell">
          $250<br />CPA Commissions<br />
          <span className="bonus">+ $125 Bonus*</span>
        </div>
        <div className="cpa-cell">
          $125<br />CPA Commissions<br />
          <span className="bonus">+ $62.25 Bonus*</span>
        </div>
      </div>

      {/* Row 5 */}
      <div className="cpa-row">
        <div className="cpa-cell">
          <strong>100+</strong>
          <p className="bonus">+100% Bonus*</p>
          <p>(Monthly Qualified Accounts)</p>
        </div>
        <div className="cpa-cell">
          $500<br />CPA Commissions<br />
          <span className="bonus">+ $500 Bonus*</span>
        </div>
        <div className="cpa-cell">
          $375<br />CPA Commissions<br />
          <span className="bonus">+ $375 Bonus*</span>
        </div>
        <div className="cpa-cell">
          $250<br />CPA Commissions<br />
          <span className="bonus">+ $250 Bonus*</span>
        </div>
        <div className="cpa-cell">
          $125<br />CPA Commissions<br />
          <span className="bonus">+ $125 Bonus*</span>
        </div>
      </div>

    </div>
  </div>
  
<div className="paragraphsec">
  <p><span className="group-label">Group A:</span> Australia, Denmark, France, Germany, Hong Kong, Hungary, Ireland, New Zealand, Norway, Sweden, Switzerland, United Kingdom.</p>
  <p><span className="group-label">Group B:</span> Belgium, Cayman Islands, Estonia, Iceland, Jamaica, Kazakhstan, Kuwait, Lithuania, Luxembourg, Mexico, New Caledonia, Portugal, Romania, Singapore, Taiwan.</p>
  <p><span className="group-label">Group C:</span> Argentina, Austria, Belize, Brazil, Colombia, Croatia, Cyprus, China, Czech Republic, Dominican Republic, Ecuador, Egypt, Finland, French Polynesia, Greece, Israel, Italy, Jordan, Morocco, Namibia, Netherlands, Oman, Peru, Qatar, Saudi Arabia, Seychelles, Slovakia, Slovenia, South Africa, South Korea, Spain, Thailand, Tonga, United Arab Emirates.</p>
  <p><span className="group-label">Group D:</span> Other countries excluding Restricted Countries*</p>
</div>


</section>
<section className="bluediv">
  <div className="image_layout_main">
    <div className="blue_div">
      <h1 className="blue_heading">BlackBull Partner Tiers</h1>
     <p className="blue_para">
  BlackBull operates a transparent and rewarding partner tiers structure designed to incentivise long-term growth and recognise top-performing affiliates. As partners achieve higher monthly performance milestones, they unlock increased CPA rates and exclusive perks, ensuring that consistent effort and results are well-compensated.{" "}
  <a href="/learn-more" className="learn_more_link">Learn more</a>.
</p>

    </div>
    <div
      className="blue_image"
      style={{ backgroundImage: "url('/blue.jpg')" }}
    ></div>
  </div>

   <div className="image_layout_main1">
    <div className="blue_div1">
      <h1 className="blue_heading">BlackBull 
Multi-Step CPA</h1>
     <p className="blue_para">
  BlackBull Partners offers an industry-leading payment structure to reward our valued partners for their hard work on a cost per acquisition for every new client they refer. High performing affiliates will have access to a BlackBull Partners Multi-Step.{" "}
  <a href="/learn-more" className="learn_more_link">Learn more</a>.
</p>

    </div>
    <div
      className="blue_image1"
      style={{ backgroundImage: "url('/blue1.jpg')" }}
    ></div>
  </div>

  <div className="image_layout_main2">
    <div className="blue_div2">
      <h1 className="blue_heading">Sub-Affiliates</h1>
     <p className="blue_para">
  BlackBull offers a competitive sub-affiliate program that rewards master affiliates with 10% of the earnings generated by their referred partners. This structure empowers affiliates to grow their own network and benefit from long-term, passive income opportunities.{" "}
  <a href="/learn-more" className="learn_more_link">Learn more</a>.
</p>

    </div>
    <div
      className="blue_image1"
      style={{ backgroundImage: "url('/blue2.jpg')" }}
    ></div>
  </div>
</section>

<section className="final-cta-section">
  <div className="final_cta_div">
    <h1 className="final_cta_heading">Marketing Tools</h1>

    <div className="final_div_cta">
      <div className="final_div_cta1">
        <h2 className="h2_head">Example Review</h2>
        <p className="para_div_cta">
          BlackBull offers a competitive sub-affiliate program that rewards
          master affiliates with 10% of the earnings generated by their referred partners.
        </p>
      </div>

      <div className="final_div_cta1">
        <h2 className="h2_head">Landing Page</h2>
        <p className="para_div_cta">
          BlackBull offers a competitive sub-affiliate program that rewards
          master affiliates with 10% of the earnings generated by their referred partners.
        </p>
      </div>

      <div className="final_div_cta1">
        <h2 className="h2_head">Widget Library</h2>
        <p className="para_div_cta">
          BlackBull offers a competitive sub-affiliate program that rewards
          master affiliates with 10% of the earnings generated by their referred partners.
        </p>
      </div>
    </div>
  </div>
</section>



    </>
  );
}

export default AffiliateOverview;
