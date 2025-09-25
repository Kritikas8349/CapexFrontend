import React, { useState } from 'react'


function TradingConditions() {
    
 
 const links = [
  "Leverage",
  "Swap Free Accounts",
  "Restricted Countries",
  "Why is a triple swap charged?",
  "Contract Specifications",
  "Contract Expiries",
  "Trading Hour Changes",
  "Trading conditions overview",
  "Who are your liquidity providers?",
  "What are your minimum deposits?"
];


  return (
    <div className='container-fluid py-4 border'>
      <div className='container'>
        <div className="d-flex"><span>Home &nbsp;</span>/&nbsp;<span>support&nbsp;</span>/&nbsp;<span>platform-support&nbsp;</span>/&nbsp;<span>secure client area</span></div>
        <div className='mb-4'>
          <h1 className='fw-bold text-center text-md-start'>Meta Trader 4</h1>
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

export default TradingConditions;