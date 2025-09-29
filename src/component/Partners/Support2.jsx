import React from "react";
import { Link } from 'react-router-dom';
import "./Support2.css"; 


const faqItems = [
    { question: "How to sign up as an IB?", link: "/faq/signup" },
    { question: "How to earn commission?", link: "/faq/commission" },
    { question: "How often will you get paid?", link: "/faq/payment-frequency" },
    { question: "How to access the marketing materials?", link: "/faq/marketing-materials" },
    { question: "How to get the sign up link?", link: "/faq/tracking-link" },
];

function Support2() {
    return (
        <div className="support2-page">

            <div className="affiliate-support-container">
                <div className="overlay">
                    <div className="text-section">
                        <h1>IBs - <span>Support</span></h1>
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

export default Support2;
