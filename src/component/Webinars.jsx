import React from 'react'
import ForexTutorials from './ForexToutorials';
// import PastWebinar from './PastWebinar'

function Webinars() {
  //------------Past Webinar video data---------------
  const videos1 = [
    {
      id: 1,
      title: "2025 H2 Playbook: How institutions are trading the second half",
      date: "7/28/2025",
      url: "https://www.youtube.com/embed/MFqvLMctU_U",
      badge: "WEBINAR",
    },
    {
      id: 2,
      title: "The truth about trading: It's not just the strategy (Feat. Cam Hawkins)",
      date: "5/2/2025",
      url: "https://www.youtube.com/embed/phphBbRex1M",
      badge: "WEBINAR RECORDING",
    },
    {
      id: 3,
      title: "Webinar: What the charts reveal about Bitcoin's new record",
      date: "4/3/2025",
      url: "https://www.youtube.com/embed/FmKJDOSUAUY",
      badge: "WEBINAR",
    },
  ];
  return (
    <>
      <div className="trading-view py-5 m-0 m-lg-3 m-md-3 rounded rounded-4">
        <style>
          {
            `.trading-view {
                         background: linear-gradient(to bottom right, #000000, #231586)}
                         color:white;
                       

                    `
          }

        </style>
        <div className="container ">
          <div className="text-center mb-2 mb-lg-5 mb-md-5">
            <h1 className="fw-bold text-white mb-3 text-start display-4">Past Webinars</h1>
            <p className="lead text-white text-start d-flex align-items-center justify-content-center">
              Watch all of our past webinars on YouTube
              <i className="bi bi-youtube d-none d-lg-flex d-md-flex fs-3 text-danger ms-2"></i>
            </p>
          </div>

          <div className="row justify-content-center">
            {videos1.map((video) => (
              <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex" key={video.id}>
                <div className="bg-white p-0 shadow-sm rounded h-100 d-flex flex-column overflow-hidden">
                  <div className="position-relative" style={{ paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
                    <iframe
                      className="position-absolute top-0 start-0 w-100 h-100"
                      src={video.url}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    {video.badge && (
                      <span
                        className="position-absolute top-0 start-0 bg-white text-dark small px-2 py-1 m-2 fw-bold"
                        style={{ borderRadius: "3px" }}
                      >
                        {video.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-3 text-start">
                    <h6 className="fw-bold text-dark">{video.title}</h6>
                    <p className="text-secondary mb-0 small">{video.date}</p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
      <ForexTutorials></ForexTutorials>
    </>
  )
}

export default Webinars