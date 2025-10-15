import React from 'react'

function MetaTrader5FAQs() {
   const links = [
  "How to use Depth of Market on MetaTrader 5 (MT5)?",
  "How to close a trade in MetaTrader 5 (MT5)?",
  "How to place a trade in MetaTrader 5 (MT5) on mobile app?",
  "How to log into MetaTrader 5 (MT5) on mobile app?",
  "How to download MetaTrader 5 (MT5)?",
  "How to create a MetaTrader 5 (MT5) Live account?",
  "How to connect your TraderKeys?",
  "How to connect to the BlackBull Markets’ VPS?",
  "How to add an Expert Advisor (EA) to MetaTrader 5",
  "How to install MetaTrader 5 (MT5) on iPhone?",
  "How to check your trade history in MT5?",
  "How to change timeframes on MetaTrader 5 (MT5)?",
  "How to download MetaTrader 5 (MT5) on mobile app?",
  "How to reset your MetaTrader 5 (MT5) account password?",
  "How to view roll over/swap rates in MT5?",
  "How to set up an elliott wave in MT5?",
  "How to change the font size in MT5?",
  "How to see your margin and free margin in MT5?",
  "How to log into your MetaTrader 5 (MT5) Account?",
  "How to create a MetaTrader 5 (MT5) Demo account?",
  "How to check or change leverage on MT5?",
  "How to add a stop loss and take profit in MT5?",
  "How to place a trade in MetaTrader 5 (MT5)?",
  "How to transfer funds to your MetaTrader 5 (MT5) account?",
  "How to view profits as points (or pips) in MT5?",
  "Why use a VPS with MT5?",
  "How to Show the Ask line in MT5",
  "How to Show All Tradable Assets on MT5"
];


  return (
    <div className='container-fluid py-4 py-lg-5 py-md-5 pt-5  bg-faq'>
      <div className='container align-items-start'>
        {/* <div className="d-flex"><span>Home &nbsp;</span>/&nbsp;<span>support&nbsp;</span>/&nbsp;<span>platform-support&nbsp;</span>/&nbsp;<span>secure client area</span></div> */}
        <div className='mb-0'>
          <h1 className='fw-bold text-center text-heading text-md-start'>Meta Trader 5</h1>
        </div>
        <div className='links-container'>
          <ul className='list-unstyled '>
            {links.map((link, index) => (
              <li key={index} className='my-3 text-start '>
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
  )
}

export default MetaTrader5FAQs