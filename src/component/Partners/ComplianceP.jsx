import React from "react";
import "./ComplianceP.css"; // ✅ new CSS file for ComplianceP

function ComplianceP() {
  return (
    <div className="compliancenew-main-container1">
    <div className="compliancenew-hero-container">
      <img
        src="/Office1.jpg"
        alt="Platform Support"
        className="compliancenew-hero-image"
      />

      <div className="compliancenew-hero-text">
        {/* Breadcrumbs */}
        <nav className="compliancenew-breadcrumbs">
          <span className="compliancenew-breadcrumb-item">Home</span>
          <span className="compliancenew-breadcrumb-separator">{">"}</span>
          <span className="compliancenew-breadcrumb-item">About</span>
          <span className="compliancenew-breadcrumb-separator">{">"}</span>
          <span className="compliancenew-breadcrumb-item">Legal Hub</span>
          <span className="compliancenew-breadcrumb-separator">{">"}</span>
          <span className="compliancenew-breadcrumb-item-current">Compliance</span>
        </nav>

        <h1 className="compliancenew-hero-heading">
          Compliance
        </h1>
      </div>
      </div>

      <div className="compliancenew-info-container">
  {/* Left: Heading */}
  <div className="compliancenew-info-left">
    <h2 className="compliancenew-info-heading">
      Market.trad Partners <br /> Compliance
    </h2>
  </div>

  {/* Right: Paragraph */}
  <div className="compliancenew-info-right">
    <p className="compliancenew-info-text">
    One of the key strengths of Market.trad is that we operate as a regulated financial services provider, allowing us to offer investors and traders from around the world a safe and secure trading environment. As a globally recognized and trusted brand, we are committed to maintaining the highest standards of operational integrity. It is essential that the use of our brand remains fully aligned with regulatory requirements and that all partners strictly adhere to our brand guidelines.
    </p>
  </div>
</div>

<div className="guidelines-container">
  {/* Image at the top */}
  <div className="guidelines-image-wrapper">
    <img
      src="/markettrad.webp"
      alt="Market.trad Guidelines"
      className="guidelines-image"
    />
  </div>

  {/* Content */}
  <div className="guidelines-content">
    <h2 className="guidelines-heading">
      Please Ensure You Have Familiarised Yourself With Our Guidelines Before You Get Started
    </h2>

    <p className="guidelines-intro">
      Here are some of the highlights:
    </p>

    <div className="guidelines-points">
      <div className="guideline-item">
        <img src="/traffic_icon.svg" alt="check" className="guideline-icon" />
        <span>Make sure the information is clear and accurate for the relevant jurisdiction.</span>
      </div>

      <div className="guideline-item">
        <img src="/traffic_icon.svg" alt="check" className="guideline-icon" />
        <span>Do not make false promises.</span>
      </div>

      <div className="guideline-item">
        <img src="/traffic_icon.svg" alt="check" className="guideline-icon" />
        <span>Do not make misleading statements.</span>
      </div>

      <div className="guideline-item">
        <img src="/traffic_icon.svg" alt="check" className="guideline-icon" />
        <span>Use relevant disclaimers where necessary.</span>
      </div>

      <div className="guideline-item">
        <img src="/traffic_icon.svg" alt="check" className="guideline-icon" />
        <span>Use our marketing materials and if you have to create your own, please submit them to your account manager for approval.</span>
      </div>

      <div className="guideline-item">
        <img src="/traffic_icon.svg" alt="check" className="guideline-icon" />
        <span>Do not use Market.trad in your domain name.</span>
      </div>

      <div className="guideline-item">
        <img src="/traffic_icon.svg" alt="check" className="guideline-icon" />
        <span>Do not promote Market.trad in restricted territories.</span>
      </div>

      <div className="guideline-item">
        <img src="/traffic_icon.svg" alt="check" className="guideline-icon" />
        <span>
          For PPC/media buying: Link your ad to your domain, not directly to Market.trad. Do not use the Market.trad brand name or any variation of it in your keywords or in the ad itself (including the display URL).
        </span>
      </div>

      <div className="guideline-item">
        <img src="/traffic_icon.svg" alt="check" className="guideline-icon" />
        <span>Be prepared to update your campaign when we request it. We perform regular checks and may require further changes following regulatory updates.</span>
      </div>
    </div>
  </div>
</div>

<div className="compliance-topics-container">
  <div className="compliance-card">
    <img src="/ad.svg" alt="Advertising" className="compliance-card-image" />
    <h3 className="compliance-card-title">Advertising</h3>
    <p className="compliance-card-text">
      Avoid using the Market.trad brand in any SEM or PPC campaigns. Do not include the brand name or variations of it in keywords, ad copy, or display URLs.
    </p>
  </div>

  <div className="compliance-card">
    <img src="/mail.svg" alt="Email Marketing" className="compliance-card-image" />
    <h3 className="compliance-card-title">Email</h3>
    <p className="compliance-card-text">
      Partners running email campaigns must comply with applicable spam and privacy laws. All emails should follow proper consent and disclosure practices.
    </p>
  </div>

  <div className="compliance-card">
    <img src="/Domain.svg" alt="Domain Ownership" className="compliance-card-image" />
    <h3 className="compliance-card-title">Domain Ownership</h3>
    <p className="compliance-card-text">
      If your website uses private Whois data, you may need to verify ownership. Provide a domain ownership certificate to your account manager if requested.
    </p>
  </div>

  <div className="compliance-card">
    <img src="/RestrictedIndustries.svg" alt="Restricted Industries" className="compliance-card-image" />
    <h3 className="compliance-card-title">Restricted Industries</h3>
    <p className="compliance-card-text">
      Certain industries are unsuitable for promoting our brand. Ensure your marketing efforts target only appropriate sectors to maintain Market.trad’s brand integrity.
    </p>
  </div>
</div>




    </div>
  );
}

export default ComplianceP;
