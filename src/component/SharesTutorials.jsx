import React from 'react';

function SharesTutorials() {
  const lessons = [
  {
    title: 'Shares 101: Lesson 1 of 7',
    desc: 'In this lesson, we explore: What are shares and how do they work, How the stock market operates, and Key share trading terminology...',
    img: '/trade.avif',
  },
  {
    title: 'Shares 101: Lesson 2 of 7',
    desc: 'In this lesson, we explore: Different types of stocks, How to read stock tickers, and Understanding dividends and capital gains...',
    img: '/trade1.avif',
  },
  {
    title: 'Shares 101: Lesson 3 of 7',
    desc: 'In this lesson, we explore: Fundamental analysis, Evaluating company performance, and Reading financial statements...',
    img: '/trade2.avif',
  },
  {
    title: 'Shares 101: Lesson 4 of 7',
    desc: 'In this lesson, we explore: Technical analysis basics, Understanding charts and indicators, and Market psychology...',
    img: '/trade3.avif',
  },
];


 const lessons1 = [
  { id: 1, title: 'Shares 202: Lesson 1 of 40', image: '/trade.avif' },
  { id: 2, title: 'Shares 202: Lesson 2 of 40', image: '/trade1.avif' },
  { id: 3, title: 'Shares 202: Lesson 3 of 40', image: '/trade2.avif' },
  { id: 4, title: 'Shares 202: Lesson 4 of 40', image: '/trade3.avif' },
  { id: 5, title: 'Shares 202: Lesson 5 of 40', image: '/trade5.avif' },
  { id: 6, title: 'Shares 202: Lesson 6 of 40', image: '/trade6.avif' },
  { id: 7, title: 'Shares 202: Lesson 7 of 40', image: '/trade.avif' },
  { id: 8, title: 'Shares 202: Lesson 8 of 40', image: '/trade1.avif' },
  { id: 9, title: 'Shares 202: Lesson 9 of 40', image: '/trade2.avif' },
  { id: 10, title: 'Shares 202: Lesson 10 of 40', image: '/trade3.avif' },
  { id: 11, title: 'Shares 202: Lesson 11 of 40', image: '/trade5.avif' },
  { id: 12, title: 'Shares 202: Lesson 12 of 40', image: '/trade6.avif' },
  { id: 13, title: 'Shares 202: Lesson 13 of 40', image: '/trade.avif' },
  { id: 14, title: 'Shares 202: Lesson 14 of 40', image: '/trade1.avif' },
  { id: 15, title: 'Shares 202: Lesson 15 of 40', image: '/trade2.avif' },
  { id: 16, title: 'Shares 202: Lesson 16 of 40', image: '/trade3.avif' },
  { id: 17, title: 'Shares 202: Lesson 17 of 40', image: '/trade5.avif' },
  { id: 18, title: 'Shares 202: Lesson 18 of 40', image: '/trade6.avif' },
  { id: 19, title: 'Shares 202: Lesson 19 of 40', image: '/trade.avif' },
  { id: 20, title: 'Shares 202: Lesson 20 of 40', image: '/trade1.avif' },
  { id: 21, title: 'Shares 202: Lesson 21 of 40', image: '/trade2.avif' },
  { id: 22, title: 'Shares 202: Lesson 22 of 40', image: '/trade3.avif' },
  { id: 23, title: 'Shares 202: Lesson 23 of 40', image: '/trade5.avif' },
  { id: 24, title: 'Shares 202: Lesson 24 of 40', image: '/trade6.avif' },
  { id: 25, title: 'Shares 202: Lesson 25 of 40', image: '/trade.avif' },
  { id: 26, title: 'Shares 202: Lesson 26 of 40', image: '/trade1.avif' },
  { id: 27, title: 'Shares 202: Lesson 27 of 40', image: '/trade2.avif' },
  { id: 28, title: 'Shares 202: Lesson 28 of 40', image: '/trade3.avif' },
  { id: 29, title: 'Shares 202: Lesson 29 of 40', image: '/trade5.avif' },
  { id: 30, title: 'Shares 202: Lesson 30 of 40', image: '/trade6.avif' },
  { id: 31, title: 'Shares 202: Lesson 31 of 40', image: '/trade.avif' },
  { id: 32, title: 'Shares 202: Lesson 32 of 40', image: '/trade1.avif' },
  { id: 33, title: 'Shares 202: Lesson 33 of 40', image: '/trade2.avif' },
  { id: 34, title: 'Shares 202: Lesson 34 of 40', image: '/trade3.avif' },
  { id: 35, title: 'Shares 202: Lesson 35 of 40', image: '/trade5.avif' },
  { id: 36, title: 'Shares 202: Lesson 36 of 40', image: '/trade6.avif' },
  { id: 37, title: 'Shares 202: Lesson 37 of 40', image: '/trade.avif' },
  { id: 38, title: 'Shares 202: Lesson 38 of 40', image: '/trade1.avif' },
  { id: 39, title: 'Shares 202: Lesson 39 of 40', image: '/trade2.avif' },
  { id: 40, title: 'Shares 202: Lesson 40 of 40', image: '/trade3.avif' },
];



  return (
    <div className='bg-home'>
      <div className="container-fluid bg-dark text-white py-4">
        <div className="container bg-dark">
          <h2 className="fw-bold bg-dark text-white text-center display-4 mb-5">Shares Tutorials</h2>

          <div className="row border-top bg-dark border-primary border-3 pt-4">
            <div className="col-lg-6 mb-4 bg-dark">
              <div className="d-flex flex-column bg-dark text-white" style={{ height: '400px' }}>
                <div className="position-relative flex-fill">
                  <img
                    src={lessons[0].img}
                    className="img-fluid w-100 h-100"
                    alt="Lesson 1"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="position-absolute top-50 start-50 translate-middle text-center bg-transparent px-3">
                    <h3 className="fw-bold">{lessons[0].title}</h3>
                  </div>
                </div>
                <div className="bg-dark text-white p-3" style={{ height: '150px' }}>
                  <h5 className="fw-bold">{lessons[0].title}</h5>
                  <p className="mb-0 fs-5">{lessons[0].desc}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 bg-dark mt-4">
              {lessons.slice(1).map((lesson, index) => (
                <div
                  key={index}
                  className="d-flex flex-column flex-md-row bg-dark text-white mb-4 border-bottom border-primary border-2 opacity-75"
                  style={{ minHeight: '180px' }}
                >
                  <div
                    className="flex-shrink-0"
                    style={{
                      width: '100%',
                      height: '180px',
                      maxWidth: '180px',
                    }}
                  >
                    <img
                      src={lesson.img}
                      alt={lesson.title}
                      className="w-100 h-100"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-3 d-flex flex-column justify-content-center bg-dark text-white" style={{ flex: 1 }}>
                    <h6 className="fw-bold h3 mb-2">{lesson.title}</h6>
                    <p className="mb-0 fs-5">{lesson.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ---------For multiple cards------------ */}
      <div className="container py-4">
        <div className="row">
          {lessons1.map((lesson, index) => (
            <div className="col-md-4 col-sm-6 mb-4" key={index}>
              <div className="position-relative" style={{ height: '200px', overflow: 'hidden' }}>
                <img
                  src={lesson.image}
                  alt={lesson.title}
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
                  style={{ background: 'rgba(0, 0, 0, 0.3)' }}
                >
                  <h5 className="text-white fs-2 text-center m-0">
                    {lesson.title.slice(0, 10)}
                    <br />
                    {lesson.title.slice(10, 24)}
                  </h5>
                </div>
              </div>
              <p className="fs-5 fw-bold mt-2">{lesson.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SharesTutorials;
