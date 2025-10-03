import React from "react";
import './ContactSupport.css'; // Make sure to create this CSS file

const ContactSupport = () => {
  return (
    <div className="reachout">
      <div className="reachout-container">
        <img 
          src="/public/PlatformSupport.jpg" 
          alt="Market Support" 
          className="reachout-img" 
        />

        {/* Text Content */}
        <div className="reachout-textbox">
          <h1 className="reachout-title">Contact Us</h1>
          <p className="reachout-description">
            Our team are here to support 24/7 via Live Chat, Phone, Email, or WhatsApp.
          </p>
        </div>
      </div>

      {/* Contact Unique Section */}
      <div className="contact-section-unique">

        <div className="contact-card-unique">
          <img 
            src="https://img.icons8.com/ios-filled/100/0073e6/new-post.png" 
            alt="Email Icon" 
            className="icon-unique"
          />
          <h3 className="title-unique">Email us</h3>
          <p className="text-unique">
            Email our support team for general queries or platform assistance.
          </p>
          <a href="mailto:support@blackbull.com" className="link-unique">
            support@blackbull.com
          </a>
        </div>

        <div className="contact-card-unique">
          <img 
            src="https://img.icons8.com/ios-filled/100/0073e6/phone-office.png" 
            alt="Call Icon" 
            className="icon-unique"
          />
          <h3 className="title-unique">Call us</h3>
          <p className="text-unique">
            Call us and speak to a member of our team.<br/>We are always happy to help.
          </p>
          <a href="tel:+6495585142" className="link-unique">
            +64 9 558 5142
          </a>
        </div>

        <div className="contact-card-unique">
          <img 
            src="https://img.icons8.com/ios-filled/100/0073e6/chat.png" 
            alt="Chat Icon" 
            className="icon-unique"
          />
          <h3 className="title-unique">Live Chat</h3>
          <p className="text-unique">
            Get in touch with our team members over<br/>Live Chat 24/7.
          </p>
          <a href="#" className="btn-unique">Live Chat</a>
        </div>

        <div className="contact-card-unique">
          <img 
            src="https://img.icons8.com/ios-filled/100/0073e6/whatsapp.png" 
            alt="WhatsApp Icon" 
            className="icon-unique"
          />
          <h3 className="title-unique">WhatsApp</h3>
          <p className="text-unique">
            Get in touch with our team members over<br/>WhatsApp.
          </p>
          <a href="#" className="btn-unique">WhatsApp</a>
        </div>

      </div>

      {/* General Inquiries Section */}
      <div className="enquiry-container">
        <div className="enquiry-left">
          <h2 className="enquiry-title">General Inquiries</h2>
          <p className="enquiry-text">
            For general inquiries or assistance, please contact our customer support team.
          </p>
          <form className="enquiry-form">
            <input type="text" placeholder="First Name*" required />
            <input type="text" placeholder="Last Name*" required />
            <input type="email" placeholder="Email*" required />
            <input type="tel" placeholder="Phone*" required />
            <input type="text" placeholder="Country" />
            <input type="text" placeholder="Department" />
            <textarea placeholder="How can we help?"></textarea>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
        <div className="enquiry-right">
          <h2 className="support-title">Support</h2>
          <p className="support-text">Helpful resources, FAQs & trader tools.</p>
          <ul className="support-list">
            <li>
                How to get started? <span className="support-arrow"></span>
            </li>
            <li>
                Account Support <span className="support-arrow"></span>
            </li>
            <li>
                Platform Support <span className="support-arrow"></span>
            </li>
            <li>
                Market Support <span className="support-arrow"></span>
            </li>
            <li>
                Calculators <span className="support-arrow"></span>
            </li>
            </ul>

        </div>
      </div>

    </div>
  );
};

export default ContactSupport;
