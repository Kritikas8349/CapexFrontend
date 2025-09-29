import React from "react";
import { Link } from 'react-router-dom';
import "./Support1.css"; // We'll create this CSS file next


const faqItems = [
    { question: "How to sign up as an Affiliate?", link: "/faq/signup" },
    { question: "How to get your sub-affiliate tracking link?", link: "/faq/sub-tracking" },
    { question: "How to earn commission?", link: "/faq/commission" },
    { question: "How often will you get paid?", link: "/faq/payment-frequency" },
    { question: "How to access the marketing materials?", link: "/faq/marketing-materials" },
    { question: "How to request the payment?", link: "/faq/request-payment" },
    { question: "How to get your tracking link?", link: "/faq/tracking-link" },
];

function Support1() {
    return (
        <div className="support1-page">

            <div className="affiliate-support-container">
                <div className="overlay">
                    <div className="text-section">
                        <h1>Affiliates - <span>Support</span></h1>
                        <p>Search our knowledge base for answers to common questions</p>

                        <input type="text" placeholder="🔍 Search..." />
                        
                    </div>
                </div>
            </div>



            <div className="faq-container-p">
                <div className="breadcrumb-p">
                    <span>Home</span> / <span>Support</span> / <span>Affiliates</span> / <span className="active-p">Support</span>
                </div>

                <ul className="faq-list-p">
                    {faqItems.map((item, index) => (
                        <li key={index}>
                            <Link to={item.link} className="faq-link-p">
                                <span className="faq-icon-p">📄</span>
                                {item.question}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default Support1;
