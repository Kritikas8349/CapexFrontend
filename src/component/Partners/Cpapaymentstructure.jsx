import React from "react";
import "./Cpapaymentstructure.css";
import { FaHeadset } from "react-icons/fa";
const Cpapaymentstructure = () => {
  return (
    <div className="cpa-page">
      {/* Hero Section */}
      <div
        className="cpa-hero"
        style={{ backgroundImage: "url('/12.jpg')" }} // replace with your image path
      >
        <div className="cpa-overlay">
          <div className="cpa-breadcrumb">
            HOME &gt; AFFILIATES &gt; CPA STRUCTURES &gt; <b>CPA PAYMENT STRUCTURE</b>
          </div>
          <h1 className="cpa-title">CPA Payment structure</h1>
        </div>
      </div>

      {/* Info Section */}
      <div className="cpa-info">
        <div className="cpa-info-left">
          <h2>
            CPA Payments <br /> Structure
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

      {/* Table Section */}
      <div className="cpaTable-wrapper">
        <table className="cpaTable">
          <thead>
            <tr>
              <th>Group</th>
              <th>Countries</th>
              <th>CPA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Group A</td>
              <td>
                Australia, Denmark, France, Germany, Hong Kong, Hungary, Ireland,
                New Zealand, Norway, Sweden, Switzerland, United Kingdom.
              </td>
              <td>$500</td>
            </tr>
            <tr>
              <td>Group B</td>
              <td>
                Belgium, Cayman Islands, Estonia, Iceland, Jamaica, Kazakhstan,
                Kuwait, Lithuania, Luxembourg, Mexico, New Caledonia, Portugal,
                Romania, Singapore, Taiwan.
              </td>
              <td>$375</td>
            </tr>
            <tr>
              <td>Group C</td>
              <td>
                Argentina, Austria, Belize, Brazil, Colombia, Croatia, Cyprus,
                China, Czech Republic, Dominican Republic, Ecuador, Egypt,
                Finland, French Polynesia, Greece, Israel, Italy, Jordan,
                Morocco, Namibia, Netherlands, Oman, Peru, Qatar, Saudi Arabia,
                Seychelles, Slovakia, Slovenia, South Africa, South Korea, Spain,
                Thailand, Tonga, United Arab Emirates.
              </td>
              <td>$250</td>
            </tr>

             <tr>
              <td>Group D</td>
              <td>
                Other countries excluding Restricted Countries*
              </td>
              <td>$150</td>
            </tr>
          </tbody>
        </table>
      </div>
      <section className="client-support">
      {/* Left Content */}
      <div className="support-left">
        <h2>
          Our Award-Winning Business Takes Pride In The Exceptional Sales And
          Support We Offer To All Of Our New Clients
        </h2>
        <p>
          Our focus is on ensuring the highest conversion rate for your leads to
          provide you with the best return on investment and in turn, a higher
          effective CPA than other brokers are able to offer.
        </p>
        <p>
          As a global broker, we understand that client trading activity varies
          from region to region, so we’ve grouped payments for referrals of
          clients based on country of origin. Please see the commission table
          above for a fully transparent overview of the amounts you can earn per
          qualified client.
        </p>
      </div>

      {/* Right Card */}
      <div className="support-card">
        <div className="icon-circle">
          <FaHeadset />
        </div>
        <p>
          Please get in touch with our team if you’d like to discuss a custom
          payout structure to fit your business or the region you operate in.
        </p>
        <button className="cta-btn">GET IN TOUCH</button>
      </div>
    </section>
    </div>
  );
};

export default Cpapaymentstructure;
