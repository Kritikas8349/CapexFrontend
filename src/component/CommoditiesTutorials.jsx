import React from 'react';

function CommoditiesTutorials() {
  const lessons = [
    {
      title: 'Commodities 101: Lesson 1 of 4',
      desc: 'In this lesson, we explore: What are commodities?, Types of commodities (gold, oil, agriculture), and How the commodities market works...',
      img: '/background.png',
    },
    {
      title: 'Commodities 101: Lesson 2 of 4',
      desc: 'In this lesson, we explore: Factors affecting commodity prices, Supply & demand, and the role of global events...',
      img: '/trade1.avif',
    },
    {
      title: 'Commodities 101: Lesson 3 of 4',
      desc: 'In this lesson, we explore: How to trade commodities, Futures contracts, Spot markets, and ETFs...',
      img: '/trade2.avif',
    },
    {
      title: 'Commodities 101: Lesson 4 of 4',
      desc: 'In this lesson, we explore: Risks in commodity trading, Hedging strategies, and Portfolio diversification...',
      img: '/trade3.avif',
    },
  ];


  const lessons1 = [
    { id: 1, title: 'Commodities 202: Lesson 1 of 40', image: '/trade.avif' },
    { id: 2, title: 'Commodities 202: Lesson 2 of 40', image: '/trade1.avif' },
    { id: 3, title: 'Commodities 202: Lesson 3 of 40', image: '/trade2.avif' },
    { id: 4, title: 'Commodities 202: Lesson 4 of 40', image: '/trade3.avif' },
    { id: 5, title: 'Commodities 202: Lesson 5 of 40', image: '/trade5.avif' },
    { id: 6, title: 'Commodities 202: Lesson 6 of 40', image: '/trade6.avif' },
    { id: 7, title: 'Commodities 202: Lesson 7 of 40', image: '/trade.avif' },
    { id: 8, title: 'Commodities 202: Lesson 8 of 40', image: '/trade1.avif' },
    { id: 9, title: 'Commodities 202: Lesson 9 of 40', image: '/trade2.avif' },
    { id: 10, title: 'Commodities 202: Lesson 10 of 40', image: '/trade3.avif' },
    { id: 11, title: 'Commodities 202: Lesson 11 of 40', image: '/trade5.avif' },
    { id: 12, title: 'Commodities 202: Lesson 12 of 40', image: '/trade6.avif' },
    { id: 13, title: 'Commodities 202: Lesson 13 of 40', image: '/trade.avif' },
    { id: 14, title: 'Commodities 202: Lesson 14 of 40', image: '/trade1.avif' },
    { id: 15, title: 'Commodities 202: Lesson 15 of 40', image: '/trade2.avif' },
    { id: 16, title: 'Commodities 202: Lesson 16 of 40', image: '/trade3.avif' },
    { id: 17, title: 'Commodities 202: Lesson 17 of 40', image: '/trade5.avif' },
    { id: 18, title: 'Commodities 202: Lesson 18 of 40', image: '/trade6.avif' },
    { id: 19, title: 'Commodities 202: Lesson 19 of 40', image: '/trade.avif' },
    { id: 20, title: 'Commodities 202: Lesson 20 of 40', image: '/trade1.avif' },
    { id: 21, title: 'Commodities 202: Lesson 21 of 40', image: '/trade2.avif' },
    { id: 22, title: 'Commodities 202: Lesson 22 of 40', image: '/trade3.avif' },
    { id: 23, title: 'Commodities 202: Lesson 23 of 40', image: '/trade5.avif' },
    { id: 24, title: 'Commodities 202: Lesson 24 of 40', image: '/trade6.avif' },
    { id: 25, title: 'Commodities 202: Lesson 25 of 40', image: '/trade.avif' },
    { id: 26, title: 'Commodities 202: Lesson 26 of 40', image: '/trade1.avif' },
    { id: 27, title: 'Commodities 202: Lesson 27 of 40', image: '/trade2.avif' },
    { id: 28, title: 'Commodities 202: Lesson 28 of 40', image: '/trade3.avif' },
    { id: 29, title: 'Commodities 202: Lesson 29 of 40', image: '/trade5.avif' },
    { id: 30, title: 'Commodities 202: Lesson 30 of 40', image: '/trade6.avif' },
    { id: 31, title: 'Commodities 202: Lesson 31 of 40', image: '/trade.avif' },
    { id: 32, title: 'Commodities 202: Lesson 32 of 40', image: '/trade1.avif' },
    { id: 33, title: 'Commodities 202: Lesson 33 of 40', image: '/trade2.avif' },
    { id: 34, title: 'Commodities 202: Lesson 34 of 40', image: '/trade3.avif' },
    { id: 35, title: 'Commodities 202: Lesson 35 of 40', image: '/trade5.avif' },
    { id: 36, title: 'Commodities 202: Lesson 36 of 40', image: '/trade6.avif' },
    { id: 37, title: 'Commodities 202: Lesson 37 of 40', image: '/trade.avif' },
    { id: 38, title: 'Commodities 202: Lesson 38 of 40', image: '/trade1.avif' },
    { id: 39, title: 'Commodities 202: Lesson 39 of 40', image: '/trade2.avif' },
    { id: 40, title: 'Commodities 202: Lesson 40 of 40', image: '/trade3.avif' },
  ];



  return (
    <div className='bg-home'>
      <style>
        {
          `.bg-forex
                     {
                         background: linear-gradient(to bottom right, #000000, #231586)}
                         
                       

                    `
        }

      </style>
      <div className=" bg-forex text-white pt-4 mt-lg-2 mx-lg-3 rounded rounded-4 " style={{minHeight: '98vh'}} >
        <div className="container bg-transparent mt-4 mt-lg-5 pt-4">
          <h2 className="fw-bold bg-transparent text-white text-center display-5 mt-5 mt-lg-4 py-4"> Commodities Tutorial</h2>

          <div className="row bg-transparent pt-2 g-4">
            {/* Left Column */}
            <div className="col-12 col-md-6 mb-4 bg-transparent">
              <div className="d-flex flex-column bg-transparent text-white h-100">
                <div className="position-relative flex-fill">
                  <img
                    src={lessons[0].img}
                    className="img-fluid w-100 h-100 opacity-75"
                    alt="Lesson 1"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="position-absolute top-50 start-50 translate-middle text-center bg-transparent px-3">
                    <h3 className="fw-bold">{lessons[0].title}</h3>
                  </div>
                </div>
                <div className="bg-transparent text-start text-white p-3">
                  <h5 className="fw-bold">{lessons[0].title}</h5>
                  <p className="mb-0 fs-5">{lessons[0].desc}</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-12 col-md-6 bg-transparent">
              {lessons.slice(2).map((lesson, index) => (
                <div
                  key={index}
                  className="d-flex flex-column flex-md-row bg-transparent text-white mb-4 border-bottom border-primary border-2"
                  style={{ minHeight: "180px" }}
                >
                  <div
                    className="flex-shrink-0"
                    style={{
                      width: "100%",
                      height: "180px",
                      maxWidth: "180px",
                    }}
                  >
                    <img
                      src={lesson.img}
                      alt={lesson.title}
                      className="w-100 h-100 opacity-75"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-3 d-flex flex-column justify-content-center text-start bg-transparent text-white" style={{ flex: 1 }}>
                    <h6 className="fw-bold h3 mb-2">{lesson.title}</h6>
                    <p className="mb-0 fs-5">{lesson.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ---------For multiple cards------------  */}
      <div className="  py-4 border border-3 my-lg-2 mx-lg-3 rounded rounded-4">
        <div className="container">
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
                    {lesson.title.slice(0, 12)}<br />
                    {lesson.title.slice(12, 30)}
                  </h5>
                </div>
              </div>
              <p className="fs-5 fw-bold mt-2">{lesson.title}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}

export default CommoditiesTutorials;
