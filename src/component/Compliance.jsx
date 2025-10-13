import React from "react";
import './Compliance.css';

const ComplianceSection = () => {
  return (
    <div className="compliance-container">

      {/* ================= Image Container with Heading ================= */}
      <div className="compliance-image-container">
        <img 
          src="/Office1.jpg" 
          alt="Compliance" 
          className="compliance-image" 
        />
        <h1 className="compliance-heading">Compliance</h1>
      </div>

      {/* ================= MT Compliance Content ================= */}
      <div className="mt-compliance-container">
        <h1 className="mt-compliance-heading">Compliance</h1> 

        <div className="mt-compliance-text">
          <p>
            <strong>Market.trad</strong> operates as a registered financial services
            company under international business regulations. Our entity is
            incorporated with a valid company registration number and maintains its
            principal office at our designated headquarters. The company is duly
            authorized by the relevant Financial Services Authority (FSA) under
            license number <strong>[Insert License Number]</strong>, enabling us to
            provide regulated investment and brokerage services.
          </p>

          <p>
            In line with global standards, we enforce a comprehensive{" "}
            <strong>Anti-Money Laundering (AML)</strong> and{" "}
            <strong>Counter Financing of Terrorism (CFT)</strong> framework. These
            measures safeguard our operations and ensure that every transaction is
            carried out with integrity and transparency.
          </p>

          <p>
            At <strong>Market.trad</strong>, we are committed to maintaining strong
            compliance practices to strengthen trust with our clients. We believe
            that responsible conduct is essential in creating a secure and
            transparent trading environment.
          </p>

          <p>
            Our corporate culture is built on high ethical values and professional
            standards. Through a well-structured supervisory framework, we actively
            monitor business activities to protect traders and ensure all services
            meet regulatory and industry best practices.
          </p>
        </div>

        {/* Grey Boxes Section */}
        <div className="mt-compliance-boxes">
          <div className="mt-compliance-box">
            <h2>AML/CFT Compliance Framework</h2>
            <p>
            As a licensed financial services provider, Market.trad fully complies with AML/CFT regulations. Our operations are governed by Seychelles AML/CFT laws, and our internal policies are designed to meet and exceed these standards.

            To ensure consistent compliance, we perform regular AML/CFT audits through independent firms and provide continuous professional training to our staff. This guarantees that all employees are equipped to implement effective practices. Client transactions are monitored at all times to maintain a robust AML/CFT system.
            </p>
          </div>

          <div className="mt-compliance-box">
            <h2>Data Privacy & Protection</h2>
            <p>
            At Market.trad, protecting your personal data is a top priority. We strictly follow our Privacy Policy and all relevant legal obligations. Client information is never sold or shared with third parties outside the terms of our policy.

            We also apply advanced technical and organizational safeguards to protect your personal data. Our commitment is to ensure the confidentiality, integrity, and security of every client’s information.
            </p>
          </div>

          <div className="mt-compliance-box">
            <h2>AI Assistance Disclaimer</h2>
            <p>
            Our AI-based support system is designed to provide general guidance about Market.trad services. While we aim to provide accurate and helpful responses, the information may not always be completely up-to-date or precise. Users should verify all details before making financial decisions. For account-specific guidance, please reach out to our support team. By using this system, you acknowledge that Market.trad is not responsible for any losses or damages resulting from AI-provided information.
            </p>
          </div>
        </div>
        <br />
          <p>If you have any questions regarding our Compliance policies or procedures, please feel free to reach out to the Market.trad support team. We are always happy to provide clarification and assist you with any inquiries related to our Compliance framework.</p>
      
      </div>

    </div>
  );
};

export default ComplianceSection;
