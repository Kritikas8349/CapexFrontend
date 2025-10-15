import React from 'react';
import "./EducationHub.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom';
import Research from './Research';



function EducationHub() {
  const cardsData = [
    { title: "Forex", desc: "Learn to Trade Forex", begpath: '/education/forex/beginner', intpath: '/education/forex/intermediate', advpath: '/education/forex/advanced' },
    { title: "Crypto", desc: "Learn to Trade Crypto", begpath: '/education/forex/beginner', intpath: '/education/forex/intermediate', advpath: '/education/forex/advanced' },
    { title: "Commodities", desc: "Learn to Trade Commodities", begpath: '/education/commodities/beginner', intpath: '/education/commodities/intermediate', advpath: '/education/commodities/advanced' },
    { title: "Stocks", desc: "Learn to Trade Stocks", begpath: '/education/forex/beginner', intpath: '/education/forex/intermediate', advpath: '/education/forex/advanced' },
  ];

  //.......Card data for Trading Platform;
  const platforms = [
    {
      id: 1,
      title: "TradingView",
      desc: "Trade directly in TradingView, the world’s leading charting and social platform.",
      icon: "/Frame84151.png",
      isNew: true,
      path: "/platforms/tradingview",
    },
    {
      id: 2,
      title: "MetaTrader 4",
      desc: "Trade via MetaTrader 4, the most popular trading platform in the world.",
      icon: "/Frame84152.png",
      isNew: false,
      path: "/platforms/mt4",
    },
    {
      id: 3,
      title: "MetaTrader 5",
      desc: "Trade via MetaTrader 5, the most powerful premier trading platform.",
      icon: "/Frame84153.png",
      isNew: false,
      path: "/platforms/mt5",
    },
    {
      id: 4,
      title: "cTrader",
      desc: "Experience BlackBull Markets’ institutional trading conditions combined with cTrader.",
      icon: "/Frame84155.png",
      isNew: true,
      path: "/platforms/ctrade",
    },
    {
      id: 5,
      title: "BlackBull CopyTrader",
      desc: "Copy trades or lead followers with the BlackBull CopyTrader platform.",
      icon: "/Frame84156.png",
      isNew: true,
      path: "/platforms/copytrade",
    },
    {
      id: 6,
      title: "BlackBull Invest",
      desc: "Access 26,000+ Shares, Options, ETFs, Bonds, and other underlying assets.",
      icon: "/Frame84151.png",
      isNew: false,
      path: "/support/platform/invest/open-share-account",
    },
  ];


  //-------For Trading video data
  const videos = [
    {
      id: 1,
      title: "The truth about trading: It's not just the strategy (Feat. Cam Hawkins)",
      date: "5/2/2025",
      url: "https://www.youtube.com/embed/QU65j9eQobc",
      badge: "WEBINAR RECORDING",
    },
    {
      id: 2,
      title: "Tariffs: Trading Threat or Trading Opportunity?",
      date: "4/11/2025",
      url: "https://www.youtube.com/embed/FmKJDOSUAUY",
    },
    {
      id: 3,
      title: "How to reduce forex costs with tighter spreads",
      date: "11/14/2024",
      url: "https://www.youtube.com/embed/QU65j9eQobc",
    },
  ];

  //-----Trading oppor. data
  const posts = [
    {
      id: 1,
      title: "FOMC doves now in the driver’s seat?",
      date: "SEPTEMBER 18, 2025",
      image: "/trade.avif",
      link: "#",
    },
    {
      id: 2,
      title: "The push for a 50bps Fed cut and its effect on EUR/USD",
      date: "SEPTEMBER 17, 2025",
      image: "/trade1.avif",
      link: "#",
    },
    {
      id: 3,
      title: "Euro shrugs off France’s credit downgrade | FX Research",
      date: "SEPTEMBER 16, 2025",
      image: "/trade2.avif",
      link: "#",
    },
  ];

  //------------Past Webinar video data---------------
  const videos1 = [
    {
      id: 1,
      title: "2025 H2 Playbook: How institutions are trading the second half",
      date: "7/28/2025",
      url: "https://www.youtube.com/embed/MFqvLMctU_U", // Placeholder URL
      badge: "WEBINAR",
    },
    {
      id: 2,
      title: "The truth about trading: It's not just the strategy (Feat. Cam Hawkins)",
      date: "5/2/2025",
      url: "https://www.youtube.com/embed/phphBbRex1M", // Placeholder URL
      badge: "WEBINAR RECORDING",
    },
    {
      id: 3,
      title: "Webinar: What the charts reveal about Bitcoin's new record",
      date: "4/3/2025",
      url: "https://www.youtube.com/embed/FmKJDOSUAUY", // Placeholder URL
      badge: "WEBINAR",
    },
  ];
  return (
    <div className='bg-home '>
      <div className="education-section d-flex align-items-center text-white" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url('/compliance.avif')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
        <div className="container ">
          <div className="row bg-transparent">
            <div className="col-12 col-lg-6 bg-transparent">
              <div className="content-box p-4 p-md-5 text-start bg-transparent"> {/* Add responsive padding */}
                <h1 className="fw-bold text-white display-4 text-start mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>Education Hub</h1> {/* mb-3 for spacing */}
                <h6 className="mb-4  fs-5 text-start text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                  Learn to trade forex, crypto, commodities, and shares, with our trading tutorials. Explore trading videos, podcasts, webinars, and market analysis.
                </h6>
                <Link to='/education/demo-trade' className="btn btn-bg-start text-white btn-lg fw-bold">Demo Trade </Link> {/* btn-lg for a larger button */}

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------For Learn Trad--------------------- */}
      <div className='bg-home  align-content-center border border-3 py-3 py-md-5 py-lg-5'  >
        <div className="container py-md-5 py-lg-5">
          <h1 className='text-heading fw-bold text-center mb-4 display-4'>Learn to Trade Courses</h1>
          <div className='row justify-content-center'>
            {cardsData.map((card, index) => (
              <div className='col-12 col-md-6 col-lg-3 d-flex ' key={card.title}>
                <div className='bg-white p-4 m-2 w-100 shadow-sm'>
                  <h2 className='mb-3 fw-bold text-dark'>{card.title}</h2>
                  <p className='text-secondary mb-4'>{card.desc}</p>
                  <div className='d-flex flex-wrap input-group mt-auto justify-content-center'>
                    <Link to={card.begpath} className='badge  text-white p-2 m-1 s1 text-decoration-none'>BEGINNER</Link>
                    <Link to={card.intpath} className='badge text-white p-2 m-1 s2 text-decoration-none'>MIDIUM</Link>
                    <Link to={card.advpath} className='badge  text-white p-2 m-1 s3 text-decoration-none'>PRO</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* -------For Trading Platform------------------ */}
      <section className="bg-home py-2 py-lg-5 py-md-5 mt-md-4">
        <div className="container">
          <h1 className="text-center fw-bold mb-5 display-4  text-heading">Trading Platforms</h1>

          <div className="row g-4">
            {platforms.map((platform, index) => (
              <div className="col-md-6 col-lg-4 " key={index}>
                <div className="border border-2 border-primary bg-opacity-10 rounded p-4 position-relative h-100">
                  <div className="d-flex align-items-center  bg-home mb-3">
                    <img
                      src={platform.icon}
                      alt={platform.name}
                      className="me-2"
                      style={{ width: "60px", height: "50px", objectFit: "contain" }}
                    />
                    <h5 className="mb-0 fw-bold text-dark">{platform.title}</h5>

                    {platform.isNew && (
                      <span
                        className="badge bg-success position-absolute top-0 end-0 mt-2 me-2"
                        style={{ fontSize: "0.75rem" }}
                      >
                        New
                      </span>
                    )}
                  </div>

                  <p className="text-dark text-start">{platform.desc}</p>

                  <div className="text-start">
                    <Link to={platform.path} className="btn btn-bg-start    bg-opacity-10 text-white fw-semibold">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* -----------For TradingVideo----------------- */}
      <div className="bg-home py-2 py-lg-5 py-md-5">
        <div className="container">
          <div className="text-start mb-2 mb-lg-4 mb-md-4">
            <h1 className="fw-bold text-heading mb-3 text-sm-start display-4">Trading Video Tutorials</h1>
            <p className="lead text-dark text-sm-start d-flex flex-wrap align-items-center justify-content-center">
              Watch and learn with 3000+ videos on YouTube
              <i className="bi bi-youtube d-none d-lg-flex d-md-flex fs-3 text-danger ms-2"></i>
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {videos.map((video) => (
              <div className="col-12 mb-3 col-md-6 col-lg-4 d-flex" key={video.id}>
                <div className="border-0 shadow-sm h-100 bg-white rounded overflow-hidden">
                  <div className="position-relative" style={{ paddingTop: '56.25%' }}>
                    <iframe
                      className="position-absolute top-0 start-0 w-100 h-100 rounded-top"
                      src={video.url}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>

                    {video.badge && (
                      <span className="position-absolute top-0 start-0 bg-white text-dark small px-2 py-1 m-2 fw-semibold shadow-sm rounded-1">
                        {video.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-3 text-start text-md-start">
                    <h6 className="fw-bold text-dark mb-1">{video.title}</h6>
                    <p className="text-secondary mb-0 small">{video.date}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-12 text-center mt-5">
              <Link
                to="https://www.youtube.com/"
                className="btn btn-bg-start text-white px-4 py-2 fw-semibold btn-lg"
              >
                View More Videos
              </Link>
            </div>
          </div>
        </div>
      </div>



      {/* ----------For Trading Opportu..------------ */}
      <div className="container py-2 py-lg-5 py-md-5">
  {/* Heading */}
  <h2 className="fw-bold text-heading display-5 mb-4 text-center text-md-start">
    Trading Opportunities
  </h2>

  {/* Row of Posts */}
  <div className="row g-4">
    {posts.map((post) => (
      <div className="col-12 col-sm-6 col-lg-4" key={post.id}>
        <div className="card border-0 custom-card h-100 shadow-sm rounded-3 overflow-hidden p-0">
          {/* Image Section */}
          <div className="ratio ratio-16x9">
            <img
              src={post.image}
              alt={post.title}
              className="card-img-top object-fit-cover"
            />
          </div>

          {/* Content Section */}
          <div className="card-body p-3 d-flex flex-column justify-content-between">
            <div>
              <h5 className="fw-bold text-start text-dark mb-2">{post.title}</h5>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-2 flex-wrap">
              <small className="text-secondary">{post.date}</small>
              <a
                href={post.link}
                className="text-heading text-decoration-none fw-semibold mt-2 mt-sm-0"
              >
                VIEW POST
              </a>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* View More Button */}
  <div className="text-center mt-5">
    <Link
      to="/education/research/opportunities"
      className="btn btn-bg-start text-white fs-6 fw-semibold px-4 py-2"
    >
      View More
    </Link>
  </div>
</div>




      {/* ---------For Past Webinar------------ */}
      <div className="bg-home py-2 py-lg-5 py-md-5">
        <div className="container">
          <div className="text-start mb-2 mb-lg-4 mb-md-4">
            <h1 className="fw-bold text-heading mb-3 display-4">Past Webinars</h1>
            <p className="lead text-dark d-flex align-items-center justify-content-center">
              Watch all of our past webinars on YouTube
              <i className="bi bi-youtube d-none d-lg-flex d-md-flex fs-3 text-danger ms-2"></i>
            </p>
          </div>

          <div className="row g-3 justify-content-center">
            {videos1.map((video) => (
              <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex" key={video.id}>
                <div className="bg-white shadow-sm rounded h-100 d-flex flex-column overflow-hidden">
                  <div className="position-relative" style={{ paddingTop: '56.25%' }}>
                    <iframe
                      className="position-absolute top-0 start-0 w-100 h-100"
                      src={video.url}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>

                    {video.badge && (
                      <span className="position-absolute top-0 start-0 bg-white text-dark small px-2 py-1 m-2 fw-semibold shadow-sm rounded-1">
                        {video.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-3 text-start text-md-start">
                    <h6 className="fw-bold text-dark mb-1">{video.title}</h6>
                    <p className="text-secondary mb-0 small">{video.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>




      {/* ------For Spotify story/podcast------- */}
      <section className="container align-content-center  mt-0 py-3 py-md-5 py-lg-5" >
        <div className="row g-6 align-items-center py-md-5 py-lg-5 text-start">
          {/* Image Column */}
          <div className="col-lg-6 mb-4 mb-lg-0" >
            <img
              src="/spotify.avif"
              alt="Man in a recording studio"
              className="img-fluid rounded "
              height={'100%'}
            />
          </div>

          {/* Text and Button Column */}
          <div className="col-lg-6">
            <h2 className="display-4 fw-bold text-heading mb-4">
              Discover Our Daily Trading Analysis Podcast
            </h2>
            <p className="lead mb-4">
              Join us for our Daily Trading Analysis podcast on Spotify, where we
              break down the latest market trends and provide actionable
              insights. Whether you're a seasoned trader or just starting, our in-
              depth discussions and expert interviews can help you sharpen your
              skills and make informed decisions in your trading journey.
            </p>
            <Link
              to="https://spotify.com" // Replace with your Spotify podcast link
              className="btn btn-bg-start text-white btn-lg d-inline-flex align-items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-spotify me-2"></i> {/* Spotify icon */}
              Listen Now
            </Link>
          </div>
        </div>
      </section>



    </div>
  );
}

export default EducationHub;