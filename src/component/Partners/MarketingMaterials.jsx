import React from 'react'

function MarketingMaterials() {

    const resources = [
        {
            title: "Dynamic HTML5 Banners",
            content: "Quickly get started with our wide range of display advertising material available in various sizes, formats, and languages...",
            icon: "bi-star" // single Bootstrap icon
        },
        {
            title: "Landing Pages",
            content: "We have a collection of tailor-made landing pages that are fully responsive, mobile-friendly, and available in multiple languages...",
            icon: "bi-card-text"
        },
        {
            title: "eBooks",
            content: "BlackBull Markets has a rapidly growing database of educational material and we ensure that our clients are always up to date with industry trends...",
            icon: "bi-book"
        },
        {
            title: "Emails",
            content: "If you’re an email marketing guru, then you can select from our suite of custom-designed email templates crafted by our industry veteran copywriting experts...",
            icon: "bi-envelope"
        },
        {
            title: "Widgets",
            content: "Take your website to the next level by adding live market data with our library of customisable tools and widgets...",
            icon: "bi-puzzle"
        },
        {
            title: "Logos",
            content: "We have a selection of high-quality brand logos available to use in a range of different sizes...",
            icon: "bi-image"
        },
        {
            title: "Videos",
            content: "Video is one of our premier advertising formats. We have invested in the development of all forms of video content...",
            icon: "bi-camera-video"
        },
        {
            title: "Articles and Reviews",
            content: "If you’re not sure what to write or how to get started with your content marketing strategy, we can help...",
            icon: "bi-pencil"
        },
          {
            title: "Logos",
            content: "We have a selection of high-quality brand logos available to use in a range of different sizes...",
            icon: "bi-image"
        },
    ];
    return (
        <div className='bg-home'>
            <div className="d-flex align-items-center justify-content-center text-white" style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url('/compliance.avif')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '50vh'
            }}>
                <div>
                    <h3 className='fw-bolder display-4'>Marketing Materials</h3>
                </div>
            </div>

            <div className="container-fluid py-5 bg-free-trial py-lg-5 py-md-5 ">
                <div className="row align-items-center justify-content-between px-3 px-md-5 py-lg-5 py-md-5">

                    {/* Left Column */}
                    <div className="col-12 col-md-6 mb-4 mb-md-0 text-center text-md-start border-end">
                        <h2 className="fw-bold text-white mb-3 text-start" style={{ fontSize: "2.5rem", lineHeight: "1.3" }}>
                            Why Partner <br /> with BlackBull Markets?
                        </h2>
                    </div>

                    {/* Right Column */}
                    <div className="col-12 col-md-6 text-start text-md-start ">
                        <h5
                            className="text-light fw-normal lh-lg ms-3"
                            style={{ fontSize: "1.1rem", margin: "0 auto" }}
                        >
                            Partnering with BlackBull Markets offers unlimited earning potential,
                            competitive rebates, and custom structures to suit your needs. You’ll
                            also benefit from advanced tracking tools, marketing resources, and
                            support from a personal Account Manager.
                        </h5>
                    </div>

                </div>
            </div>

            {/* --------Marketing Cards-------- */}
            <div className="container-fluid">
                <div className="container py-5 mx-lg-5 px-3">
                    {/* Section Description */}
                    <h6 className="lh-base px-lg-3 mx-lg-2 text-start">
                        We take pride in having proven high-converting marketing material and make sure that we’re always following cutting-edge marketing trends. All our creative is available in multiple languages and getting started is easy – our affiliate portal has everything you need right in one place.
                        <br />
                        Our team is available to assist you in finding or promoting the right resources for your needs, so you can focus on growth and start building your business using the same resources we used to build the BlackBull Markets brand.
                    </h6>

                    <div className="row g-4 my-2 justify-content-center">
                        {resources.map((item, index) => (
                            <div key={index} className="col-12 col-md-6 col-lg-4 d-flex">
                                <div className="card shadow-sm p-4 lh-lg w-100 d-flex flex-column">
                                    {/* Top Icons */}
                                    <div className="d-flex justify-content-between gap-2 mb-3 text-heading">
                                        <i className={`bi ${item.icon} fs-2`}></i>
                                        <i className="bi bi-arrow-up-right-circle fs-2"></i>
                                    </div>

                                    {/* Title */}
                                    <h5 className="card-title text-heading-emphasis fw-bold mb-2 text-start">
                                        {item.title}
                                    </h5>

                                    {/* Content */}
                                    <p className="card-text text-start flex-grow-1">
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default MarketingMaterials