import React from 'react'

function EconomicCalendarRC() {
    return (
        <div>
            <div className="container-fluid py-5 ">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Section */}
                        <div className="col-lg-6 mb-4 mb-lg-0 text-sm-start text-md-start text-lg-start">
                            <h2 className="fw-bold text-primary display-5">Download<br/>
                                Economic Calendar <br/><span className='text-dark'>to iCloud, Google, or Outlook </span></h2>
                            <p className="text-secondary fs-5 mt-3 mb-4 px-3 px-lg-0 text-sm-start">
                               Don’t miss upcoming trading opportunities. Get alerts in your iCloud, Google, or Outlook Calendar of major economic events.
                            </p>

                            {/* Social Icons */}
                            <div className="d-flex justify-content-between justify-content-lg-start gap-3 fw-bold align-items-center text-primary border border-primary border-2 rounded p-1">
                                <span className='fs-3 text-sm-top'>Add to calendar</span><span ><img src="/.png" alt="" /></span><span><img src="/googlelogo.webp" alt="" /></span><span ><img src="/BBM3.webp" alt="" /></span><img src="/BBM5.webp" alt="" /><span ><img src="/googlelogo.webp" alt="" /></span>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="col-lg-6  text-center mt-4 mt-lg-0  ">
                            <img
                                src="/mobile1.webp" // Replace with your image
                                alt="Daily Market Analysis"
                                className="img-fluid"
                                style={{ maxHeight: '500px', width: '100%', objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                </div>
            </div>

        {/* -------Turn Market---------- */}
        <div className="container-fluid border py-5 ">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-6 d-flex flex-column justify-content-between">
                    <div className="brand-name"><img src="/logo.png" alt="" /></div>
                    <div><h1>Turn Market Insights into Trading Success</h1></div>
                    <p>Unlock tools to grow your portfolio, access institutional-grade spreads, and engage with lightning-fast execution—all designed for serious traders.</p>
                    <div></div>
                    <div className='d-flex w-auto justify-content-around'>
                        <button className='btn btn-dark'>Open Live Account  </button>
                        <button className='btn btn-outline-dark'>Try Demo Account</button>
                        </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className='border border-bottom'>
                           <div className="d-flex justify-content-between"><span>Live </span><span></span></div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            </div>
        </div>

        </div>
    )
}

export default EconomicCalendarRC