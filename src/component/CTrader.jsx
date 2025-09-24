import React from 'react'

function CTrader() {
    return (
        <div>
            <style>
                {
                    `.trading-view {
                         background: linear-gradient(to left, #4028E9, #000000);}            
                    `
                }

            </style>
            <div className="container-fluid bg-black text-white py-5 trading-view">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Section */}
                        <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
                            <h1 className="fw-bold display-5">
                                cTrader{" "}
                                <span className="text-primary"></span>
                                <br />
                                With Market Trad
                            </h1>
                            <p className="fs-2 mt-3 text-white fw-bold">
                                Access cTrader with no minimum deposit.
                            </p>

                            {/* Buttons */}
                            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mt-4">
                                <input type="email" name="" id="" className='form-control w-50 form-control-sm ' placeholder='Email address' />
                                <button className="btn btn-success px-4 py-2 fw-bold">
                                    Join Now
                                </button>
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
                        <a href="#" className="btn btn-dark d-flex align-items-center px-3">
                            <img
                                src="/Frame8417.png"
                                alt="TV Logo"
                                style={{ height: "20px", marginRight: "8px" }}
                            />
                            GET IT FOR WEB
                        </a>

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
            {/* ----------- WHy choose CTrader ----------- */}

            <div className="container-fluid bg-light text-black py-5">
                <div className="container">
                    <div className="row align-items-center  g-5">

                        {/* Left Section */}
                        <div className="col-12 col-lg-6 text-center  text-md-start me-lg-0">
                            <h1 className="fw-bold">Why Market Trad</h1>
                            <p className="text-secondary mt-3 fs-5 pb-3 border-1 border-bottom">
                                BlackBull Markets is a multi-regulated broker headquartered in
                                Auckland, New Zealand, providing an institutional trading experience
                                globally. Our mission is to provide traders with a superior trading
                                experience through innovative technology like TradingView, and
                                exceptional customer service.
                            </p>

                            {/* Feature List */}
                            <div className="d-flex align-items-start mb-4 justify-content-center justify-content-md-start">
                                <i className="bi bi-bar-chart fs-1 text-primary me-3"></i>
                                <div>
                                    <p className="fw-bold fs-5 mb-1">1:500 Leverage</p>
                                    <p className="text-secondary mb-0">
                                        Control larger positions with less capital.
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex align-items-start mb-4 justify-content-center justify-content-md-start">
                                <i className="bi bi-currency-exchange fs-1 text-primary me-3"></i>
                                <div>
                                    <p className="fw-bold fs-5 mb-1">Low Spreads</p>
                                    <p className="text-secondary mb-0">
                                        Enjoy competitive spreads starting from 0.0 pips.
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex align-items-start mb-4 justify-content-center justify-content-md-start">
                                <i className="bi bi-shield-lock fs-1 text-primary me-3"></i>
                                <div>
                                    <p className="fw-bold fs-5 mb-1">Secure Trading</p>
                                    <p className="text-secondary mb-0">
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
            {/* -------How to Trade--------- */}
            <div className="container-fluid bg-light align-content-center border " style={{ height: '80vh' }}>
                <div className="container">
                    <div className="row align-items-center border py-5 border-primary rounded p-4">
                        {/* Left Section */}
                        <div className="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start">
                            <h1 className="fw-bold">
                                How to trade on <span className='text-primary '> cTrader &nbsp;</span>
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

            <div className="container-fluid bg-light py-5 ">
                <div className="container rounded-4 p-3 ">
                    <h1 className="text-center mb-5 fw-bold">Tradable Assets</h1>

                    <div className="row g-4 justify-content-center">
                        {/* Forex */}
                        <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                            <div className="p-4 rounded-4 shadow bg-body w-100 h-100">
                                <div className="mb-3 ">
                                    <img src="Frame8415.png" alt="Forex" style={{ width: "50px" }} />
                                </div>
                                <h3 className="fs-4 fw-bold">Forex</h3>
                                <p className="text-secondary">
                                    70+ major, minor, and exotic currency pairs.
                                </p>
                            </div>
                        </div>

                        {/* Commodities */}
                        <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                            <div className="p-4 rounded-4 shadow bg-body w-100 h-100">
                                <div className="mb-3">
                                    <img src="Frame8416.png" alt="Commodities" style={{ width: "50px" }} />
                                </div>
                                <h3 className="fs-4 fw-bold">Commodities</h3>
                                <p className="text-secondary">
                                    Energies like crude oil, and agricultural cash crops.
                                </p>
                            </div>
                        </div>

                        {/* Equities */}
                        <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                            <div className="p-4 rounded-4 shadow bg-body w-100 h-100">
                                <div className="mb-3">
                                    <img src="Frame8417.png" alt="Equities" style={{ width: "50px" }} />
                                </div>
                                <h3 className="fs-4 fw-bold">Equities</h3>
                                <p className="text-secondary">
                                    We offer stocks across 27 global markets like Apple, Alibaba, BMW and Netflix.
                                </p>
                            </div>
                        </div>

                        {/* Indices */}
                        <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                            <div className="p-4 rounded-4 shadow bg-body w-100 h-100">
                                <div className="mb-3">
                                    <img src="Frame8418.png" alt="Indices" style={{ width: "50px" }} />
                                </div>
                                <h3 className="fs-4 fw-bold">Indices</h3>
                                <p className="text-secondary">
                                    Major stock indices like US30, S&amp;P500, and NAS100.
                                </p>
                            </div>
                        </div>

                        {/* Metals */}
                        <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                            <div className="p-4 rounded-4 shadow bg-body w-100 h-100">
                                <div className="mb-3">
                                    <img src="Frame8419.png" alt="Metals" style={{ width: "50px" }} />
                                </div>
                                <h3 className="fs-4 fw-bold">Metals</h3>
                                <p className="text-secondary">
                                    Precious and industry metals like gold, silver, and copper.
                                </p>
                            </div>
                        </div>

                        {/* View All */}
                        <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                            <div className="p-4 rounded-4 shadow bg-body w-100 h-100">
                                <div className="mb-3">
                                    <img src="Frame8411.png" alt="View All" style={{ width: "50px" }} />
                                </div>
                                <h3 className="fs-4 fw-bold">View all</h3>
                                <p className="text-secondary">
                                    Explore Market.Trad's diverse range of tradable assets.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* --------Why Market Trad Markets?-------- */}
        <div className="container-fluid bg-light align-content-center border " style={{ height: '80vh' }}>
                <div className="container">
                    <div className="row align-items-center border py-5 border-primary rounded p-4">
                        {/* Left Section */}
                        <div className="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start">
                            <h1 className="fw-bold text-primary-emphasis">
                                Why Market Trad ?
                            </h1>
                            <p className="text-secondary mt-3 fs-6">
                                BlackBull Markets is a multi-regulated broker headquartered in Auckland, New Zealand, providing an institutional trading experience globally.<br/>Our mission is to provide traders with a superior trading experience through innovative technology like cTrader, and exceptional customer service.
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
        </div>
    )
}

export default CTrader