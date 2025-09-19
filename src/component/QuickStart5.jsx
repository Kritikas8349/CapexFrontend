import React from 'react';
import './QuickStart5.css';

function QuickStart5() {
    return (
        <div id='Main5'>
           

       <div className="hero-container">
      <div className="nav-placeholder"></div>

      <div className="content">
        <h1>Verify Your Account</h1>
        <p>As a regulated broker, we require proof of identity and proof of address to verify your account.</p>
        <select>
          <option>India</option>
          <option>USA</option>
          <option>UK</option>
          {/* Add more countries as needed */}
        </select>
        <button>Upload Documents</button>
      </div>
    </div>





        </div>
    );
}

export default QuickStart5;