import React, { useRef } from 'react'
import './ResearchHome.css'

function ResearchHome() {
    //   ------- Daily News Data--------
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -300 : 300,
                behavior: "smooth",
            });
        }
    };

    const cardsData = [
        {
            id: 1,
            img: "/Tesla.webp", // replace with your image
            title: "Why is a shiny block of metal so popular?",
            desc: "I know everyone is obsessed with gold right now, because number go up...",
            date: "8 May 2025",
        },
        {
            id: 2,
            img: "/shiny.webp",
            title: "Auto loans are bad; but earnings are good",
            desc: "Top of mind — yes, Microsoft had a good quarter and so did Meta...",
            date: "1 May 2025",
        },
        {
            id: 3,
            img: "/tariff.webp",
            title: "Have you heard the one about the oil prosp...",
            desc: "I’ve been re-reading speeches Buffett gave to his inner circle...",
            date: "21 April 2025",
        },
        {
            id: 4,
            img: "/challenge.webp",
            title: "Tech stocks are making waves",
            desc: "Technology is booming with AI and Cloud expansion...",
            date: "15 April 2025",
        },
        {
            id: 5,
            img: "/loan.webp",
            title: "Market volatility explained",
            desc: "Economic conditions lead to swings, but smart investors adapt...",
            date: "12 April 2025",
        },
        {
            id: 6,
            img: "/challenge.webp",
            title: "Why commodities are back in trend",
            desc: "From oil to gold, commodities are gaining traction again...",
            date: "10 April 2025",
        },
    ];
    return (
        <div className='bg-home'>
            <div className=" bg-home py-5 bgc-col">
                <div className="container py-5 ">
                    <div className="row align-items-center ">
                        {/* Left Section */}
                        <div className="col-lg-6 text-start text-lg-start mb-4 mb-lg-0">
                            <h1 className="fw-bold display-5 text-white">
                                Daily Expert{" "}
                                <span className="text-primary"></span>
                                <br />
                                Stock Research
                            </h1>
                            <p className="fs-2 mt-3 text-white ">
                                Timely and jargon-free recommendations to<br /> benefit the everyday investor
                            </p>


                        </div>

                        {/* Right Section */}
                        <div className="col-lg-6 text-center">
                            <img
                                src="/button.webp"
                                alt="TradingView Chart"
                                className="img-fluid mt-3 mt-lg-0"
                                style={{ maxHeight: "500px", objectFit: "contain" }}
                            />
                        </div>
                    </div>


                </div>
            </div>

            {/* -----Start Free Trial -----------      */}
            <div className="container-fluid py-2">
                <div className="container py-5">
                    <div className="row align-items-center text-start text-white p-5 text-lg-start bg-free-trial rounded rounded-4">

                        {/* Left Content */}
                        <div className="col-12 col-md-8 col-lg-8 mb-4 mb-lg-0">
                            <h1 className="display-4 fw-bold h-lg-1">1 Month Free Trial</h1>
                            <p className="mb-0 fs-5">
                                BlackBull Research provides timely and jargon-free
                                Institutional-grade stock recommendations to benefit
                                the everyday investor.
                            </p>
                        </div>

                        {/* Right Button */}
                        <div className="col-12 col-md-4 col-lg-4 text-center text-md-end">
                            <button className=" btn-bg-start btn text-white  fs-5 px-4 py-2">
                                Start Free Trial
                            </button>
                        </div>

                    </div>
                </div>
            </div>


            {/* --------Daily News ---------- */}

            <div className="container-fluid  py-5 bg-home">
                <div className="container ">
                    {/* Section Header */}
                    <div className="text-center mb-4">
                        <h1 className="fw-bold text-heading  display-3">Daily News</h1>
                        <p className="text-muted">
                            Never miss an opportunity with high-impact economic event coverage,
                            expert commentary,<br/> videos, and more from our global market analysts,{" "}
                            <a href="#">view more</a>.
                        </p>
                    </div>

                    {/* Cards Wrapper */}
                    <div className="position-relative">
                        <div
                            className="d-flex overflow-auto px-2"
                            style={{ scrollBehavior: "smooth" }}
                            ref={scrollRef}
                        >
                            {cardsData.map((card) => (
                                <div
                                    key={card.id}
                                    className=" shadow-sm mb-4 mx-2 custom-card"
                                    style={{ minWidth: "300px", maxWidth: "300px" }}
                                >
                                    <img
                                        src={card.img}
                                        className="card-img-top"
                                        alt={card.title}
                                        style={{ height: "200px", objectFit: "cover" }}
                                    />
                                    <div className="p-3">
                                        <h5 className="card-title fw-bold text-heading">
                                            {card.title}
                                        </h5>
                                        <p className="card-text text-muted">{card.desc}</p>
                                        <p className=" text-heading small mb-0">{card.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Left Arrow */}
                        <button
                            className="btn btn-dark text-white rounded rounded-5 border position-absolute  top-50 start-0 bi bi-arrow-left fs-4 translate-middle-y"
                            style={{ zIndex: 1 }}
                            onClick={() => scroll("left")}
                        >

                        </button>

                        {/* Right Arrow */}
                        <button
                            className="btn btn-dark text-white rounded rounded-5 border position-absolute top-50 end-0 bi bi-arrow-right fs-4 translate-middle-y"
                            style={{ zIndex: 1 }}
                            onClick={() => scroll("right")}
                        >

                        </button>
                    </div>
                </div>
            </div>
            {/* --------Choose Your Plan ------------ */}
            
            <div className="container-fluid  py-5 " >
                <div className="container text-center">
                    {/* Heading */}
                    <h2 className="fw-bold text-heading display-6">Choose Your Plan</h2>
                    <p className=" text-muted mb-5">
                        <i className="bi bi-lock-fill  me-2"></i>
                        Access market intelligence tailored for serious investors. Choose a plan that fits your needs—whether you’re looking for timely insights, in-depth analysis, or custom research solutions backed by real expertise, view more.
                    </p>

                    {/* Responsive Grid */}
                    <div className="row g-4">
                        {/* Plan 1 */}
                        <div className="col-12 col-md-6 col-lg-4 ">
                            <div className="p-4 bg-white text-dark rounded  shadow align-content-center border border-primary custom-card h-100 " style={{ height: "70vh" }}>
                                <h5 className="fw-bold fs-1 text-heading">TradingView Essential</h5>
                                <span className="badge bg-home text-heading mt-2">
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
                                <button className="btn btn-bg-start text-white  mt-3">Subscribe Now</button>
                            </div>
                        </div>

                        {/* Plan 2 */}
                        <div className="col-12 col-md-6 col-lg-4 ">
                            <div className="p-4 bg-white text-dark rounded shadow align-content-center border border-primary custom-card h-100" >
                                <h5 className="fw-bold fs-1 text-heading ">TradingView Plus</h5>
                                <span className="badge bg-home text-dark mt-2">
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
                                <button className="btn btn-bg-start text-white  mt-3">Subscribe Now</button>
                            </div>
                        </div>

                        {/* Plan 3 */}
                        <div className="col-12 col-md-6 col-lg-4 ">
                            <div className="p-4 bg-white text-dark border border-primary rounded shadow h-100 align-content-center custom-card">
                                <h5 className="fw-bold fs-1 text-heading">Custom Research</h5>
                                <span className="badge bg-home text-heading mt-2">
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
                                <button className="btn btn-bg-start text-white  mt-3">Request a Quote</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  ResearchHome;