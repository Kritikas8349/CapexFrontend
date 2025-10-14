import React from 'react'
import { Link } from 'react-router-dom';
function IBOverview() {
    const cardData = [
        {
            title: "No Limits",
            desc: "Unlimited referrals and trading volumes.",
            icon: "bi bi-infinity",
        },
        {
            title: "Rebates",
            desc: "Highly competitive, volume-based rebate structure.",
            icon: "bi bi-cash-stack",
        },
        {
            title: "Marketing Resources",
            desc: "Marketing resources and Multilingual promotional assets.",
            icon: "bi bi-graph-up",
        },
        {
            title: "Commission Tracking",
            desc: "Advanced cookie tracking and web reporting.",
            icon: "bi bi-graph-up",
        },
        {
            title: "Fast Payouts",
            desc: "Fast and reliable payments on time, every time.",
            icon: "bi bi-graph-up",
        },
        {
            title: "24/7 Support",
            desc: "Dedicated IB managers offering around-the-clock support.",
            icon: "bi bi-infinity"
        },
    ];


    const tableData = {
        headers: ["Account Type", "STANDARD", "PRIME", "INSTITUTIONAL"],
        subHeaders: ["", "USD/per closed lot", "USD/per closed lot", "USD/per closed lot"],
        rows: [
            { category: "", account: "FX (ALL)", values: [4, 2, 0.5] },
            { category: "Metals", account: "XAUUSD", values: [4, 2, 0.5] },
            { category: "Cryptos", account: "BTCUSD", values: [3, 3, 3] },
            { category: "Indices", account: "US30", values: [0.1, 0.1, 0.1] },
            { category: "", account: "NAS100", values: [0.1, 0.1, 0.1] },
            { category: "", account: "GER40", values: [0.1, 0.1, 0.1] },
        ],
    };
    return (
        <div className='bg-home'>
            <style>
                {
                    `.custom-placeholder::placeholder {
                    color: white;
                opacity: 1; /* Ensures it’s not faded */}`
                }
            </style>
            <div className="education-section d-flex align-items-center text-white" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url('/compliance.avif')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
                <div className="container align-items-start ">
                    <div className="row bg-transparent">
                        <div className="col-12 col-lg-12 bg-transparent">
                            <div className="content-box p-4 p-md-5 text-start bg-transparent"> {/* Add responsive padding */}
                                <h1 className="fw-bold text-white display-4 text-start mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>Introducing Brokers (IB)
                                    <br /> Overview</h1> {/* mb-3 for spacing */}
                                <h6 className="mb-4  fs-5 text-start text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                                    Access commissions with no limits
                                </h6>
                                <Link to='/education/demo-trade' className="btn btn-bg-start text-white btn-lg fw-bold">Partner Now </Link> {/* btn-lg for a larger button */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* ---------------- */}
            <section className="container-fluid py-5 bg-free-trial ">
                <div className="row align-items-center justify-content-around px-3 px-md-5">

                    {/* Left Column */}
                    <div className="col-12 col-md-6 mb-4 mb-md-0 text-start text-md-start border-end">
                        <h2 className="fw-bold text-white mb-3" style={{ fontSize: "2.5rem", lineHeight: "1.3" }}>
                            Why Partner <br /> with BlackBull Markets?
                        </h2>
                    </div>

                    {/* Right Column */}
                    <div className="col-12 col-md-6 text-start text-md-start">
                        <h5
                            className="text-light fw-normal lh-lg"
                            style={{ fontSize: "1.1rem", maxWidth: "500px", margin: "0 auto" }}
                        >
                            Partnering with BlackBull Markets offers unlimited earning potential,
                            competitive rebates, and custom structures to suit your needs. You’ll
                            also benefit from advanced tracking tools, marketing resources, and
                            support from a personal Account Manager.
                        </h5>
                    </div>

                </div>
            </section>

            {/* ------------------- */}
            <section
                className="container-fluid bg-home  my-5 d-flex align-items-center"
                style={{ minHeight: "85vh" }}
            >
                <div className="container">
                    <div className="row align-items-center " style={{ minHeight: "85vh" }}>
                        {/* Text Column */}
                        <div className="col-12 col-lg-6 text-start mb-4 mb-lg-0 d-flex flex-column justify-content-center">
                            <h2 className="display-4 fw-bold text-heading mb-4">
                                Unlimited earning potential
                            </h2>
                            <p className="lead mb-4">
                                Partnering with BlackBull Markets offers unlimited earning potential,
                                competitive rebates, and custom structures to suit your needs. You’ll
                                also benefit from advanced tracking tools, marketing resources, and
                                support from a personal Account Manager.
                            </p>
                        </div>

                        {/* Image Column */}
                        <div className="col-12 col-lg-6 d-flex justify-content-center">
                            <img
                                src="/spotify.avif"
                                alt="Man in a recording studio"
                                className="img-fluid rounded shadow"
                                style={{ maxHeight: "80%", objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </section>



            {/* ----Introducing Broker------ */}

            <section className="container-fluid bg-home border border-bottom border-primary py-5">
                <div className="row align-items-center g-3 px-lg-5">
                    {/* Text Column */}
                    <div className="col-lg-6 text-start p-4">
                        <h2 className="display-5 fw-bold mb-4 ">
                            Introducing Broker (IB) program benefits
                        </h2>
                        <p className="lead mb-4 text-start text-lg-start">
                            Partnering with BlackBull Markets offers unlimited earning potential,
                            competitive rebates, and custom structures to suit your needs. You’ll
                            also benefit from advanced tracking tools, marketing resources, and
                            support from a personal Account Manager.
                        </p>
                    </div>

                    {/* Cards Column */}
                    <div className="col-lg-6">
                        <div className="row g-4 justify-content-center">
                            {cardData.map((card, index) => (
                                <div key={index} className="col-12 col-sm-6">
                                    <div className="card h-100 text-center shadow-sm border-0 p-4">
                                        <div className="card-body d-flex flex-column justify-content-center">
                                            {card.icon && (
                                                <i className={`${card.icon} fs-2 text-heading mb-3`}></i>
                                            )}
                                            <h5 className="card-title fw-bold">{card.title}</h5>
                                            <p className="card-text">{card.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* -------Who Should join ------------ */}
            <section className="container-fluid bg-home py-5">
                <div className="row align-items-center g-3 px-lg-5">
                    {/* Cards Column */}
                    <div className="col-lg-6">
                        <div className="row g-4 justify-content-center">
                            {cardData.map((card, index) => (
                                <div key={index} className="col-12 col-sm-6">
                                    <div className="card h-100 text-center shadow-sm border-0 p-4">
                                        <div className="card-body d-flex flex-column justify-content-center">
                                            {card.icon && (
                                                <i className={`${card.icon} fs-2 text-heading mb-3`}></i>
                                            )}
                                            <h5 className="card-title fw-bold">{card.title}</h5>
                                            <p className="card-text">{card.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Text Column */}
                    <div className="col-lg-6 ">
                        <h2 className="display-5 fw-bold mb-4 text-center text-lg-start text-heading">
                            Introducing Broker (IB) program benefits
                        </h2>
                        <p className="lead mb-4 text-center text-lg-start">
                            Partnering with BlackBull Markets offers unlimited earning potential,
                            competitive rebates, and custom structures to suit your needs. You’ll
                            also benefit from advanced tracking tools, marketing resources, and
                            support from a personal Account Manager.
                        </p>
                        <div>
                            <img src="/whoshould.webp" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ------Convert More Client ------- */}
            <section className="container-fluid border-color  bg-home   py-5">
                <div className="row align-items-center g-3 px-lg-5 py-4">
                    {/* Text Column */}
                    <div className="col-lg-6 text-start">
                        <h3 className='btn btn-outline-primary fw-bold border-2'>REFERRAL PROMOTIONS</h3>
                        <h2 className="display-5 fw-bold mb-4 text-start text-lg-start text-heading">
                            Convert more clients with Free TradingView Premium
                        </h2>
                        <p className="lead mb-4 text-start text-lg-start">
                            Give your referrals access to free TradingView Essential, Plus, or Premium to support their trading and strengthen your client relationships.
                        </p>
                        <button className='btn btn-bg-start fs-5 text-white'>Partner Now</button>
                    </div>

                    {/* Image Column */}
                    <div className="col-lg-6 text-center ">
                        <img
                            src="/mac1.png"
                            alt="IB Program Benefits"
                            className="img-fluid rounded "
                        />
                    </div>
                </div>
            </section>

            {/* ---------How to join---------- */}
            <div className="container-fluid py-5 bg-home">
                <div className="container">
                    <h1 className='text-center fw-bold'>How to join <span className='text-heading'>Market Trad Partners?</span></h1>
                    {/* --Step1-- */}
                    <div className="row align-items-center py-3">

                        {/* Image - Left on desktop, top on mobile */}
                        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 text-center bg-home p-4">
                            <img
                                src="/mobile2.webp"
                                alt="Create Account"
                                className="img-fluid"
                                style={{ maxHeight: '400px', objectFit: 'contain' }}
                            />
                        </div>

                        {/* Text Content - Right on desktop, bottom on mobile */}
                        <div className="col-lg-6 col-md-12 text-md-start text-start ">
                            <h1 className="text-heading fw-bold">Step 1</h1>
                            <h2 className="fw-bold mb-3">Sign Up</h2>
                            <p className="mb-4">Join BlackBull Partners as an IB in under 3 minutes with our simple registration process.</p>
                        </div>

                    </div>

                    {/* -----step 2------ */}
                    <div className="row align-items-center py-3 border-top">
                        {/* Text Content - Right on desktop, bottom on mobile */}
                        <div className="col-lg-6 col-md-12 text-md-start text-start ">
                            <h1 className="text-heading fw-bold">Step 2</h1>
                            <h2 className="fw-bold mb-3">Reffer traders</h2>
                            <p className="mb-4">Promote BlackBull Markets to your network and refer an unlimited number of clients. Track your business growth in real time.</p>
                        </div>
                        {/* Image - Left on desktop, top on mobile */}
                        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 text-center bg-home p-4">
                            <img
                                src="/banner1.png"
                                alt="Create Account"
                                className="img-fluid"
                                style={{ maxHeight: '400px', objectFit: 'contain' }}
                            />
                        </div>



                    </div>

                    {/* ------step 3------- */}
                    <div className="row align-items-center py-3">

                        {/* Image - Left on desktop, top on mobile */}
                        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 text-center bg-home p-4">
                            <img
                                src="/mobile2.webp"
                                alt="Create Account"
                                className="img-fluid"
                                style={{ maxHeight: '400px', objectFit: 'contain' }}
                            />
                        </div>

                        {/* Text Content - Right on desktop, bottom on mobile */}
                        <div className="col-lg-6 col-md-12 text-md-start text-start ">
                            <h1 className="text-heading fw-bold">Step 3</h1>
                            <h2 className="fw-bold mb-3">Earn commissions</h2>
                            <p className="mb-4">Benefit from highly competitive, volume-based rebate structures with no limits. Enjoy fast and frequent payouts.</p>
                            <button className='btn btn-bg-start text-white'>Sign Up Now</button>
                        </div>

                    </div>
                </div>
            </div>
            {/* ---------Partners Commission Plan Table----------   */}
            <section className="container my-5">
                <h1 className="text-center fw-bold text-heading mb-4">Partner Commission Plan</h1>
                <div className="table-responsive">
                    <table className="table table-bordered text-center align-middle">
                        <thead>
                            <tr>
                                {tableData.headers.map((header, i) => (
                                    <th
                                        key={header.account}
                                        className={`fw-bold ${i === 1
                                            ? "bg-primary text-white"
                                            : i === 2
                                                ? "bg-home"
                                                : i === 3
                                                    ? "bg-dark text-white"
                                                    : "bg-dark text-white"
                                            }`}
                                    >
                                        {header}
                                        <div className="small fw-normal">
                                            {tableData.subHeaders[i]}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.rows.map((row, index) => (
                                <>
                                    {row.category && (
                                        <tr key={`cat-${index}`}>
                                            <td
                                                colSpan={4}
                                                className="fw-bold text-white bg-dark text-center"
                                            >
                                                {row.category}
                                            </td>
                                        </tr>
                                    )}
                                    <tr key={index}>
                                        <td className="fw-semibold">{row.account}</td>
                                        {row.values.map((val, i) => (
                                            <td key={i}>{val}</td>
                                        ))}
                                    </tr>
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-muted small mt-3">
                    *For any symbol not listed above the Commission payout = 0.00
                </p>
            </section>
        </div>
    )
}

export default IBOverview