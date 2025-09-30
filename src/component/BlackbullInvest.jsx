import React from 'react'
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
function BlackbullInvest() {
    const [activeTab, setActiveTab] = useState('us');

    const tabs = [
        { key: 'us', label: 'US Shares Investing' },
        { key: 'aussie', label: 'Aussie Shares Investing' },
        { key: 'kiwi', label: 'Kiwi Shares Investing' },
        { key: 'fees', label: 'Fee Comparison' },
    ];

    const data = {
        us: [
            ['$1,000 in', '/shopify.svg', '$10.00', '$90.00', '$69.50', '$19.50'],
            ['$5,000 in', '/nike.svg', '$10.00', '$90.00', '$69.50', '$67.50'],
            ['$10,000 in', '/roket.svg', '$40.00', '$100.00', '$69.50', '$127.50'],
        ],
        aussie: [
            ['$1,000 in', '/nike-logo.png', '$12.00', '$85.00', '$70.00', '$20.00'],
            ['$5,000 in', '/shopify-logo.png', '$12.00', '$85.00', '$70.00', '$65.00'],
            ['$10,000 in', '/rocketlab-logo.png', '$45.00', '$95.00', '$70.00', '$120.00'],
        ],
        kiwi: [
            ['$1,000 in', '/shopify-logo.png', '$11.00', '$88.00', '$72.00', '$21.00'],
            ['$5,000 in', '/nike-logo.png', '$11.00', '$88.00', '$72.00', '$66.00'],
            ['$10,000 in', '/rocketlab-logo.png', '$42.00', '$98.00', '$72.00', '$125.00'],
        ],
        fees: [
            ['$1,000 in', '/shopify-logo.png', '$10.00', '$90.00', '$69.50', '$19.50'],
            ['$5,000 in', '/nike-logo.png', '$10.00', '$90.00', '$69.50', '$67.50'],
            ['$10,000 in', '/rocketlab-logo.png', '$40.00', '$100.00', '$69.50', '$127.50'],
        ],
    };
    return (
        <div>
            <style>
                {
                    `.bg-market-research {
                         background: linear-gradient(to left, #4028E9, #000000);}
                         color:white;
                    `

                }

            </style>
            <div className="container-fluid  py-5 border   ">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Section */}
                        <div className="col-lg-6 text-start text-lg-start mb-4 mb-lg-0">
                            <h1 className="fw-bold display-5">
                                Market Trade Invest
                            </h1>
                            <p className=" fs-6 mt-3 ">
                                Access 26,000+ Shares, Options, ETFs, Bonds, and<br /> other underlying assets.
                            </p>

                            {/* Buttons */}
                            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mt-4">
                                <button className='btn btn-primary px-4 py-2 '>Register Now</button>
                                <button className="btn btn-success px-4 py-2 ">
                                    Join Now
                                </button>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="col-lg-6 text-center">
                            <img
                                src="/invest.webp"
                                alt="TradingView Chart"
                                className="img-fluid mt-3 mt-lg-0"
                                style={{ maxHeight: "500px", objectFit: "contain" }}
                            />
                        </div>
                    </div>


                </div>
            </div>

            {/* --------Why Invest--------      */}

            <div className="container-fluid bg-dark py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h1 className="text-white fw-bold">Why MarketTrad Invest</h1>
                    </div>

                    <div className="row text-center text-white">
                        <div className="col-12 col-sm-6 col-md-3 mb-4">
                            <h2 className="fw-bold">70+</h2>
                            <h5 className="mt-2">Order Types</h5>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 mb-4">
                            <h2 className="fw-bold">Extended</h2>
                            <h5 className="mt-2">Trading Hours</h5>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 mb-4">
                            <h2 className="fw-bold">Advanced</h2>
                            <h5 className="mt-2">Analysis Tools</h5>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 mb-4">
                            <h2 className="fw-bold">Data Feeds</h2>
                            <h5 className="mt-2">From 66+ Third Parties</h5>
                        </div>
                    </div>
                </div>
            </div>

            {/* ------What is the diffrence------ */}

            <div className="container-fluid  py-5 border bg-light   ">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Section */}
                        <div className="col-lg-6 text-center">
                            <img
                                src="/invest1.webp"
                                alt="TradingView Chart"
                                className="img-fluid mt-3 mt-lg-0"
                                style={{ maxHeight: "500px", objectFit: "contain" }}
                            />
                        </div>


                        {/* Right Section */}
                        <div className="col-lg-6 text-start text-lg-start mb-4 mb-lg-0">
                            <p>
                                BlackBull Invest vs. Live CFD Trading:</p>
                            <h1 className="fw-bold display-5">
                                What is the Diffrence
                            </h1>
                            <p className=" ">BlackBull Invest Account involves buying and selling stocks in individual companies, allowing you to become a shareholder and benefit from their growth. It’s a long-term investment strategy with potential dividends and capital appreciation.
                            </p>
                            <p>Live CFD Trading Account, on the other hand, refers to actively trading financial instruments like Forex, Commodities, and Indices as CFDs. It focuses on short-term price movements and aims to profit from market volatility.</p>
                            <div className='p-3 bg-white border'>
                                <p>At BlackBull Markets, we offer both Shares Investing and Live Trading, giving you access to a diverse range of investment options.

                                </p>
                            </div>


                        </div>
                    </div>


                </div>
            </div>

            {/* ----------Invest Platform --------- */}

            <div className="container-fluid py-5 bg-dark text-white">
                <div className="container">
                    <div className="row align-items-center">

                        {/* Left Section: Text + Buttons */}
                        <div className="col-lg-6 mb-5 mb-lg-0 text-start text-lg-start">
                            <h1 className="fw-bold display-5 mb-4">
                                BlackBull Invest <br /> Platform
                            </h1>
                            <p className="fs-6">
                                Our user-friendly Shares Investing platform provides a seamless experience for buying and selling stocks (not CFDs). Take advantage of comprehensive research tools, real-time market data, and customizable charts to make informed investment decisions.
                            </p>

                            <h4 className="mt-4 fw-semibold">Key Features:</h4>
                            <ul className=" mt-3">
                                <li>Transparent low commissions help minimize costs to maximize your returns</li>
                                <li> Access real-time share market data and financial news</li>
                                <li> Analyse stocks with advanced charting tools</li>
                                <li> Set price alerts and manage your portfolio with ease</li>
                            </ul>

                            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mt-4">
                                <button className="btn btn-primary px-4 py-2 fw-bold">Register Now</button>
                                <button className="btn btn-success px-4 py-2 fw-bold">Join Now</button>
                            </div>
                        </div>

                        {/* Right Section: Image + App Links */}
                        <div className="col-lg-6 text-center">
                            <img
                                src="/invest2.webp"
                                alt="Trading App"
                                className="img-fluid mb-4"
                                style={{ maxHeight: '500px', objectFit: 'contain' }}
                            />

                            <p className="fw-semibold">Download our app:</p>

                            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                                <img src="/Mac.webp" alt="Mac App Store" className="img-fluid" style={{ maxWidth: '160px' }} />
                                <img src="/Google-Play (1).svg" alt="Google Play Store" className="img-fluid" style={{ maxWidth: '160px' }} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            {/* ------Tables/Pricing--------- */}

            <div className="container py-5">
                {/* Tabs */}
                <ul className="nav nav-tabs justify-content-center mb-4 border-0">
                    {tabs.map((tab) => (
                        <li className="nav-item" key={tab.key}>
                            <button
                                className={`nav-link fw-bold text-uppercase px-3 ${activeTab === tab.key ? 'active bg-primary text-white' : ''
                                    }`}
                                onClick={() => setActiveTab(tab.key)}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Table */}
                <div className="table-responsive">
                    <table className="table table-bordered text-center align-middle">
                        <thead className="table-light">
                            <tr>
                                <th className="fw-bold">Amount Invested</th>
                                <th className="bg-primary text-white fw-bold">BlackBull</th>
                                <th className="fw-bold">ASB</th>
                                <th className="fw-bold">Jarden</th>
                                <th className="fw-bold">Forsyth Barr</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data[activeTab].map((row, index) => (
                                <tr key={index} className={index % 2 === 1 ? 'bg-light' : ''}>
                                    <td>
                                        {row[0]}{' '}
                                        <img
                                            src={row[1]}
                                            alt="Logo"
                                            style={{ height: '25px', verticalAlign: 'middle' }}
                                        />
                                    </td>
                                    <td className="bg-primary text-white">{row[2]}</td>
                                    <td>{row[3]}</td>
                                    <td>{row[4]}</td>
                                    <td>{row[5]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Download Link */}
                <div className="text-center mt-4">
                    <p className="fw-medium">
                        Download the{' '}
                        <a href="/share-investing-fees.pdf" className="text-primary text-decoration-underline">
                            Share Investing Fees
                        </a>{' '}
                        PDF to see the full pricing
                    </p>
                </div>

                {/* Disclaimer */}
                <div className="text-center mt-3 small text-muted">
                    <p>Disclaimers:</p>
                    <p>All equity prices are for the purpose of example only and are accurate as of 9/3/2023.</p>
                    <p>
                        All fee structures were obtained from the respective company’s publicly available information
                        and are accurate at the time of publishing.
                    </p>
                </div>
            </div>

            {/* ----MarketTrad Research------- */}

            <div className="container-fluid py-5 text-white bg-market-research ">
                <div className="container text-start py-5 text-md-start">
                    <div className="mb-4">
                        <h1 className="fw-bold mb-2">MarketTrad Research</h1>
                        <h3 className="fw-semibold">Daily Expert Stock Research</h3>
                    </div>
                    <div className="mb-4">
                        <p className="mb-0">
                            Enhance BlackBull Invest with timely and jargon-free Institutional-grade<br className="d-none d-md-block" />
                            stock recommendations from BlackBull Research.
                        </p>
                    </div>
                    <div>
                        <button className="btn btn-primary px-4 py-2 fw-bold">Learn More</button>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    )
}

export default BlackbullInvest;