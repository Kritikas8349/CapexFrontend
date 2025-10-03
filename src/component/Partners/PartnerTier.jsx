import React from "react";
import "./PartnerTier.css";

const Partnertier = () => {
  return (
    <div className="partnertier-container">
      {/* Hero Section */}
      <div
        className="cpa-hero"
        style={{ backgroundImage: "url('/12.jpg')" }} // replace with your image path
      >
        <div className="cpa-overlay">
          <div className="cpa-breadcrumb">
            HOME &gt; AFFILIATES &gt; CPA STRUCTURES &gt; <b>PARTNER TIER</b>
          </div>
          <h1 className="cpa-title">PARTNER TIER</h1>
        </div>
      </div>

      {/* Info Section */}
      <div className="cpa-info">
        <div className="cpa-info-left">
          <h2>
            PARTNER <br />TIER
          </h2>
        </div>
        <div className="cpa-info-right">
          <p>
            Our affiliate payment structure is designed with our partners in
            mind. We’ve made it easy to understand, so you can keep track of how
            you’re performing and simply focus on growing your business. You can
            find the same details in the affiliate tracking platform when you
            log in.
          </p>
        </div>
      </div>

      <section className="partners-section">
      <div className="partners-container">
        {/* Left Image */}
        <div className="partners-image">
          <img src="/12.jpg" alt="BlackBull Partners" />
        </div>

        {/* Right Content */}
        <div className="partners-content">
          <h2>Join Blackbull Partners Today!</h2>
          <p>
            For a lot of our partners, this is something that they work towards
            as their business continues to grow and we are here to support you
            on that journey.
          </p>
          <p>
            If you have any questions, concerns, or proposals, we’d be happy to
            chat about how we can do business with you.
          </p>

          <div className="partners-badge">
            <span role="img" aria-label="money">
              💰
            </span>
            With BlackBull Partners, you can earn up to USD $1,000 per Qualified
            Referral.
          </div>

          <button className="partners-btn">JOIN BLACKBULL PARTNERS</button>
        </div>
      </div>

      {/* Table Section */}
      <div className="partners-table">
        <table>
          <thead>
            <tr>
              <th>Group</th>
              <th>Criteria</th>
              <th>CPA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BlackBull Partners</td>
              <td>
                All new account applications for BlackBull Partners are reviewed
                and approved on a case-by-case basis.
              </td>
              <td>Default</td>
            </tr>
            <tr>
              <td>BlackBull Partners Premium</td>
              <td>100 Active Clients + 10 Qualified Trader per calendar month</td>
              <td>+10%</td>
            </tr>
            <tr>
              <td>BlackBull Partners Silver</td>
              <td>
                250 Active Clients + 25 Qualified Trader per calendar month
              </td>
              <td>+25%</td>
            </tr>
             <tr>
              <td>BlackBull Partners Gold</td>
              <td>
                500 Active Clients +
50 Qualified Trader per calendar month
              </td>
              <td>+50%</td>
            </tr>
             <tr>
              <td>BlackBull Partners Diamond</td>
              <td>
                1,000 Active Clients +
100 Qualified Trader per calendar month
              </td>
              <td>+100%</td>
            </tr>
        
          </tbody>
        </table>
      </div>
    </section>
    </div>
  );
};

export default Partnertier;
