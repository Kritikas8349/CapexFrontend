import React, { useState } from 'react'


function MetaTrader4FAQs() {
    
    const links = [
  "How to close a trade in MetaTrader 4 (MT4)?",
  "How to place a trade in MetaTrader 4 (MT4) on mobile app?",
  "How to download MetaTrader 4 (MT4) on mobile app?",
  "How to download MetaTrader 4 (MT4)?",
  "How to create a MetaTrader 4 (MT4) Demo account?",
  "How to create a MetaTrader 4 (MT4) Live account?",
  "How to transfer funds to your MetaTrader 4 (MT4) account?",
  "How to log into MetaTrader 4 (MT4) on mobile app?",
  "How to log into your MetaTrader 4 (MT4) account?",
  "How to trade on MT4/ MT5 with a VPS?",
  "How to reset your MetaTrader 4 (MT4) account password?",
  "How to fix “Waiting For Update” error in MT4/MT5",
  "How to place a Trailing Stop on MT4?",
  "How to place a Pending Order on MT4?",
  "How to place a Stop Loss or Take Profit on MT4?",
  "How to place a trade in MetaTrader 4 (MT4)?",
  "How to check the leverage on your MT4 Account"
];

  return (
    <div className='container-fluid py-4 py-lg-5 py-md-5 pt-5 r bg-faq'>
      <div className='container align-items-start'>
        {/* <div className="d-flex"><span>Home &nbsp;</span>/&nbsp;<span>support&nbsp;</span>/&nbsp;<span>platform-support&nbsp;</span>/&nbsp;<span>secure client area</span></div> */}
        <div className='mb-4'>
          <h1 className='fw-bold text-center text-heading text-md-start'>Meta Trader 4</h1>
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
  )
}

export default MetaTrader4FAQs