import React from 'react';

function BlackBullInvestFAQs() {
  const links = [
  "What is the Share Investing Portal?",
  "What is BlackBull Invest?",
  "Transition to BlackBull Markets from Rockfort",
  "How to open a Share Investing account?",
  "How to convert currency in a Cash Account?",
  "How to fund your Share Investing account?",
  "How to install and log into BlackBull Invest? (mobile app)"
];

  return (
    <div className='container-fluid py-4 border bg-home h-100-vh'>
      <div className='container'>
        <div className="d-flex"><span>Home &nbsp;</span>/&nbsp;<span>support&nbsp;</span>/&nbsp;<span>platform-support&nbsp;</span>/&nbsp;<span>secure client area</span></div>
        <div className='mb-4'>
          <h1 className='fw-bold text-center text-heading text-md-start'>Blackbull Invest</h1>
        </div>
        <div className='links-container'>
          <ul className='list-unstyled '>
            {links.map((link, index) => (
              <li key={index} className='my-3 '>
                <a href='#' className='text-muted text-decoration-none d-flex align-items-start'>
                  <i className='bi bi-file-earmark-text-fill me-2 mt-1'></i>
                  <span>{link}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BlackBullInvestFAQs;
