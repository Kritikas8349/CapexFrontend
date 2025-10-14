import React from 'react'
import './CopyTrader.css'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function CopyTrader() {
    return (
        <div className='bg-home'>
            <style>
                {
                    `.copy-trader {
                         background: linear-gradient(to left, #4028E9, #000000);}
                         .bg-ctrade{
                          background: linear-gradient(to bottom right, #000000, #231586);
                         }
                         .why-join {
                         background: linear-gradient(to right, #4028E9 60%, white 40%);
                         color:white}  `

                }

            </style>
            <div className="container-fluid bg-black text-white py-5 bg-ctrade">
                <div className="container">
                    <div className="row align-items-center mt-5">
                        {/* Left Section */}
                        <div className="col-lg-6 text-start text-lg-start mb-4 mb-lg-0">
                            <h1 className="fw-bold display-5">
                                cTrader{" "}
                                <span className="text-heading"></span>
                                <br />
                                With Market Trad
                            </h1>
                            <p className="fs-4 mt-3 text-white ">
                                Access cTrader with no minimum deposit.
                            </p>

                            {/* Buttons */}
                            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mt-4">
                                <input type="email" name="" id="" className='form-control w-50 form-control-sm ' placeholder='Email address' />
                                <Link to="/quickstart/create-account" className="btn btn-bg-start text-white px-4 py-2 fw-bold">
                                    Join Now
                                </Link>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="col-lg-6 text-center">
                            <img
                                src="/mobile.webp"
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


            {/* ---------How to Copy Trade---------   */}
            <div className="container-fluid bg-home align-content-center border py-lg-5 my-3" >
                <div className="container py-lg-5">
                    <h1 className='text-start display-4 fw-bold'><span className='text-heading'>Key features of</span> BlackBull CopyTrader</h1>
                    <div className="row align-items-center  py-5 border-primary rounded p-4">
                        {/* Left Section */}
                        <div className="col-lg-6 mb-4 mb-lg-0 text-start text-lg-start">

                            <p className="text-secondary mt-3 fs-5">
                                BlackBull CopyTrader is an award-winning platform designed to connect traders to elite fund managers with a track record of success and proven trading strategies.<br />You can copy-trade with confidence on the BlackBull CopyTrader platform by using its advanced risk management features that let you determine exactly how you want to deploy your funds.
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
                                    className=""
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* -----Award-winning Platform----------     */}
            <div className="container-fluid bg-home border py-5">
                <div className="container">
                    {/* Content Row */}
                    <div className="row align-items-center border-primary rounded p-4">

                        {/* Left Section (Image) */}
                        <div className="col-12 col-lg-4 text-center mb-4 mb-lg-0">
                            <img src="/ForexExpo.webp" alt="Forex Expo" className="img-fluid rounded" />
                        </div>

                        {/* Right Section (Text + Icons) */}
                        <div className="col-12 col-lg-8 text-strat text-lg-start">
                            {/* Title */}
                            <h1 className="fw-bolder text-heading-emphasis mb-4">
                                Award-winning Platform
                            </h1>

                            {/* Paragraph */}
                            <p className="fs-5 text-heading-emphasis mb-5">
                                The BlackBull CopyTrader platform has been recognised for the quality of its
                                elite fund managers and its advanced risk management features, helping
                                BlackBull Markets secure the title of Best Copy Trading Broker at the 2025
                                Forex Expo Dubai.
                            </p>

                            {/* Icons Row */}
                            <div className="row text-center text-heading-emphasis">
                                <div className="col-12 col-md-4 mb-4">
                                    <i className="bi bi-speedometer2 display-4"></i>
                                    <h5 className="mt-2">Transparent</h5>
                                </div>
                                <div className="col-12 col-md-4 mb-4">
                                    <i className="bi bi-shield-lock display-4"></i>
                                    <h5 className="mt-2">Flexible</h5>
                                </div>
                                <div className="col-12 col-md-4 mb-4">
                                    <i className="bi bi-headset display-4"></i>
                                    <h5 className="mt-2">Convenient</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* -----------Why Join Market Trad------------ */}
            <div className="container-fluid gradient-bg px-5 mt-2">
                <div className="row g-0 align-items-center">

                    {/* LEFT: Gradient Background + Text */}
                    <div className="col-lg-6 col-12 text-start text-white  p-4 p-md-4 p-lg-4">
                        <h1 className="fw-bold display-5 mb-4 ">Why Join BlackBull CopyTrader?</h1>
                        <p className="lead">
                            If you want to copy elite traders with a verified track record of trading, then BlackBull CopyTrader is for you!
                        </p>
                        <p className="lead">
                            BlackBull CopyTrader is an ultra low-latency platform that lets you copy the trades of master traders.
                        </p>
                        <p className="lead mb-0">
                            Leverage their expertise, tap into their market insights, and benefit from their proven track record.
                        </p>
                    </div>

                    {/* RIGHT: Phone Mockup */}
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center p-4">
                        <img
                            src='/mobile2.webp'
                            alt="BlackBull CopyTrader on phone"
                            className="img-fluid"
                            style={{ maxWidth: '350px', width: '100%', height: 'auto' }}
                        />
                    </div>
                </div>
            </div>


            {/* -------Copy only the best--------- */}
            <div className="container-fluid px-0 gradient-bg px-5 mt-2">
                <div className="row g-0 align-items-center">
                    {/* LEFT: Gradient Background + Text */}
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center p-4">
                        <img
                            src='/mobile2.webp'
                            alt="BlackBull CopyTrader on phone"
                            className="img-fluid"
                            style={{ maxWidth: '350px', height: 'auto' }}
                        />
                    </div>


                    {/* RIGHT: Phone Mockup */}
                    <div className="col-lg-6 col-md-12  text-start text-white p-3 p-md-4 p-lg-5">
                        <h1 className="fw-bold display-5 mb-4">Why Join BlackBull CopyTrader?</h1>
                        <p className="lead">
                            If you want to copy elite traders with a verified track record of trading, then BlackBull CopyTrader is for you!
                        </p>
                        <p className="lead">
                            BlackBull CopyTrader is an ultra low-latency platform that lets you copy the trades of master traders.
                        </p>
                        <p className="lead mb-0">
                            Leverage their expertise, tap into their market insights, and benefit from their proven track record.
                        </p>
                    </div>
                </div>
            </div>

            {/* --------Risk Management----------     */}
            <div className="container-fluid px-0 gradient-bg mt-2">
                <div className="row g-0 align-items-center">

                    {/* LEFT: Gradient Background + Text */}
                    <div className="col-lg-6 col-md-12 text-white p-5 text-start">
                        <h1 className="fw-bold display-5 mb-4">Why Join BlackBull CopyTrader?</h1>
                        <p className="lead">
                            If you want to copy elite traders with a verified track record of trading, then BlackBull CopyTrader is for you!
                        </p>
                        <p className="lead">
                            BlackBull CopyTrader is an ultra low-latency platform that lets you copy the trades of master traders.
                        </p>
                        <p className="lead mb-0">
                            Leverage their expertise, tap into their market insights, and benefit from their proven track record.
                        </p>
                    </div>

                    {/* RIGHT: Phone Mockup */}
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center p-4">
                        <img
                            src="/mobile2.webp"
                            alt="BlackBull CopyTrader on phone"
                            className="img-fluid"
                            style={{ maxWidth: '350px', height: 'auto' }}
                        />
                    </div>
                </div>
            </div>


            {/* -----How to Start-------     */}
            <div className="container-fluid py-5">
                <div className="container text-center">
                    <h1 className="text-heading-emphasis fw-bold">How to get started?</h1>
                    <p className='mt-5 fs-5'>Before Joining BlackBull CopyTrader, you will need a BlackBull Markets account. Sign up in less than 5 minutes to get started.</p>
                </div>
            </div>

            {/* ------Step1 --------------- */}


            <div className="container-fluid py-5 bg-home">
                <div className="container">
                    <div className="row align-items-center">

                        {/* Image - Left on desktop, top on mobile */}
                        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 text-center">
                            <img
                                src="/create1.webp"
                                alt="Create Account"
                                className="img-fluid"
                                style={{ maxHeight: '400px', objectFit: 'contain' }}
                            />
                        </div>

                        {/* Text Content - Right on desktop, bottom on mobile */}
                        <div className="col-lg-6 col-md-12 text-md-start text-start">
                            <h2 className="text-heading fw-bold">Step 1</h2>
                            <h2 className="fw-bold mb-3">Create a BlackBull Markets account</h2>
                            <p className="mb-4">Create an account in less than 5 minutes.</p>
                            <Link to="/quickstart/create-account" className="btn btn-bg-start fs-5 text-white">Create Account</Link>
                        </div>

                    </div>
                </div>
            </div>

            {/* ----------Step 2--------      */}

            <div className="container-fluid py-5 ">
                <div className="container py-5">
                    <div className="row align-items-center">

                        {/* Image - Left on desktop, top on mobile */}
                        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 text-center">
                            <img
                                src="/create2.webp"
                                alt="Create Account"
                                className="img-fluid"
                                style={{ maxHeight: '400px', objectFit: 'contain' }}
                            />
                        </div>

                        {/* Text Content - Right on desktop, bottom on mobile */}
                        <div className="col-lg-6 col-md-12 text-md-start text-start">
                            <h2 className="text-heading fw-bold">Step 2</h2>
                            <h2 className="fw-bold mb-3">Explore Providers</h2>
                            <p className="mb-4">Explore our range of elite fund managers.</p>
                            <Link to="/quickstart/create-account" className="btn btn-bg-start fs-5 text-white">Explore</Link>
                        </div>

                    </div>
                </div>
            </div>

            {/* ----------Step 3-------- */}

            <div className="container-fluid py-5 bg-home">
                <div className="container py-5">
                    <div className="row align-items-center">

                        {/* Image - Left on desktop, top on mobile */}
                        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 text-center">
                            <img
                                src="/create3.webp"
                                alt="Create Account"
                                className="img-fluid"
                                style={{ maxHeight: '400px', objectFit: 'contain' }}
                            />
                        </div>

                        {/* Text Content - Right on desktop, bottom on mobile */}
                        <div className="col-lg-6 col-md-12 text-md-start text-start">
                            <h2 className="text-heading fw-bold">Step 3</h2>
                            <h2 className="fw-bold mb-3">Activate copy-trading</h2>
                            <p className="mb-4">Select a fund manager and start copy trading</p>
                            <Link to="/quickstart/create-account" className="btn btn-bg-start fs-5 text-white">Activate</Link>
                        </div>

                    </div>
                </div>
            </div>

            {/* ----FAQ'S--------------- */}


            <div className="container-fluid bg-black text-white py-5 ">
                <div class="container my-5 bg-black text-white p-4 rounded">
                    <h2 class="mb-4 text-center">FAQs</h2>

                    <div class="accordion accordion-flush" id="faqAccordion">

                        <div class="accordion-item bg-black text-white">
                            <h2 class="accordion-header" id="faqHeadingOne">
                                <button
                                    class="accordion-button bg-black fs-3 text-white"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faqCollapseOne"
                                    aria-expanded="true"
                                    aria-controls="faqCollapseOne">
                                    Is BlackBull CopyTrader free?
                                </button>
                            </h2>
                            <div
                                id="faqCollapseOne"
                                class="accordion-collapse collapse  show"
                                aria-labelledby="faqHeadingOne"
                                data-bs-parent="#faqAccordion">
                                <div class="accordion-body bg-black text-white">
                                    cTrader is a trading platform available for Windows, macOS, Android, iOS, and Web.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item bg-black text-white">
                            <h2 class="accordion-header" id="faqHeadingTwo">
                                <button
                                    class="accordion-button fs-3 collapsed bg-black text-white"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faqCollapseTwo"
                                    aria-expanded="false"
                                    aria-controls="faqCollapseTwo">
                                    Is there a minimum deposit required to copy-trade?
                                </button>
                            </h2>
                            <div
                                id="faqCollapseTwo"
                                class="accordion-collapse collapse"
                                aria-labelledby="faqHeadingTwo"
                                data-bs-parent="#faqAccordion">
                                <div class="accordion-body bg-black text-white">
                                    You can download it from the official website or app stores like Microsoft Store, Mac App Store, Google Play, and App Store.
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item bg-black text-white">
                            <h2 class="accordion-header" id="faqHeadingThree">
                                <button
                                    class="accordion-button fs-3 collapsed bg-black text-white"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faqCollapseThree"
                                    aria-expanded="false"
                                    aria-controls="faqCollapseThree">
                                    Can I copy-trade multiple Providers at the same time?
                                </button>
                            </h2>
                            <div
                                id="faqCollapseThree"
                                class="accordion-collapse collapse"
                                aria-labelledby="faqHeadingThree"
                                data-bs-parent="#faqAccordion">
                                <div class="accordion-body bg-black text-white">
                                    Linux users can access cTrader using the Web version, as no native Linux installer is available.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default CopyTrader