import React from 'react';
import './EconomicCalendar.css';

const EconomicCalendar = () => {
    
  return (
    <div className="calendar-container">
      <div className="content">
        <div className="header">
          <h1>Download <br /> Economic Calendar 
          <p className='para'>to iCloud, Google, or Outlook</p>
          </h1>
          
          <p className="subtext">Don’t miss upcoming trading opportunities. Get alerts in your iCloud, Google, or Outlook Calendar of major economic events.</p>
          <p className="add-to-calendar">Add to calendar</p>
          <div className="download-buttons">
            <button className="calendar-btn apple-btn">
              <img src="applelogo.png" alt="Apple" />
            </button>
            <button className="calendar-btn google-btn">
              <img src="googlelogo.webp" alt="Google" />
            </button>
            <button className="calendar-btn outlook-btn">
              <img src="BBM3.webp" alt="Outlook" />
            </button>
            <button className="calendar-btn ics-btn">
              <img src="BBM5.webp" alt="ICS" />
            </button>
          </div>
        </div>
        <div className="phone-image">
          <img src="Calendar.webp" alt="Phone with calendar" />
        </div>
      </div>

      
    </div>
  );
};

export default EconomicCalendar;
