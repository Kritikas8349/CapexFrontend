import React from 'react'

function CTraderFAQs() {
    const links = [
  "cTrader Copy Provider Guide (Leader)",
  "cTrader Copy Investor Guide (Follower)",
  "How to close a trade in cTrader?",
  "How to place a trade in cTrader on mobile app?",
  "How to place a trade in cTrader?",
  "How to log into cTrader on mobile app?",
  "How to log into your cTrader Account?",
  "How to download cTrader on mobile app?",
  "How to create a cTrader Demo account?",
  "How to create a cTrader Live account?",
  "How to use the Drawing Tools on cTrader?",
  "How to Modify a Chart on cTrader?",
  "How to Transfer Funds to your cTrader account?",
  "How to view Depth of Market on cTrader?",
  "How to use the Economic Calendar on cTrader?",
  "How to set a Stop Loss and Take profit in cTrader?",
  "How to set up an Elliott Wave on cTrader?",
  "How to enable Quick Trade on cTrader?",
  "How to download cTrader?",
  "How to install an EA/Trading Robot on cTrader?",
  "How to access Market Sentiment Data on cTrader?",
  "How to delete your cTrader account?"
];

  return (
     <div className='container-fluid py-4 border'>
      <div className='container'>
        <div className="d-flex"><span>Home &nbsp;</span>/&nbsp;<span>support&nbsp;</span>/&nbsp;<span>platform-support&nbsp;</span>/&nbsp;<span>secure client area</span></div>
        <div className='mb-4'>
          <h1 className='fw-bold text-center text-md-start'>CTrader</h1>
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
  )
}

export default CTraderFAQs