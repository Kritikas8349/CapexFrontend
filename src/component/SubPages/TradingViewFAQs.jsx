import React from 'react';
import './TradingViewFAQ.css'
function TradingViewFAQs() {
  const links = [
    "How to connect to BlackBull Markets on the TradingView mobile app?",
    "How to place a trade on TradingView mobile app?",
    "How to close a trade in TradingView?",
    "How to place a trade on TradingView?",
    "How to create a TradingView Live account?",
    "How to create a TradingView Demo account?",
    "How to connect BlackBull Markets to TradingView?",
    "Can I use TradingView on my mobile device?",
    "How to set a TradingView Account password?",
    "How to visualize a company’s financials on my TradingView chart?",
    "How to search for technical indicators in TradingView?",
    "What TradingView Account is right for you?",
    "How to engage in the TradingView community?",
    "What is the TradingView screener feature?",
    "What level of support do I get from TradingView?",
    "How to submit trading ideas and scripts on TradingView?",
    "How to customise a TradingView chart?",
    "Beginners guide to the TradingView interface",
    "How to set trading alerts in TradingView?",
    "How to search for trading strategies in TradingView?",
    "How to copy a chart on TradingView?",
    "How to view profit as pips in TradingView?",
    "How to set a stop loss and take profit in TradingView?",
    "How to transfer funds to your TradingView Account?",
    "How to edit font size in TradingView?",
    "How to check and change leverage on TradingView?",
    "How to see extended trading hours in TradingView?",
    "How to Trade on TradingView with a Swap Free Account?"
  ];

  return (
    <div className='container-fluid py-4 py-lg-5 py-md-5 pt-5  bg-faq'>
      <div className='container align-items-start '>
        {/* <div className="d-flex"><span>Home &nbsp;</span>/&nbsp;<span>support&nbsp;</span>/&nbsp;<span>platform-support&nbsp;</span>/&nbsp;<span>secure client area</span></div> */}
        <div className='mb-1'>
          <h1 className='fw-bold text-start text-heading text-md-start'>Trading View</h1>
        </div>
        <div className='links-container'>
          <ul className='list-unstyled '>
            {links.map((link, index) => (
              <li key={index} className='my-3 text-start text-white '>
                <a href='#' className=' text-white text-decoration-none d-flex align-items-start'>
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

export default TradingViewFAQs;
