import React from 'react'

function RegionalRepresentatives() {
  return (
    <div className='bg-home'>
      <div className="d-flex align-items-center justify-content-center text-white  mt-lg-2 mx-lg-3 rounded rounded-4" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.7)),url('/compliance.avif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '98vh'
      }}>
        <div>
          <h1 className='fw-bolder display-2 p-4 '>Regional Representatives</h1>
        </div>
      </div>

      <div className=" bg-free-trial text-white py-3 py-lg-5 py-md-5 mt-lg-2 mx-lg-3 rounded rounded-4 ">
        <div className="container py-3 py-lg-5 py-md-5">
          <div className="row text-start">
            <div className="col-lg-6 ps-lg-5 border-end">
              <h1> BlackBull Partners<br /> Regional <br />Representatives</h1>
            </div>
            <div className="col-lg-6  mt-4">
              <p className="fs-5 text-light ">
                BlackBull Markets has always been globally focused and retail traders around the world seek the trading experience we provide.

                BlackBull Markets is always looking to expand into new markets, and our clients are helping us by joining in our business model and becoming Company affiliates.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* -----Key Fetures -------- */}
      <div className=" bg-home py-3 py-lg-5 py-md-5 border border-3 my-lg-2 mx-lg-3 rounded rounded-4">
        <div className="container py-3 py-lg-5 py-md-5">
          <h1 className="text-center text-heading mb-5">
            Key Features Of Our Becoming A Regional Representative
          </h1>

          <ul className="list-unstyled ms-0 ps-0 text-start" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <li className="d-flex align-items-start gap-3 mb-3">
              <i className="bi bi-star border rounded-5 p-2 border-primary text-heading fs-5 mt-1"></i>
              <span className="fw-semibold">
                You Are Your Own Boss
              </span>
            </li>

            <li className="d-flex align-items-start gap-3 mb-3">
              <i className="bi bi-star border rounded-5 p-2 border-primary text-primary fs-5 mt-1"></i>
              <span className="fw-semibold">
                Gain Access To Our State-Of-The-Art Proprietary Aggregation Software
              </span>
            </li>

            <li className="d-flex align-items-start gap-3 mb-3">
              <i className="bi bi-star border rounded-5 p-2 border-primary text-primary fs-5 mt-1"></i>
              <span className="fw-semibold">
                Become A Company Partner
              </span>
            </li>

            <li className="d-flex align-items-start gap-3 mb-3">
              <i className="bi bi-star border rounded-5 p-2 border-primary text-primary fs-5 mt-1"></i>
              <span className="fw-semibold">
                Large Growth Potential
              </span>
            </li>
          </ul>
        </div>
      </div>



      {/* ---------------- */}
      <div className=" py-3 py-lg-5 py-md-5 mx-lg-3 rounded rounded-4" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)),
            url('/compliance.avif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '80vh'
      }}>
        <div className="container d-flex flex-column align-items-center px-lg-5 px-md-5 "

        >
          {/* Centered heading */}
          <h2 className="text-start text-primary-emphasis mb-4">
            If You Have An Interest In Joining The BlackBull Group As A Representative In Your Country And Have The Potential To Work Towards The Following Targets, We Would Be Interested In Hearing From You:
          </h2>

          {/* Left-aligned list */}
          <div className="d-flex text-start flex-column align-items-start gap-2 w-100 mb-2 lh-lg">
            <div className="d-flex align-items-center gap-3">
              <i className="bi bi-star border rounded-5 p-2 border-primary text-primary"></i>
              <span className="fw-semibold">Experience As a BlackBull Markets IB, With 50-100 Clients</span>
            </div>
            <div className="d-flex align-items-center gap-3">
              <i className="bi bi-star border rounded-5 p-2 border-primary text-primary"></i>
              <span className="fw-semibold">Excellent Client Facing Skill And Business-Related Acumen</span>
            </div>
            <div className="d-flex align-items-center gap-3">
              <i className="bi bi-star border rounded-5 p-2 border-primary text-primary"></i>
              <span className="fw-semibold">Understand Local FX, Security And Equity Market Conditions</span>
            </div>
            <div className="d-flex align-items-center gap-3">
              <i className="bi bi-star border rounded-5 p-2 border-primary text-primary"></i>
              <span className="fw-semibold">At Least 2 Years’ Experience With References Regarding Your Work Ethic And Competency</span>
            </div>
          </div>

          {/* Centered paragraph */}
          <p className="text-start mt-3">
            If you don’t fully meet these requirements, we would still be interested in hearing from you. Please reach out to <a href="mailto:accounts@Markettrad.com" className="text-primary">accounts@Markettrad.com</a> to apply to become a regional representative in your country.
          </p>
        </div>
      </div>


    </div>
  )
}

export default RegionalRepresentatives