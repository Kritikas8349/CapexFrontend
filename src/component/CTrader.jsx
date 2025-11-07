import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function CTrader() {
    const [email, setEmail] = useState("");
    const [placeholder, setPlaceholder] = useState("Email address");
    const navigate = useNavigate();

    const handleJoinNow = () => {
        if (email.trim() === "") {
            // Clear input and show error message in placeholder
            setEmail("");
            setPlaceholder("*Email is required!");
        } else {
            navigate("/quickstart/create-account");
        }
    };
    return (
        <div className='bg-home'>
            <style>
                {
                    `.trading-view {
                         background: linear-gradient(to bottom right, #000000, #231586);}            
                    `
                }

            </style>
            <div className=" bg-page align-content-center text-white py-5 py-lg-4 py-md-5 trading-view my-lg-2 mx-lg-3 rounded rounded-4 min-vh-90" style={{minHeight: '98vh'}}>
                <div className="container align-items-center">
                    <div className="row align-items-center mt-5">

                        {/* LEFT SECTION */}
                        <div className="col-lg-6 text-start mb-4 mb-lg-0">
                            <h1 className="fw-bold display-5">
                                cTrader <br />
                                <span className="text-heading">With Market Trad</span>
                            </h1>
                            <p className="fs-4 mt-3 text-white fw-semibold">
                                Access cTrader with no minimum deposit.
                            </p>

                            {/* Email Input & Button */}
                            <div className="row g-3 justify-content-center">
                                {/* Email Input */}
                                <div className="col-12 col-md-8">

                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        placeholder={placeholder}
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            // Reset placeholder when user starts typing again
                                            if (placeholder !== "Email address") {
                                                setPlaceholder("Email address");
                                            }
                                        }}
                                    />

                                </div>

                                {/* Join Button */}
                                <div className="col-12 col-md-4 d-grid">
                                    <button
                                        onClick={handleJoinNow}
                                        className="btn btn-bg-start rounded rounded-5 p-2 px-4 text-white d-flex align-items-center justify-content-center"
                                    >
                                        Join Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SECTION */}
                        <div className="col-lg-6 text-center">
                            <img
                                src="/leptop1.webp"
                                alt="TradingView Chart"
                                className="img-fluid mt-3 mt-lg-0"
                                style={{ maxHeight: "500px", objectFit: "contain" }}
                            />
                        </div>
                    </div>

                    {/* STORE BUTTONS */}
                    <div className="d-flex flex-wrap justify-content-center gap-3 mt-5">
                        <Link to="https://www.tradingview.com/chart/" className="btn btn-dark rounded rounded-5 p-2 px-4 d-none d-lg-flex d-md-flex align-items-center px-3">
                            <img
                                src="/Frame8417.png"
                                alt="TV Logo"
                                style={{ height: "20px", marginRight: "8px" }}
                            />
                            GET IT FOR WEB
                        </Link>

                        <Link to="#" className="d-flex align-items-center px-3 py-2 rounded">
                            <img src="/microsoft.svg" alt="Microsoft Store" style={{ height: "35px" }} />
                        </Link>

                        <Link to="#" className="d-flex align-items-center px-3 py-2 rounded">
                            <img src="/Mac.webp" alt="Mac App Store" style={{ height: "35px" }} />
                        </Link>

                        <Link to="#" className="d-flex align-items-center px-3 py-2 rounded">
                            <img src="/Google-Play (1).svg" alt="Google Play" style={{ height: "35px" }} />
                        </Link>

                        <Link to="#" className="d-flex align-items-center px-3 py-2 rounded">
                            <img src="/Mac.webp" alt="App Store" style={{ height: "35px" }} />
                        </Link>
                    </div>
                </div>
            </div>


            {/* ----------- WHy choose CTrader ----------- */}

            <div className=" bg-page text-black py-2 py-lg-5 py-md-5  my-lg-2 mx-lg-3 rounded rounded-4">
                <div className="container py-2 py-lg-5 py-md-5">
                    <div className="row align-items-center g-5">

                        {/* LEFT SECTION */}
                        <div className="col-12 col-lg-6 text-start">
                            <h1 className="fw-bold text-heading">Why Market Trad</h1>
                            <p className="text-secondary mt-3 fs-6 fs-md-5 pb-3 border-bottom">
                                BlackBull Markets is a multi-regulated broker headquartered in
                                Auckland, New Zealand, providing an institutional trading experience
                                globally. Our mission is to provide traders with a superior trading
                                experience through innovative technology like TradingView, and
                                exceptional customer service.
                            </p>

                            {/* Feature List */}
                            <div className="d-flex align-items-start mb-4 justify-content-start">
                                <i className="bi bi-bar-chart fs-1 text-heading me-3"></i>
                                <div>
                                    <p className="fw-bold fs-5 mb-1">1:500 Leverage</p>
                                    <p className="text-secondary mb-0">
                                        Control larger positions with less capital.
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex align-items-start mb-4 justify-content-start">
                                <i className="bi bi-currency-exchange fs-1 text-heading me-3"></i>
                                <div>
                                    <p className="fw-bold fs-5 mb-1">Low Spreads</p>
                                    <p className="text-secondary mb-0">
                                        Enjoy competitive spreads starting from 0.0 pips.
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex align-items-start mb-4 justify-content-start">
                                <i className="bi bi-shield-lock fs-1 text-heading me-3"></i>
                                <div>
                                    <p className="fw-bold fs-5 mb-1">Secure Trading</p>
                                    <p className="text-secondary mb-0">
                                        Trade confidently with our regulated and secure platform.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SECTION */}
                        <div className="col-12 col-lg-6 text-center">
                            <img
                                src="/leptop1.webp"
                                alt="TradingView Chart"
                                className="img-fluid w-100 mt-4 mt-lg-0"
                                style={{ objectFit: "contain" }}
                            />
                        </div>

                    </div>
                </div>
            </div>

            {/* -------How to Trade--------- */}
            <div className=" bg-page align-content-center py-2 py-lg-5 py-md-5  my-lg-2 mx-lg-3 rounded rounded-4 " >
                <div className="container py-1 py-lg-5 py-md-5">
                    <div className="row align-items-center  py-5 border-color rounded p-4">
                        {/* Left Section */}
                        <div className="col-lg-6 mb-4 mb-lg-0 text-start text-lg-start">
                            <h1 className="fw-bold">
                                How to trade on <span className='text-heading '> cTrader &nbsp;</span>
                                with BlackBull Markets
                            </h1>
                            <p className="text-secondary mt-3 fs-5">
                                Discover the essentials of cTrader in 4-minutes. This video walkthrough introduces the five key components of the platform, ensuring you can confidently embark on your trading journey with cTrader. See our cTrader tutorials here.
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


            {/* ---------Tradable Assets----------   */}

            <div className=" bg-page py-2 py-lg-5 py-md-5  my-lg-2 mx-lg-3 rounded rounded-4">
                <div className="container rounded-4 p-3 py-1 py-lg-5 py-md-5">
                    <h1 className="text-center mb-5 fw-bold text-heading">Tradable Assets</h1>

                    <div className="row g-4 justify-content-center">
                        {/* Forex */}
                        <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center"  onClick={()=>{navigate('/markets/forex')}}>
                            <div className="p-4 rounded-4 custom-card bg-body w-100 h-100 text-start">
                                <div className="mb-3">
                                    <img src="/Frame8415.png" alt="Forex" style={{ width: "50px" }} />
                                </div>
                                <h3 className="fs-4 fw-bold">Forex</h3>
                                <p className="text-secondary mb-0">
                                    70+ major, minor, and exotic currency pairs.
                                </p>
                            </div>
                        </div>

                        {/* Commodities */}
                        <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center" onClick={()=>{navigate('/markets/commodities')}}>
                            <div className="p-4 rounded-4 custom-card bg-body w-100 h-100 text-start">
                                <div className="mb-3">
                                    <img src="/Frame8416.png" alt="Commodities" style={{ width: "50px" }} />
                                </div>
                                <h3 className="fs-4 fw-bold">Commodities</h3>
                                <p className="text-secondary mb-0">
                                    Energies like crude oil, and agricultural cash crops.
                                </p>
                            </div>
                        </div>

                        {/* Equities */}
                        <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center" onClick={()=>{navigate('/market/equities')}}>
                            <div className="p-4 rounded-4 custom-card bg-body w-100 h-100 text-start">
                                <div className="mb-3">
                                    <img src="/Frame8417.png" alt="Equities" style={{ width: "50px" }} />
                                </div>
                                <h3 className="fs-4 fw-bold">Equities</h3>
                                <p className="text-secondary mb-0">
                                    We offer stocks across 27 global markets like Apple, Alibaba, BMW and Netflix.
                                </p>
                            </div>
                        </div>

                        {/* Indices */}
                        <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center" onClick={()=>{navigate('/markets/indices')}}>
                            <div className="p-4 rounded-4 custom-card bg-body w-100 h-100 text-start">
                                <div className="mb-3">
                                    <img src="/Frame8418.png" alt="Indices" style={{ width: "50px" }} />
                                </div>
                                <h3 className="fs-4 fw-bold">Indices</h3>
                                <p className="text-secondary mb-0">
                                    Major stock indices like US30, S&amp;P500, and NAS100.
                                </p>
                            </div>
                        </div>

                        {/* Metals */}
                        <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center" >
                            <div className="p-4 rounded-4 custom-card bg-body w-100 h-100 text-start">
                                <div className="mb-3">
                                    <img src="/Frame8419.png" alt="Metals" style={{ width: "50px" }} />
                                </div>
                                <h3 className="fs-4 fw-bold">Metals</h3>
                                <p className="text-secondary mb-0">
                                    Precious and industry metals like gold, silver, and copper.
                                </p>
                            </div>
                        </div>

                        {/* View All */}
                        <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center" onClick={()=>{navigate('/markets/futures')}}>
                            <div className="p-4 rounded-4 custom-card bg-body w-100 h-100 text-start">
                                <div className="mb-3">
                                    <img src="/Frame8411.png" alt="View All" style={{ width: "50px" }} />
                                </div>
                                <h3 className="fs-4 fw-bold">View all</h3>
                                <p className="text-secondary mb-0">
                                    Explore Market.Trad's diverse range of tradable assets.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* --------Why Market Trad Markets?-------- */}
            <div className=" bg-page align-content-center border py-2 py-lg-5 py-md-5  my-lg-2 mx-lg-3 rounded rounded-4 " >
                <div className="container py-2 py-lg-5 py-md-5">
                    <div className="row align-items-center  py-5  rounded p-4">
                        {/* Left Section */}
                        <div className="col-lg-6 mb-4 mb-lg-0 text-start text-lg-start">
                            <h1 className="fw-bold text-heading">
                                Why Market Trad ?
                            </h1>
                            <p className="text-secondary mt-3 fs-5">
                                BlackBull Markets is a multi-regulated broker headquartered in Auckland, New Zealand, providing an institutional trading experience globally.<br />Our mission is to provide traders with a superior trading experience through innovative technology like cTrader, and exceptional customer service.
                            </p>
                        </div>

                        {/* Right Section (Video) */}
                        <div className="col-lg-6 text-center">
                            <div className="ratio ratio-16x9">
                                <iframe
                                    src="https://www.youtube.com/embed/xHU5MHuUSKI" // replace with actual video
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

            {/* ------------Blue Theme multiple Cards---------- */}

            <div className=" bg-page py-3 py-lg-5 py-md-5 my-1  my-lg-2 mx-lg-3 rounded rounded-4">
                <div className="container rounded-4 p-3 py-3 py-lg-5 py-md-5">
                    <div className="row g-4 justify-content-center">
                        {/* Forex */}
                        <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                            <div className="p-4 rounded-2 custom-card bg-body w-100 h-100 text-start">
                                <div className="mb-3">
                                    <img src="/Frame8415.png" alt="Forex" style={{ width: "50px" }} />
                                </div>
                                <h3 className="fs-4 text-heading-emphasis fw-bold mb-2">Forex</h3>
                                <p className="text-secondary mb-0">
                                    70+ major, minor, and exotic currency pairs.
                                </p>
                            </div>
                        </div>

                        {/* Commodities */}
                        <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                            <div className="p-4 rounded-2 custom-card bg-body w-100 h-100 text-start">
                                <div className="mb-3">
                                    <img src="/Frame8416.png" alt="Commodities" style={{ width: "50px" }} />
                                </div>
                                <h3 className="fs-4 text-heading-emphasis fw-bold mb-2">Commodities</h3>
                                <p className="text-secondary mb-0">
                                    Energies like crude oil, and agricultural cash crops.
                                </p>
                            </div>
                        </div>

                        {/* Equities */}
                        <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                            <div className="p-4 rounded-2 custom-card bg-body w-100 h-100 text-start">
                                <div className="mb-3">
                                    <img src="/Frame8417.png" alt="Equities" style={{ width: "50px" }} />
                                </div>
                                <h3 className="fs-4 text-heading-emphasis fw-bold mb-2">Equities</h3>
                                <p className="text-secondary mb-0">
                                    We offer stocks across 27 global markets like Apple, Alibaba, BMW and Netflix.
                                </p>
                            </div>
                        </div>

                        {/* Indices */}
                        <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                            <div className="p-4 rounded-2 custom-card bg-body w-100 h-100 text-start">
                                <div className="mb-3">
                                    <img src="/Frame8418.png" alt="Indices" style={{ width: "50px" }} />
                                </div>
                                <h3 className="fs-4 text-heading-emphasis fw-bold mb-2">Indices</h3>
                                <p className="text-secondary mb-0">
                                    Major stock indices like US30, S&P500, and NAS100.
                                </p>
                            </div>
                        </div>

                        {/* Metals */}
                        <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                            <div className="p-4 rounded-2 custom-card bg-body w-100 h-100 text-start">
                                <div className="mb-3">
                                    <img src="/Frame8419.png" alt="Metals" style={{ width: "50px" }} />
                                </div>
                                <h3 className="fs-4 text-heading-emphasis fw-bold mb-2">Metals</h3>
                                <p className="text-secondary mb-0">
                                    Precious and industry metals like gold, silver, and copper.
                                </p>
                            </div>
                        </div>

                        {/* View All */}
                        <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                            <div className="p-4 rounded-2 custom-card bg-body w-100 h-100 text-start">
                                <div className="mb-3">
                                    <img src="/Frame8411.png" alt="View All" style={{ width: "50px" }} />
                                </div>
                                <h3 className="fs-4 text-heading-emphasis fw-bold mb-2">View all</h3>
                                <p className="text-secondary mb-0">
                                    Explore Market.Trad's diverse range of tradable assets.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* -------How to Copy Trad------------     */}
            <div className=" bg-dark text-white py-1 py-5 py-lg-5 py-md-5 mx-lg-3 rounded rounded-3">
                <div className="container py-1 py-lg-5 py-md-5">
                    <div className="row align-items-center  g-5">

                        {/* Left Section */}
                        <div className="col-12 col-lg-6 text-start  text-md-start me-lg-0">
                            <h1 className="fw-bold text-heading">How to copy trade on
                                cTrader?</h1>
                            <p className="text-white mt-3 fs-5 pb-3 border-1 border-bottom">
                                cTrader Copy is a fully integrated application that lets users copy other traders’ strategies or share their own strategies for others to copy. Access copy trade on cTrader here.
                            </p>

                            {/* Feature List */}
                            <div className="d-flex align-items-start mb-4 justify-content-start ">
                                <i className="bi bi-bar-chart fs-1 text-heading me-3"></i>
                                <div>
                                    <p className="fw-bold fs-5 mb-1">Elite Providers</p>
                                    <p className="text-white mb-0">
                                        Review performance metrics before committing
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex align-items-start mb-4 justify-content-start ">
                                <i className="bi bi-currency-exchange fs-1 text-heading me-3"></i>
                                <div>
                                    <p className="fw-bold fs-5 mb-1">Low Latency</p>
                                    <p className="text-white mb-0">
                                        Enjoy competitive spreads starting from 0.0 pips.
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex align-items-start mb-4 justify-content-start">
                                <i className="bi bi-shield-lock fs-1 text-heading me-3"></i>
                                <div>
                                    <p className="fw-bold fs-5 mb-1">Risk Management</p>
                                    <p className="text-white mb-0">
                                        Trade confidently with our regulated and secure platform.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="col-12 col-lg-6  text-center ">
                            <img
                                src="/leptop1.webp"
                                alt="TradingView Chart"
                                className="img-fluid mt-4 mt-lg-0"
                                style={{ maxHeight: "500px", objectFit: "contain" }}
                            />
                        </div>

                    </div>
                </div>
            </div>

            {/* -------Download trader------------- */}
            <div className=" text-white py-2 py-lg-5 py-md-5 trading-view my-lg-2 mx-lg-3 rounded rounded-3">
                <div className="container py-lg-5">
                    <div className="row align-items-center py-lg-4">
                        {/* Left Section */}
                        <div className="col-12 text-start mb-4">
                            <h1 className="fw-bold display-5">Download cTrader</h1>
                            <p className="fs-5 mt-3 text-white">
                                Click on the appropriate link for your device to download cTrader.<br />
                                Windows, macOS, Android, and iOS users can download and run the
                                installer as normal. Linux users should use cTrader Web to access the
                                platform.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Store Buttons */}
                    <div className="d-flex flex-wrap justify-content-start gap-3 mt-5">
                        {/* TradingView Button */}
                        <Link to="https://www.tradingview.com/chart/"
                            className="btn btn-dark rounded rounded-5 p-2 px-4 d-none d-lg-flex d-md-flex align-items-center px-3"
                        >
                            <img
                                src="/Frame8417.png"
                                alt="TV Logo"
                                style={{ height: "20px", marginRight: "8px" }}
                            />
                            GET IT FOR WEB
                        </Link>

                        {/* Other Store Logos */}
                        <Link to="#"
                            className="d-flex align-items-center px-3 py-2 rounded bg-transparent"
                        >
                            <img
                                src="/microsoft.svg"
                                alt="Microsoft Store"
                                style={{ height: "35px" }}
                            />
                        </Link>

                        <Link to="#"
                            className="d-flex align-items-center px-3 py-2 rounded bg-transparent"
                        >
                            <img
                                src="/Mac.webp"
                                alt="Mac App Store"
                                style={{ height: "35px" }}
                            />
                        </Link>

                        <Link to="#"
                            className="d-flex align-items-center px-3 py-2 rounded bg-transparent"
                        >
                            <img
                                src="/Google-Play (1).svg"
                                alt="Google Play"
                                style={{ height: "35px" }}
                            />
                        </Link>

                        <Link to="#"
                            className="d-flex align-items-center px-3 py-2 rounded bg-transparent"
                        >
                            <img
                                src="/Mac.webp"
                                alt="App Store"
                                style={{ height: "35px" }}
                            />
                        </Link>
                    </div>
                </div>
            </div>
            {/* ----FAQ'S--------------- */}
            <div className=" bg-black text-white py-lg-5 mx-lg-3 rounded rounded-3 ">
                <div class="container bg-black text-white p-4 py-lg-5 rounded">
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
                                    What is cTrader?
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
                                    How do I download cTrader?
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
                                    Can I use cTrader on Linux?
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

export default CTrader