import React, { useState } from "react";
import "./ContactSupport.css";
import { Link } from "react-router-dom";
import axios from "axios";

const ContactSupport = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    department: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg("");

    try {
      const API_URL = import.meta.env.VITE_BACKEND_URL;

      // ✅ Check env available
      if (!API_URL) {
        setStatusMsg("❌ Server not configured. Contact support.");
        console.error("VITE_BACKEND_URL missing in .env");
        setLoading(false);
        return;
      }

      const res = await axios.post(`${API_URL}/api/contact`, formData);

      if (res.data) {
        setStatusMsg("✅ Message sent successfully!");
      }

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        department: "",
        message: ""
      });
    } catch (err) {
      setStatusMsg("❌ Failed to send message. Try again!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reachout">
      <div className="reachoutcontainer">
        <div className="reachout-image-container">
          <img src="/Office1.jpg" alt="Support Office" className="reachout-image" />
          <div className="reachout-text">
            <h1 className="reachout-heading">Contact Us</h1>
            <p className="reachout-subtext">Our team is here to support you 24/7.</p>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="contact-section-unique">
        {[
          { icon:"new-post", title:"Email us", text:"General queries", link:"mailto:support@blackbull.com", label:"support@blackbull.com"},
          { icon:"phone-office", title:"Call us", text:"Speak with us", link:"tel:+6495585142", label:"+64 9 558 5142"},
          { icon:"chat", title:"Live Chat", text:"Instant help", link:"#", label:"Live Chat"},
          { icon:"whatsapp", title:"WhatsApp", text:"Message us", link:"#", label:"WhatsApp"}
        ].map((item, i) => (
          <div className="contact-card-unique" key={i}>
            <img src={`https://img.icons8.com/ios-filled/100/0073e6/${item.icon}.png`} alt={item.title} className="icon-unique" />
            <h3 className="title-unique">{item.title}</h3>
            <p className="text-unique">{item.text}</p>
            <a href={item.link} className="btn-unique">{item.label}</a>
          </div>
        ))}
      </div>

      {/* Enquiry Form */}
      <div className="enquiry-container">
        <div className="enquiry-left">
          <h2 className="enquiry-title">General Inquiries</h2>
          <p className="enquiry-text">Feel free to contact our support team.</p>

          {statusMsg && (
            <div
              className="status-msg"
              style={{
                color: statusMsg.startsWith("✅") ? "green" : "red",
                fontWeight: "600",
                marginBottom: "10px"
              }}
            >
              {statusMsg}
            </div>
          )}

          <form className="enquiry-form" onSubmit={handleSubmit}>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name*" required />
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name*" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email*" required />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone*" required />
            <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" />
            <input type="text" name="department" value={formData.department} onChange={handleChange} placeholder="Department" />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="How can we help?" required />

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>

        <div className="enquiry-right">
          <h2 className="support-title">Support</h2>
          <p className="support-text">Helpful resources, FAQs & trader tools.</p>
          <ul className="support-list">
            {["getting-started", "account-support", "platform-support", "market-support"].map((path, index) => (
              <li key={index}>
                <Link to={`/support/${path}`}>{path.replace("-", " ").toUpperCase()}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
