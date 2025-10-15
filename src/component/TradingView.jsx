import React from 'react'
import { Link } from 'react-router-dom'

function TradingView() {
    return (
        <div className='bg-home'>
            <style>
                {
                    `.trading-view {
                         background: linear-gradient(to bottom right, #000000, #231586)}
                       .trading-primium,.how-to-connect{
                       background: linear-gradient(to bottom right, #000000, #231586);
                       }

                    `
                }

            </style>
            <div className="container-fluid bg-black text-white py-5 trading-view ">
                <div className="container">
                    <div className="row align-items-center mt-5">
                        {/* Left Section */}
                        <div className="col-lg-6 text-start text-lg-start mb-4 mb-lg-0">
                            <h1 className="fw-bold display-5">
                                Unlock{" "}
                                <span className="text-heading">Free TradingView</span>
                                <br />
                                Essential, Plus or Premium
                            </h1>
                            <p className="fs-5 mt-3 text-white">
                                Elevate your trading experience with best-in-class charting
                                tools from TradingView.
                            </p>

                            {/* Buttons */}
                            <div className="d-flex flex-column flex-sm-row gap-2 justify-content-start mt-4">
                                <Link to='/education/demo-trade' className="btn btn-bg-start text-white  mt-3">
                                    Join Now
                                </Link>
                                <Link to="/loginform" className="btn btn-bg-start text-white  mt-3 ">
                                    Log In
                                </Link>
                            </div>

                        </div>

                        {/* Right Section */}
                        <div className="col-lg-6 text-center">
                            <img
                                src="/leptop1.webp"
                                alt="TradingView Chart"
                                className="img-fluid mt-3 mt-lg-0"
                                style={{ maxHeight: "500px", objectFit: "contain" }}
                            />
                        </div>
                    </div>

                    {/* Bottom Store Buttons */}
                    <div className="d-flex flex-wrap justify-content-center gap-3 mt-5">
                        {/* TradingView Button */}
                        <Link to="https://www.tradingview.com/chart/" className="btn btn-dark d-flex align-items-center px-3">
                            <img
                                src="/Frame8417.png"
                                alt="TV Logo"
                                style={{ height: "20px", marginRight: "8px" }}
                            />
                            GET IT FOR WEB
                        </Link>

                        {/* Other Store Logos */}
                        <a href="#" className="d-flex align-items-center  px-3 py-2 rounded">
                            <img
                                src="/microsoft.svg"
                                alt="Microsoft Store"
                                style={{ height: "35px" }}
                            />
                        </a>

                        <a href="#" className="d-flex align-items-center  px-3 py-2 rounded">
                            <img
                                src="/Mac.webp"
                                alt="Mac App Store"
                                style={{ height: "35px" }}
                            />
                        </a>

                        <a href="#" className="d-flex align-items-center  px-3 py-2 rounded">
                            <img
                                src="/Google-Play (1).svg"
                                alt="Google Play"
                                style={{ height: "35px" }}
                            />
                        </a>

                        <a href="#" className="d-flex align-items-center px-3 py-2 rounded">
                            <img
                                src="/Mac.webp"
                                alt="App Store"
                                style={{ height: "35px" }}
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* -------------How to get trading------------ */}

            <div className="container-fluid bg-home align-content-center py-3 py-lg-5 py-md-5" >
                <div className="container">
                    <div className="row align-items-center border rounded p-2 p-lg-4 p-md-4">
                        {/* Left Section */}
                        <div className="col-lg-6 mb-4 mb-lg-0 text-start text-lg-start">
                            <h1 className="fw-bold">
                                How to get{" "}<br />
                                <span className="text-heading">TradingView Premium?</span>
                            </h1>
                            <p className="text-secondary mt-3 fs-5">
                                TradingView Premium can take your trading to the next
                                level with 25 indicators per chart, 8-chart layouts, and
                                400 price and technical alerts.
                            </p>
                        </div>

                        {/* Right Section (Video) */}
                        <div className="col-lg-6 text-center">
                            <div className="ratio ratio-16x9">
                                <iframe
                                    src="https://www.youtube.com/embed/QU65j9eQobc" // replace with actual video
                                    title="TradingView Premium Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* -----------TradingView primium----------------- */}
            <div className="container-fluid bg-primary text-white py-2 py-lg-5 py-md-5 trading-primium" >
                <div className="container text-start">
                    {/* Heading */}
                    <h2 className="fw-bold display-6">Get Free TradingView Premium</h2>
                    <p className="text-light mb-5">
                        <i className="bi bi-lock-fill me-2"></i>
                        Unlock TradingView’s premium plans as you trade
                    </p>

                    {/* Responsive Grid */}
                    <div className="row g-4">
                        {/* Plan 1 */}
                        <div className="col-12 col-md-6 col-lg-4 ">
                            <div className="p-4 bg-white text-dark rounded  shadow align-content-center h-100 custom-card " style={{ height: "70vh" }}>
                                <h5 className="fw-bold fs-1 text-heading">TradingView Essential</h5>
                                <span className="badge bg-light text-heading mt-2">
                                    FREE WITH 1 LOT TRADED P/M
                                </span>
                                <h2 className="fw-bold my-3">
                                    <span className="text-decoration-line-through text-danger">
                                        $14.95
                                    </span>{" "}
                                    <span className="fs-5 text-secondary">USD/MO</span>
                                </h2>
                                <p className="text-secondary fs-6">
                                    Trade one lot per month and the cost of TradingView Essential will
                                    be credited to your trading account.
                                </p>
                                <Link to='/education/demo-trade' className="btn btn-bg-start text-white  mt-3">Claim Offer</Link>
                            </div>
                        </div>

                        {/* Plan 2 */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="p-4 bg-light text-secondary rounded shadow align-content-center h-100 custom-card" >
                                <h5 className="fw-bold fs-1 text-heading">TradingView Plus</h5>
                                <span className="badge bg-light text-dark mt-2">
                                    FREE WITH 5 LOTS TRADED P/M
                                </span>
                                <h2 className="fw-bold my-3">
                                    <span className="text-decoration-line-through text-danger">
                                        $29.95
                                    </span>{" "}
                                    <span className="fs-5">USD/MO</span>
                                </h2>
                                <p className="text-secondary fs-6">
                                    Trade five lots per month and the cost of TradingView Plus will be
                                    credited to your trading account.
                                </p>
                                <Link to="/education/demo-trade" className="btn btn-bg-start text-white  mt-3">Claim Offer</Link>
                            </div>
                        </div>

                        {/* Plan 3 */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="p-4 bg-white text-dark rounded shadow h-100 align-content-center custom-card ">
                                <h5 className="fw-bold fs-1 text-heading">TradingView Premium</h5>
                                <span className="badge bg-light text-heading mt-2">
                                    FREE WITH 10 LOTS TRADED P/M
                                </span>
                                <h2 className="fw-bold my-3">
                                    <span className="text-decoration-line-through text-danger">
                                        $59.95
                                    </span>{" "}
                                    <span className="fs-5 text-secondary">USD/MO</span>
                                </h2>
                                <p className=" text-secondary fs-6">
                                    Trade ten lots per month and the cost of TradingView Premium will
                                    be credited to your trading account.
                                </p>
                                <Link to="/education/demo-trade" className="btn btn-bg-start text-white  mt-3">Claim Offer</Link>
                            </div>
                        </div>
                    </div>
                    <p className='my-4 '>Trading is risky. T&C’s apply. Free TradingView Premium*</p>
                </div>
            </div>

            {/* -----------Why MarketTrad----------------- */}

            <div className="container-fluid bg-light py-3 py-lg-5 py-md-5 min-vh-90">
                <div className="container py-3 py-lg-4 py-md-4">
                    <div className="row align-items-center g-5">
                        {/* Left Section */}
                        <div className="col-12 col-lg-6 text-start text-md-start text-sm-start">
                            <h1 className="fw-bold display-4 text-heading">Why Market Trade</h1>
                            <p className="text-secondary mt-3 fs-5">
                                BlackBull Markets is a multi-regulated broker headquartered in
                                Auckland, New Zealand, providing an institutional trading experience
                                globally. Our mission is to provide traders with a superior trading
                                experience through innovative technology like TradingView, and
                                exceptional customer service.
                            </p>

                            {/* Feature List */}
                            <div className="d-flex align-items-start mb-3 justify-content-start ">
                                <i className="bi bi-bar-chart fs-1 text-heading  me-3"></i>
                                <div>
                                    <p className="fw-bold fs-5  text-start mb-1">1:500 Leverage</p>
                                    <p className="text-secondary mb-0">
                                        Control larger positions with less capital.
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex align-items-start mb-3 justify-content-start">
                                <i className="bi bi-currency-exchange fs-1 text-heading me-3"></i>
                                <div>
                                    <p className="fw-bold fs-5  text-start mb-1">Low Spreads</p>
                                    <p className="text-secondary mb-0">
                                        Enjoy competitive spreads starting from 0.0 pips.
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex align-items-start mb-3 justify-content-start">
                                <i className="bi bi-shield-lock fs-1 text-heading me-3"></i>
                                <div>
                                    <p className="fw-bold fs-5  text-start mb-1">Secure Trading</p>
                                    <p className="text-secondary mb-0">
                                        Trade confidently with our regulated and secure platform.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Section (Video) */}
                        <div className="col-12 col-lg-6 text-center">
                            <div className="ratio ratio-16x9">
                                <iframe
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="TradingView Premium Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* -------------How to Connect------------ */}

            <div className="container-fluid align-content-center py-3 py-lg-5 py-md-5 how-to-connect" >
                <div className="container">
                    <div className="row align-items-center  rounded p-0 p-lg-4 p-md-4">
                        {/* Left Section */}
                        <div className="col-lg-6 mb-4 mb-lg-0 text-start text-lg-start">
                            <h1 className="fw-bold text-white">
                                How to connect to{" "}<br />
                                <span className="text-heading">TradingView View?</span>
                            </h1>
                            <p className="text-secondary mt-3 fs-5">
                                Log into the TradingView website or mobile app, open a chart for an asset you want to trade, and select BlackBull Markets as your broker in the Trading panel. Learn more.
                            </p>
                        </div>

                        {/* Right Section (Video) */}
                        <div className="col-lg-6 text-center">
                            <div className="ratio ratio-16x9">
                                <iframe
                                    src="https://www.youtube.com/embed/FmKJDOSUAUY" // replace with actual video
                                    title="TradingView Premium Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    {/* Bottom Store Buttons */}
                    <div className="d-flex flex-wrap justify-content-center gap-3 mt-5">
                        {/* TradingView Button */}
                        <Link to="https://www.tradingview.com/chart/" className="btn btn-outline-dark text-white d-flex align-items-center px-3">
                            <img
                                src="/Frame8417.png"
                                alt="TV Logo"
                                style={{ height: "20px", marginRight: "8px" }}
                            />
                            GET IT FOR WEB
                        </Link>

                        {/* Other Store Logos */}
                        <Link to="#" className="d-flex align-items-center  px-3 py-2 rounded">
                            <img
                                src="/microsoft.svg"
                                alt="Microsoft Store"
                                style={{ height: "35px" }}
                            />
                        </Link>

                        <Link to="#" className="d-flex align-items-center  px-3 py-2 rounded">
                            <img
                                src="/Mac.webp"
                                alt="Mac App Store"
                                style={{ height: "35px" }}
                            />
                        </Link>

                        <Link to="#" className="d-flex align-items-center  px-3 py-2 rounded">
                            <img
                                src="/Google-Play (1).svg"
                                alt="Google Play"
                                style={{ height: "35px" }}
                            />
                        </Link>

                        <Link to="#" className="d-flex align-items-center px-3 py-2 rounded">
                            <img
                                src="/Mac.webp"
                                alt="App Store"
                                style={{ height: "35px" }}
                            />
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default TradingView