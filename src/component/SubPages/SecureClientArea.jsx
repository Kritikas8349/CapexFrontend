import React from 'react';

function SecureClientArea() {
  const links = [
    "How do I withdraw funds?",
    "How do I deposit funds?",
    "What is My Wallet?",
    "How do I change the language of the Secure Client Area?",
    "How do I view my funding history?",
    "How do I transfer funds between my wallet and my trading account?",
    "How can I get support in the Secure Client Area?",
    "How do I download a trading platform?",
  ];

  return (
    <div className=' bg-faq py-5 py-lg-5 py-md-5 pt-5 min-vh-100 mt-lg-2 mx-lg-3 rounded rounded-4'>
      <div className='container align-items-start py-5 '>
        {/* <div className="d-flex"><span>Home &nbsp;</span>/&nbsp;<span>support&nbsp;</span>/&nbsp;<span>platform-support&nbsp;</span>/&nbsp;<span>secure client area</span></div> */}
        <div className='mb-4'>
          <h1 className='fw-bold text-start text-heading text-md-start'>Secure Client Area</h1>
        </div>
        <div className='links-container'>
          <ul className='list-unstyled '>
            {links.map((link, index) => (
              <li key={index} className='my-3 text-start'>
                <a href='#' className='text-white text-decoration-none d-flex align-items-start'>
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

export default SecureClientArea;
