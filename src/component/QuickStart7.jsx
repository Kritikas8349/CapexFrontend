import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './QuickStart7.css';

function QuickStart7() {

    const methods = [
        {
            logo: "googlepay.png",
            name: "Google Pay",
            type: "Instant",
            processing: "Instant on approval",
            min: "$50",
            max: "N/A",
            currency: "Multi-currencies",
            fee: "$0",
        },
        {
            logo: "applelog.webp",
            name: "Apple Pay",
            type: "Instant",
            processing: "Instant on approval",
            min: "$50",
            max: "N/A",
            currency: "Multi-currencies",
            fee: "$0",
        },
        {
            logo: "visalogo.webp",
            name: "Visa",
            type: "Instant",
            processing: "Instant on approval",
            min: "$50",
            max: "N/A",
            currency: "Multi-currencies",
            fee: "$0",
        },
        {
            logo: "skrill.png",
            name: "Skrill",
            type: "Instant",
            processing: "Instant on approval",
            min: "$50",
            max: "N/A",
            currency: "Multi-currencies",
            fee: "$0",
        },
        {
            logo: "neteller.png",
            name: "Neteller",
            type: "Instant",
            processing: "Instant on approval",
            min: "$50",
            max: "N/A",
            currency: "Multi-currencies",
            fee: "$0",
        },
        {
            logo: "banktransfer.png",
            name: "Local Bank Transfer",
            type: "Popular",
            processing: "30 to 90 mins",
            min: "$50",
            max: "N/A",
            currency: "Multi-currencies",
            fee: "$0",
        },
        {
            logo: "paypal.webp",
            name: "PayPal",
            type: "Instant",
            processing: "Instant on approval",
            min: "$50",
            max: "N/A",
            currency: "Multi-currencies",
            fee: "$0",
        },
        {
            logo: "stripe.webp",
            name: "Stripe",
            type: "Popular",
            processing: "Instant on approval",
            min: "$50",
            max: "N/A",
            currency: "Multi-currencies",
            fee: "$0",
        },
        {
            logo: "upi-logo.webp",
            name: "UPI",
            type: "Instant",
            processing: "Instant on approval",
            min: "$50",
            max: "N/A",
            currency: "Multi-currencies",
            fee: "$0",
        },
        {
            logo: "upi-logo.webp",
            name: "UPI",
            type: "Instant",
            processing: "Instant on approval",
            min: "$50",
            max: "N/A",
            currency: "Multi-currencies",
            fee: "$0",
        },
        {
            logo: "upi-logo.webp",
            name: "UPI",
            type: "Instant",
            processing: "Instant on approval",
            min: "$50",
            max: "N/A",
            currency: "Multi-currencies",
            fee: "$0",
        },
        {
            logo: "upi-logo.webp",
            name: "UPI",
            type: "Instant",
            processing: "Instant on approval",
            min: "$50",
            max: "N/A",
            currency: "Multi-currencies",
            fee: "$0",
        },
        {
            logo: "upi-logo.webp",
            name: "UPI",
            type: "Instant",
            processing: "Instant on approval",
            min: "$50",
            max: "N/A",
            currency: "Multi-currencies",
            fee: "$0",
        },
        {
            logo: "upi-logo.webp",
            name: "UPI",
            type: "Instant",
            processing: "Instant on approval",
            min: "$50",
            max: "N/A",
            currency: "Multi-currencies",
            fee: "$0",
        },
        {
            logo: "upi-logo.webp",
            name: "UPI",
            type: "Instant",
            processing: "Instant on approval",
            min: "$50",
            max: "N/A",
            currency: "Multi-currencies",
            fee: "$0",
        },
        {
            logo: "upi-logo.webp",
            name: "UPI",
            type: "Instant",
            processing: "Instant on approval",
            min: "$50",
            max: "N/A",
            currency: "Multi-currencies",
            fee: "$0",
        },
        {
            logo: "amexlogo.webp",
            name: "AMEX",
            type: "Instant",
            processing: "Instant on approval",
            min: "$50",
            max: "N/A",
            currency: "Multi-currencies",
            fee: "$0",
        },
    ];



    const [activeIndex, setActiveIndex] = useState(null);
    const toggleFaq = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const faqData = [
        {
            question: 'How long does it take for funds to show in my wallet?',
            answer: 'The time it takes for funds to appear in your wallet depends on the deposit method. Most funding methods are instantaneous. '
        },
        {
            question: 'What is the minimum deposit requirement?',
            answer: 'BlackBull Markets requires no minimum deposit, however, a minimum amount may be required by your preferred funding method.'
        },
        {
            question: 'Are there any fees associated with depositing funds?',
            answer: 'No, BlackBull Markets charges no fees for depositing funds.'
        }
    ];





    return (
        <div id='Main7'>

            <div className="withdraw-section7">
                <div className="withdraw-left7">
                    <h1>How to withdraw funds?</h1>
                    <p>
                        Withdraw from your account hassle-free and with full transparency.


                    </p>
                </div>

                <div className="withdraw-right7">
                    <img src="1.png" alt="Phone showing deposit options" />
                </div>
            </div>


            <div className="payment-section7">
                <div className="filter-buttons7">
                    <button className="active7">All</button>
                    <button>Instant</button>
                    <button>Popular</button>
                </div>

                <div className="payment-grid7">
                    {methods.map((method, index) => (
                        <div className="payment-card7" key={index}>
                            <img src={method.logo} alt={method.name} />
                            <h3>{method.name}</h3>
                            <p>
                                <strong>Processing Time:</strong> {method.processing}
                            </p>
                            <p>
                                <strong>Minimum withdraw:</strong> {method.min}
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
                            <button className="add-funds7">Add Funds</button>
                            <p className="note7">Some exceptions may apply*</p>
                        </div>
                    ))}
                </div>
            </div>



            <div className="withdraw7">
                {/* Heading */}
                <div className="withdraw-header7">
                    <h1>How to withdraw funds from your account?</h1>
                    <p>
                        Withdraw funds from your trading account in three easy steps with multiple local payment methods.


                    </p>
                </div>

                {/* Steps */}
                <div className="withdraw-steps7">
                    {/* Step 1 */}
                    <div className="step-card7">
                        <img src="start.webp" alt="Select Wallet" />
                        <h2>Select Method</h2>
                        <p>
                            Select the account you want to withdraw funds and click ‘WITHDRAW FUNDS’


                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="step-card7">
                        <img src="mid.webp" alt="Select Method" />
                        <h2>Select Wallet</h2>
                        <p>
                            Select the payment method by which you want to make the withdrawal.


                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="step-card7">
                        <img src="end.webp" alt="Specify Amount" />
                        <h2>Specify Amount</h2>
                        <p>
                            Specify the amount you want to deposit and click ‘NEXT’.
                        </p>
                    </div>
                </div>
            </div>



            <div className="withdraw-container7">
                {/* Left Side */}
                <div className="deposit-text6">
                    <h1>How to deposit funds into your account?</h1>
                    <p>
                        To deposit funds into your account, visit the ‘My Wallet’ tab found on
                        the left-hand side of the Secure Client Area. Here, you will be
                        presented with a 4-step process to deposit funds.
                    </p>
                    <button className="withdraw-btn7">Deposit Funds</button>
                </div>

                {/* Right Side (YouTube Video Embed) */}
                <div className="withdraw-video7">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://youtu.be/_5OYF926ZSM"
                        title="How to Fund Your Trading Account"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>



            {/* FAQ Section */}
            <div className="faq-container7">
                <h2 className="faq-title7">FAQ</h2>
                {faqData.map((item, index) => (
                    <div key={index} className="faq-item7">
                        <div className="faq-question7" onClick={() => toggleFaq(index)}>
                            <h3>{item.question}</h3>
                            <span className="icon7">
                                {activeIndex === index ? <FiMinus /> : <FiPlus />}
                            </span>
                        </div>
                        {activeIndex === index && (
                            <div className="faq-answer7">
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>



        </div>
    )
}

export default QuickStart7