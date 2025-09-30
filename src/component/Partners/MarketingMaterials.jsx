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
    ];
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center text-white" style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('/compliance.avif')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '60vh'
            }}>
                <div>
                    <h1 className='fw-bolder display-2'>Marketing Materials</h1>
                </div>
            </div>

            <div className="container-fluid  bg-free-trial text-white py-5">
                <div className="container py-5 px-5">
                    <div className="row px-5">
                        <div className="col-lg-6 ps-lg-5 ">
                            <h1 className='text-start'> Blackbull Partners-<br /> Marketing Tools</h1>
                        </div>
                        <div className="col-lg-6">
                            <p className="fs-5">
                                We Want To Make It As Easy As Possible For You To Refer Clients To Us. To optimise your return on advertising spend and drive up your conversion rates, our team have expertly created an extensive suite of marketing tools and resources for you to use across your existing channels.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --------Marketing Cards-------- */}
            <div className="container-fluid">
                <div className="container py-5 mx-5 px-5">
                    <h6 className='lh-base'>We take pride in having proven high-converting marketing material and make sure that we’re always following cutting-edge marketing trends. All our creative is available in multiple languages and getting started is easy – our affiliate portal has everything you need right in one place.<br />

                        Our team is available to assist you in finding or promoting the right resources for your needs, so you can focus on growth and start building your business using the same resources we used to build the BlackBull Markets brand.</h6>
                    <div className="row g-4 my-2 mx-5 px-5">
                        {resources.map((item, index) => (
                            <div key={index} className="col-12 col-md-6 col-lg-6">
                                <div className="card  shadow-sm p-4 lh-lg">
                                    {/* Top Icons */}
                                    <div className="d-flex justify-content-between gap-2 mb-3 text-primary">

                                        <i key={item.icon} className={`bi ${item.icon} fs-2`}></i>
                                        <i className='bi bi-arrow-up-right-circle fs-2'></i>

                                    </div>

                                    {/* Title */}
                                    <h5 className="card-title text-primary-emphasis fw-bold mb-2">{item.title}</h5>

                                    {/* Content */}
                                    <p className="card-text">{item.content}</p>
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