import React from 'react';
import { useState } from 'react';
import "./Research.css"
function Research() {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const videos = [
        {
            id: 1,
            url: "https://www.youtube.com/embed/QU65j9eQobc", // Replace with actual video
            thumbnail: "/thumbnail.avif", // your image path
            heading: "Bitcoin's Path to $100K",
            subheading: "BTC/USD Targeting $100,000",
            authors: "Mark O’Donnell and Joel Kruger",
        },
        {
            id: 2,
            url: "https://www.youtube.com/embed/QU65j9eQobc",
            thumbnail: "/thumbnail.avif",
            heading: "Election Countdown: What’s Happening with the Euro?",
            subheading: "EUR/USD Election Countdown",
            authors: "Mark O’Donnell and Joel Kruger",
        },
        {
            id: 3,
            url: "https://www.youtube.com/embed/QU65j9eQobc",
            thumbnail: "/thumbnail.avif",
            heading: "USD/JPY: Ichimoku Suggests Uptrend is Back?",
            subheading: "USD/JPY Correction Overdone?",
            authors: "Mark O’Donnell and Joel Kruger",
        },
    ];

    //------Youtube shorts---------
    const episodes = [
        {
            id: 1,
            title: "Episode 1",
            youtubeLink: "https://www.youtube.com/shorts/FmKJDOSUAUY"
        },
        {
            id: 2,
            title: "Episode 2",
            youtubeLink: "https://www.youtube.com/shorts/3JZ_D3ELwOQ"
        }, {
            id: 3,
            title: "Episode 3",
            youtubeLink: "https://www.youtube.com/shorts/QU65j9eQobc"
        }, {
            id: 4,
            title: "Episode 4",
            youtubeLink: "https://www.youtube.com/shorts/FmKJDOSUAUY"
        }
    ];

    //-------Articals Data-----------
    const articles = [
        {
            id: 1,
            title: "FOMC doves now in the driver’s seat?",
            date: "SEPTEMBER 18, 2025",
            image: "dollar.webp",
            link: "#",
        },
        {
            id: 2,
            title: "The push for a 50bps Fed cut and its effect on EUR/USD",
            date: "SEPTEMBER 17, 2025",
            image: "dollar.webp",
            link: "#",
        },
        {
            id: 3,
            title: "Euro shrugs off France’s credit downgrade | FX Research",
            date: "SEPTEMBER 16, 2025",
            image: "dollar.webp",
            link: "#",
        },
    ];
    return (
        <div>
            {/* Inject CSS for media query */}
            <style>
                {`
    .research-section {
      background: linear-gradient(to right, white 61%, #0033a0 35%);
    }

    /* Mobile + Tablet (up to 991.98px = Bootstrap md breakpoint) */
    @media (max-width: 991.98px) {
      .research-section {
        background: linear-gradient(to bottom, white 80%, #0033a0 20%);
      }
    }
  `}
            </style>

            <div className="container-fluid py-5 research-section">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Section */}
                        <div className="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start">
                            <h2 className="fw-bold text-primary display-5">Daily Market Analysis</h2>
                            <p className="text-secondary fs-4 mt-3 mb-4 px-3 px-lg-0">
                                Our daily market analysis videos deliver concise fundamental and technical
                                analysis on price action, chart patterns, and market trends—insights vital to
                                navigate the trading landscape.
                            </p>

                            {/* Social Icons */}
                            <div className="d-flex justify-content-center justify-content-lg-start gap-3">
                                <a href="#" className="btn btn-primary rounded p-2">
                                    <i className="bi bi-youtube fs-4"></i>
                                </a>
                                <a href="#" className="btn btn-primary rounded p-2">
                                    <i className="bi bi-tiktok fs-4"></i>
                                </a>
                                <a href="#" className="btn btn-primary rounded p-2">
                                    <i className="bi bi-twitter-x fs-4"></i>
                                </a>
                                <a href="#" className="btn btn-primary rounded p-2">
                                    <i className="bi bi-instagram fs-4"></i>
                                </a>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="col-lg-6 text-center mt-4 mt-lg-0">
                            <img
                                src="/mobile.png" // Replace with your image
                                alt="Daily Market Analysis"
                                className="img-fluid"
                                style={{ maxHeight: '500px', width: '100%', objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* ---------For YouTube Videos------------ */}

            <div className="container py-5 bg-light my-5">
                <div className="d-flex align-items-center mb-4">
                    <h2 className="fw-bold fs-1 text-primary  me-2">Discover More Episodes</h2>
                    <i className="bi bi-youtube text-danger fs-2"></i>
                </div>

                <div className="row g-4">
                    {videos.map((video) => (
                        <div className="col-md-4" key={video.id}>
                            <div
                                className="p-2 h-100"
                                role="button"
                                data-bs-toggle="modal"
                                data-bs-target="#videoModal"
                                onClick={() => setSelectedVideo(video.url)}
                            >
                                <div className="position-relative">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.heading}
                                        className="img-fluid w-100 rounded"
                                    />
                                    <div className="position-absolute top-50 start-50 translate-middle">
                                        <i className="bi bi-play-circle-fill text-white fs-1"></i>
                                    </div>
                                </div>
                                <h5 className="mt-3 fw-bold">{video.heading}</h5>
                                <small className="text-muted">{video.authors}</small>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal for YouTube Video */}
                <div
                    className="modal fade mt-4"
                    id="videoModal"
                    tabIndex="-1"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-xl modal-dialog-centered">
                        <div className="modal-content bg-black border-0">
                            <div className="modal-header border-0 p-2">
                                <button
                                    type="button"
                                    className="btn-close btn-close-white"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={() => setSelectedVideo(null)}
                                ></button>
                            </div>
                            <div className="modal-body p-0">
                                {selectedVideo && (
                                    <div className="ratio ratio-16x9">
                                        <iframe
                                            src={selectedVideo}
                                            title="YouTube video"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="rounded-1"
                                        ></iframe>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* ----------For youTube Shorts--------------- */}

            <div className="container py-5 bg-light">
                <div className="d-flex align-items-center mb-4">
                    <h2 className="fw-bold fs-1 text-primary me-2">Discover More Episodes</h2>
                    <i className="bi bi-youtube text-danger fs-2"></i>
                </div>

                {/* Horizontal Scrollable Row */}
                <div
                    style={{
                        display: 'flex',
                        overflowX: 'auto',
                        gap: '16px',
                        paddingBottom: '8px'
                    }}
                >
                    {episodes.map((episode) => {
                        const videoId = episode.youtubeLink.split('/shorts/')[1]?.split('?')[0];
                        const embedUrl = `https://www.youtube.com/embed/${videoId}`;

                        return (
                            <div
                                key={episode.id}
                                style={{
                                    width: '320px',
                                    flexShrink: 0 // Prevent shrinking in scroll
                                }}
                            >
                                <div
                                    style={{
                                        position: 'relative',
                                        paddingBottom: '177%', // 9:16 aspect ratio
                                        height: 0,
                                        overflow: 'hidden',
                                        borderRadius: '8px'
                                    }}
                                >
                                    <iframe
                                        src={embedUrl}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title={episode.title}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%'
                                        }}
                                    ></iframe>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* ---------For Daily Analysis podcast---------------------- */}
            <div className="container border p-5  my-2 tr-container align-content-center">
                <div className="row align-items-center p-5 px-sm-2">
                    <div className="col-md-8 col-lg-6">
                        <h2 className="text-primary fs-1 fw-bold mb-4">Daily Analysis Podcast <span className='bi bi-spotify text-success'></span></h2>
                        <p>Catch up on the key trends, breaking news, and market moves with our daily Trading Analysis Podcast—your quick, essential market recap.</p>
                        <button className="btn btn-primary d-flex align-items-center justify-content-center">
                            <span className=" bi bi-spotify me-2 "></span> Listen Now
                        </button>
                    </div>
                    <div className="col-md-6 col-lg-6 text-center position-relative ">
                        <div className="card bg-light mt-3  p-4 ">
                            <img src="" alt="" srcset="" className='bg-white' width={"150px"} height={"100px"} />
                            <span className='bi bi-spotify position-absolute top-0 end-0 me-2'></span>
                        </div>
                    </div>
                </div>
            </div>


            {/* -----------Daily Research Artical----------------- */}
            <div className="container  py-5 tr-container align-content-center">
                {/* Heading */}
                <h2 className="fw-bold text-primary display-5 text-center mb-4">Daily Research Artical</h2>

                {/* Row of Posts */}
                <div className="row g-4">
                    {articles.map((article) => (
                        <div className="col-md-4" key={article.id}>
                            <div className="card border-0">
                                {/* Post Image */}
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    height={"259px"}
                                    className="card-img-top "
                                />

                                {/* Post Content */}
                                <div className="card-body px-0">
                                    <h5 className="fw-bold">{article.title}</h5>
                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                        <small className=" text-primary">{article.date}</small>
                                        <a href={article.link} className="text-primary px-4 text-decoration-none fw-semibold">
                                            VIEW POST
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-4">
                    <a href='' className="btn btn-outline-primary   fs-6 fw-semibold">View More</a>
                </div>
            </div>

            {/* -------------Investment Research---------- */}
            <section className="container border py-lg-5  my-5 align-content-center tr-container">
                <div className="row my-lg-5 g-6 align-items-center">
                    {/* Image Column */}
                    <div className="col-lg-6 mb-4 mb-lg-0" >
                        <img
                            src="/banner1.png"
                            alt="Man in a recording studio"
                            className="img-fluid rounded "
                            height={'100%'}
                        />
                    </div>

                    {/* Text and Button Column */}
                    <div className="col-lg-6">
                        <h2 className="display-5 fw-bold text-primary mb-4">
                            Investment Research
                        </h2>
                        <p className="lead mb-4">
                            It is essential for anyone investing in the stock market to have the very best knowledge at all times.<br />
                            BlackBull Research provides timely and jargon-free Institutional-grade stock recommendations to aid your investing decisions.
                        </p>
                        <a
                            href="https://spotify.com"
                            className="btn btn-primary btn-lg d-inline-flex align-items-center"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            Subscribe
                        </a>
                    </div>
                </div>
            </section>

            {/* --------Trading Research---------- */}
            <section className=" border align-content-center  py-lg-5 bg-primary text-white p-lg-5 p-5 tr-container ">
                <div className="row my-5 my-lg-5 g-6 align-items-center">

                    {/* Text and Button Column */}
                    <div className="col-lg-6 ">
                        <h2 className="display-5 fw-bold  mb-4">
                            Trading Research
                        </h2>
                        <p className="lead mb-4">
                            We offer expert research and in-depth market analysis across FX, commodities, CFDs, and cryptocurrencies, providing you with the insights and tools to make confident, informed trading decisions.
                        </p>
                        <a
                            href="https://spotify.com"
                            className="btn btn-info btn-lg d-inline-flex align-items-center"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            Learn More
                        </a>
                    </div>
                    {/* Image Column */}
                    <div className="col-lg-6 mt-4" >
                        <img
                            src="/banner1.png"
                            alt="Man in a recording studio"
                            className="img-fluid rounded "
                            height={'100%'}
                        />
                    </div>


                </div>
            </section>
          {/* -------------Economic Calender--------        */}
          <section className=" border align-content-center  py-lg-5   p-lg-5 p-5 ec-container ">
                <div className="row my-5 my-lg-5 g-6 align-items-center">

                    {/* Text and Button Column */}
                    <div className="col-lg-6 ">
                        <h2 className="display-5 fw-bold  mb-4">
                            Trading Research
                        </h2>
                        <p className="lead mb-4">
                            We offer expert research and in-depth market analysis across FX, commodities, CFDs, and cryptocurrencies, providing you with the insights and tools to make confident, informed trading decisions.
                        </p>
                        <a
                            href="https://spotify.com"
                            className="btn btn-info btn-lg d-inline-flex align-items-center"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            Learn More
                        </a>
                    </div>
                    {/* Image Column */}
                    <div className="col-lg-6 mt-4" >
                        <img
                            src="/mobile1.webp"
                            alt="Man in a recording studio"
                            className="img-fluid rounded "
                            height={'100%'}
                        />
                    </div>


                </div>
            </section>
        </div>
    );
}

export default Research;
