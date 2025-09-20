import React from 'react'
import './QuickStart6.css';

function QuickStart6() {


    const methods = [
        {
            logo: "googlepay.png",
            name: "Google Pay",
            type: "Instant",
            processing: "Instant on approval",
            min: "$50",
            max: "$50,000",
            currency: "Multi-currencies",
            fee: "$0",
        },
        {
            logo: "/logos/applepay.png",
            name: "Apple Pay",
            type: "Instant",
            processing: "Instant on approval",
            min: "$50",
            max: "$50,000",
            currency: "Multi-currencies",
            fee: "$0",
        },
        {
            logo: "mastercard.png",
            name: "Visa",
            type: "Instant",
            processing: "Instant on approval",
            min: "$50",
            max: "$50,000",
            currency: "Multi-currencies",
            fee: "$0",
        },
        {
            logo: "skrill.png",
            name: "Skrill",
            type: "Instant",
            processing: "Instant on approval",
            min: "$50",
            max: "$50,000",
            currency: "Multi-currencies",
            fee: "$0",
        },
        {
            logo: "neteller.png",
            name: "Neteller",
            type: "Instant",
            processing: "Instant on approval",
            min: "$50",
            max: "$50,000",
            currency: "Multi-currencies",
            fee: "$0",
        },
        {
            logo: "banktransfer.png",
            name: "Local Bank Transfer",
            type: "Popular",
            processing: "30 to 90 mins",
            min: "$50",
            max: "$50,000",
            currency: "Multi-currencies",
            fee: "$0",
        },
        {
            logo: "/logos/paypal.png",
            name: "PayPal",
            type: "Instant",
            processing: "Instant on approval",
            min: "$50",
            max: "$50,000",
            currency: "Multi-currencies",
            fee: "$0",
        },
        {
            logo: "/logos/stripe.png",
            name: "Stripe",
            type: "Popular",
            processing: "Instant on approval",
            min: "$50",
            max: "$50,000",
            currency: "Multi-currencies",
            fee: "$0",
        },
        {
            logo: "/logos/upi.png",
            name: "UPI",
            type: "Instant",
            processing: "Instant on approval",
            min: "$50",
            max: "$50,000",
            currency: "Multi-currencies",
            fee: "$0",
        },
    ];
    return (
        <div id='Main'>

            <div className="deposit-section">
                <div className="deposit-left">
                    <h1>How to deposit funds</h1>
                    <p>
                        Add funds to your trading account with multiple local deposit methods.
                    </p>
                </div>

                <div className="deposit-right">
                    <img src="1.png" alt="Phone showing deposit options" />
                </div>
            </div>


            <div className="payment-section">
                <div className="filter-buttons">
                    <button className="active">All</button>
                    <button>Instant</button>
                    <button>Popular</button>
                </div>

                <div className="payment-grid">
                    {methods.map((method, index) => (
                        <div className="payment-card" key={index}>
                            <img src={method.logo} alt={method.name} />
                            <h3>{method.name}</h3>
                            <p>
                                <strong>Processing Time:</strong> {method.processing}
                            </p>
                            <p>
                                <strong>Minimum Deposit:</strong> {method.min}
                            </p>
                            <p>
                                <strong>Maximum Amount:</strong> {method.max} *
                            </p>
                            <p>
                                <strong>Supported Currencies:</strong> {method.currency}
                            </p>
                            <p>
                                <strong>Fees:</strong> {method.fee}
                            </p>
                            <button className="add-funds">Add Funds</button>
                            <p className="note">Some exceptions may apply*</p>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default QuickStart6