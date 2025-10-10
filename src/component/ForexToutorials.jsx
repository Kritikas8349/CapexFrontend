import React from 'react'


function ForexTutorials() {
  const lessons = [
    {
      title: 'Forex 101: Lesson 1 of 7',
      desc: 'In this lesson, we explore: Overview of the foreign exchange market, Understanding currency pairs, and Key terms and concepts in forex trading...',
      img: '/background.png',
    },
    {
      title: 'Forex 101: Lesson 2 of 7',
      desc: 'In this lesson, we explore: Understanding charts, Understanding technical indicators, and Using technical analysis to make trading decisions...',
      img: '/trade.avif',
    },
    {
      title: 'Forex 101: Lesson 3 of 7',
      desc: 'In this lesson, we explore: Understanding economic reports and their impact on currency prices, Analyzing news and events to predict...',
      img: '/trade1.avif',
    },
    {
      title: 'Forex 101: Lesson 4 of 7',
      desc: 'In this lesson, we explore: Understanding the risks involved in forex trading, Implementing risk management strategies, and Using stop-loss and...',
      img: '/trade3.avif',
    },
  ];


  // ---For multiple Cards---------
  const lessons1 = [
    {
      id: 1,
      title: 'Forex 101: Lesson 5 of 7',
      image: '/trade.avif',
    },
    {
      id: 2,
      title: 'Forex 101: Lesson 6 of 7',
      image: '/trade1.avif',
    },
    {
      id: 3,
      title: 'Forex 101: Lesson 7 of 7',
      image: '/trade2.avif',
    },
    {
      id: 4,
      title: 'Forex 303: Lesson 1 of 5',
      image: '/trade3.avif',
    },
    {
      id: 5,
      title: 'Forex 303: Lesson 2 of 5',
      image: '/trade.avif',
    },
    {
      id: 6,
      title: 'Forex 303: Lesson 3 of 5',
      image: '/trade5.avif',
    },
    {
      id: 7,
      title: 'Forex 303: Lesson 4 of 5',
      image: '/trade.avif',
    },
    {
      id: 8,
      title: 'Forex 303: Lesson 5 of 5',
      image: '/trade.avif',
    },
    {
      id: 9,
      title: 'Forex 202: Lesson 1 of 6',
      image: '/trade.avif',
    },
    {
      id: 10,
      title: 'Forex 202: Lesson 2 of 6',
      image: '/trade.avif',
    },
    {
      id: 11,
      title: 'Forex 202: Lesson 3 of 6',
      image: '/trade6.avif',
    },
    {
      id: 12,
      title: 'Forex 202: Lesson 4 of 6',
      image: '/trade5.avif',
    },
    {
      id: 13,
      title: 'Forex 202: Lesson 5 of 6',
      image: '/trade3.avif',
    },
    {
      id: 14,
      title: 'Forex 202: Lesson 6 of 6',
      image: '/trade2.avif',
    },
    {
      id: 15,
      title: 'Forex 404: Lesson 1 of 4',
      image: '/trade1.avif',
    },
    {
      id: 16,
      title: 'Forex 404: Lesson 2 of 4',
      image: '/trade6.avif',
    },
    {
      id: 17,
      title: 'Forex 404: Lesson 3 of 4',
      image: '/trade5.avif',
    },
    {
      id: 18,
      title: 'Forex 404: Lesson 4 of 4',
      image: '/trade3.avif',
    },
    {
      id: 19,
      title: 'Forex 505: Lesson 1 of 3',
      image: '/trade2.avif',
    },
    {
      id: 20,
      title: 'Forex 505: Lesson 2 of 3',
      image: '/trade1.avif',
    },
    { id: 21, title: 'Forex 101: Lesson 1 of 7', image: '/trade.avif' },
    { id: 22, title: 'Forex 101: Lesson 2 of 7', image: '/trade1.avif' },
    { id: 23, title: 'Forex 101: Lesson 3 of 7', image: '/trade2.avif' },
    { id: 24, title: 'Forex 101: Lesson 4 of 7', image: '/trade3.avif' },
    { id: 25, title: 'Forex 101: Lesson 5 of 7', image: '/trade4.avif' },
    { id: 26, title: 'Forex 101: Lesson 6 of 7', image: '/trade5.avif' },
    { id: 27, title: 'Forex 101: Lesson 7 of 7', image: '/trade6.avif' },

    { id: 28, title: 'Forex 202: Lesson 1 of 6', image: '/trade1.avif' },
    { id: 29, title: 'Forex 202: Lesson 2 of 6', image: '/trade2.avif' },
    { id: 30, title: 'Forex 202: Lesson 3 of 6', image: '/trade3.avif' },
    { id: 31, title: 'Forex 202: Lesson 4 of 6', image: '/trade5.avif' },
    { id: 32, title: 'Forex 202: Lesson 5 of 6', image: '/trade6.avif' },
    { id: 33, title: 'Forex 202: Lesson 6 of 6', image: '/trade1.avif' },

    { id: 34, title: 'Forex 303: Lesson 1 of 5', image: '/trade.avif' },
    { id: 35, title: 'Forex 303: Lesson 2 of 5', image: '/trade2.avif' },
    { id: 36, title: 'Forex 303: Lesson 3 of 5', image: '/trade6.avif' },
    { id: 37, title: 'Forex 303: Lesson 4 of 5', image: '/trade5.avif' },
    { id: 38, title: 'Forex 303: Lesson 5 of 5', image: '/trade3.avif' },

    { id: 39, title: 'Forex 404: Lesson 1 of 4', image: '/trade1.avif' },
    { id: 40, title: 'Forex 404: Lesson 2 of 4', image: '/trade2.avif' },
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
      <div className="container-fluid bg-forex text-white pt-4 " >
        <div className="container bg-transparent pt-4">
          <h2 className="fw-bold bg-transparent text-white text-center display-5 py-4"> Forex Tutorial</h2>

          <div className="row bg-transparent  pt-2">
            <div className="col-lg-6 mb-4 bg-transparent">
              <div className="d-flex flex-column bg-transparent text-white">
                <div className="position-relative flex-fill">
                  <img
                    src={lessons[0].img}
                    className="img-fluid w-100 h-100 opacity-75 "
                    alt="Lesson 1"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="position-absolute  top-50 start-50 translate-middle text-center bg-transparent px-3">
                    <h3 className="fw-bold">{lessons[0].title}</h3>
                  </div>
                </div>
                <div className="bg-transparent text-white p-3" style={{ height: '150px' }}>
                  <h5 className="fw-bold ">{lessons[0].title}</h5>
                  <p className="mb-0 fs-5">{lessons[0].desc}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 bg-transparent mt-4">
              {lessons.slice(2).map((lesson, index) => (
                <div
                  key={index}
                  className="d-flex flex-column flex-md-row bg-transparent text-white mb-4 border-bottom border-primary  border-2"
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
                      className="w-100 h-100 opacity-75"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-3 d-flex flex-column justify-content-center bg-transparent text-white" style={{ flex: 1 }}>
                    <h6 className="fw-bold h3  mb-2">{lesson.title}</h6>
                    <p className="mb-0 fs-5">{lesson.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div> 

      {/* ---------For multiple cards------------  */}
      <div className="container py-4">
        <div className="row">
          {lessons1.map((lesson, index) => (
            <div className="col-md-4 col-sm-6 mb-4 " key={index}>
              <div className="position-relative " style={{ height: '200px', overflow: 'hidden' }}>
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
                  <h5 className="text-white  fs-2  text-center m-0">{lesson.title.slice(0, 10)}<br />
                    {lesson.title.slice(10, 24)}</h5>
                </div>
              </div>
              <p className="fs-5 fw-bold mt-2">{lesson.title}</p>
            </div>
          ))}
        </div>
      </div>  

    </div>
  )
}

export default ForexTutorials