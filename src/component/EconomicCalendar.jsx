import React, { useState, useEffect } from "react";
import "./EconomicCalendar.css";

const EconomicCalendar = () => {
  const [timeFormat, setTimeFormat] = useState("24h");
  const [selectedDropdown, setSelectedDropdown] = useState("Live - Next 24 Hours");
  const [selectedTimezone, setSelectedTimezone] = useState("Asia/Kolkata");
  const [currentTime, setCurrentTime] = useState("");

  // Timezones
  const timezones = [
    { label: "(GMT-10:00) Hawaiian Standard Time", value: "Pacific/Honolulu" },
    { label: "(GMT-08:00) Alaskan Standard Time", value: "America/Anchorage" },
    { label: "(GMT-08:00) Pacific Standard Time", value: "America/Los_Angeles" },
    { label: "(GMT-07:00) Mountain Standard Time", value: "America/Denver" },
    { label: "(GMT-06:00) Central Standard Time", value: "America/Chicago" },
    { label: "(GMT+05:30) India Standard Time", value: "Asia/Kolkata" },
  ];

  // Event Data - add new events here
  const events = [
    { time: '08:00', event: 'USD Retail Sales (MoM)', impact: 'high', actual: '0.7%', forecast: '0.5%', previous: '0.6%' },
    { time: '08:30', event: 'GBP GDP (QoQ)', impact: 'medium', actual: '0.3%', forecast: '0.4%', previous: '0.2%' },
    { time: '09:00', event: 'CAD Employment Change', impact: 'high', actual: '15.2K', forecast: '20K', previous: '12.5K' },
    { time: '09:30', event: 'JPY CPI (YoY)', impact: 'medium', actual: '0.8%', forecast: '0.7%', previous: '0.6%' },
    { time: '10:30', event: 'EUR Unemployment Rate', impact: 'low', actual: '—', forecast: '—', previous: '—' },
    { time: '10:30', event: 'INR HSBC Composite PMI', impact: 'medium', actual: '—', forecast: '—', previous: '—' },
    { time: '10:30', event: 'SGD Consumer Price Index (YoY)', impact: 'low', actual: '0.6', forecast: '0.6', previous: '—' },
    { time: '12:45', event: 'EUR HCOB Manufacturing PMI', impact: 'high', actual: '50.2', forecast: '50.4', previous: '49.8' },
    { time: '13:00', event: 'EUR HCOB Services PMI', impact: 'high', actual: '49.5', forecast: '49.3', previous: '49.8' },
    { time: '14:30', event: 'USD GDP QoQ', impact: 'high', actual: '2.0%', forecast: '1.8%', previous: '2.1%' },
    { time: '15:00', event: 'GBP CPI YoY', impact: 'medium', actual: '3.2%', forecast: '3.0%', previous: '2.9%' },
    { time: '16:00', event: 'AUD Unemployment Rate', impact: 'low', actual: '4.1%', forecast: '4.0%', previous: '4.2%' },
    { time: '16:30', event: 'USD Nonfarm Payrolls', impact: 'high', actual: '210k', forecast: '200k', previous: '180k' },
    { time: '17:00', event: 'CAD Retail Sales MoM', impact: 'medium', actual: '0.5%', forecast: '0.4%', previous: '0.3%' },
  ];

  // Convert HH:mm to minutes for sorting
  const timeToMinutes = (timeStr) => {
    const [h, m] = timeStr.split(":").map(Number);
    return h * 60 + m;
  };

  const sortedEvents = [...events].sort((a, b) => timeToMinutes(a.time) - timeToMinutes(b.time));

  // Update live clock
  const updateTime = () => {
    const date = new Date();
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: timeFormat === "AM/PM",
      timeZone: selectedTimezone
    };
    const formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);

    const tzFormatter = new Intl.DateTimeFormat("en-US", {
      timeZone: selectedTimezone,
      timeZoneName: "shortOffset"
    });
    const parts = tzFormatter.formatToParts(date);
    const offset = parts.find(p => p.type === "timeZoneName")?.value || "";

    setCurrentTime(`${formattedTime} ${offset}`);
  };

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, [selectedTimezone, timeFormat]);

  return (
    <>
      {/* ---------- FIRST PAGE ---------- */}
      <div className="calendar-container">
        <div className="content">
          <div className="header">
            <h1>
              Download <br /> Economic Calendar
              <p className="para">to iCloud, Google, or Outlook</p>
            </h1>
            <p className="subtext">
              Don’t miss upcoming trading opportunities. Get alerts in your iCloud,
              Google, or Outlook Calendar of major economic events.
            </p>
            <p className="add-to-calendar">Add to calendar</p>
            <div className="download-buttons">
              <button className="calendar-btn apple-btn"><img src="/applelogo.png" alt="Apple" /></button>
              <button className="calendar-btn google-btn"><img src="/googlelogo.webp" alt="Google" /></button>
              <button className="calendar-btn outlook-btn"><img src="/BBM3.webp" alt="Outlook" /></button>
              <button className="calendar-btn ics-btn"><img src="/BBM5.webp" alt="ICS" /></button>
            </div>
          </div>
          <div className="phone-image">
            <img src="/Calendar.webp" alt="Phone with calendar" />
          </div>
        </div>
      </div>

      {/* ---------- SECOND PAGE ---------- */}
      <div className="economic-calendar-wrapper">
        <div className="economic-calendar-section">
          {/* Top Bar */}
          <div className="calendar-top-bar">
            <div className="calendar-left">
              <button className="live-btn">● Live</button>
              <select
                className="calendar-dropdown"
                value={selectedDropdown}
                onChange={(e) => setSelectedDropdown(e.target.value)}
              >
                <option>Live - Next 24 Hours</option>
                <option>Today</option>
                <option>Tomorrow</option>
                <option>Yesterday</option>
                <option>This Week</option>
                <option>This Month</option>
                <option>Next Week</option>
                <option>Next Month</option>
                <option>Previous Week</option>
                <option>Previous Month</option>
              </select>
            </div>

            <div className="calendar-right">
              <div className="timezone-box">
                <div className="timezone-inline">
                  <span className="time-display">{currentTime}</span>
                  <label>
                    <input type="radio" checked={timeFormat === "24h"} onChange={() => setTimeFormat("24h")} /> 24h
                  </label>
                  <label>
                    <input type="radio" checked={timeFormat === "AM/PM"} onChange={() => setTimeFormat("AM/PM")} /> AM/PM
                  </label>
                  <select value={selectedTimezone} onChange={(e) => setSelectedTimezone(e.target.value)}>
                    {timezones.map((tz) => (
                      <option key={tz.value} value={tz.value}>{tz.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Search + Filters */}
          <div className="calendar-filters">
            <div className="filters-row">
              <input type="text" className="search-input" placeholder="Search events..." />
              <div className="advanced-filter-dropdown">
                <button className="advanced-filter-btn">Advanced Filter</button>
                <div className="advanced-filter-menu">
                  <select className="filter-dropdown">
                    <option>All Countries</option>
                    <option>Eurozone</option>
                    <option>India</option>
                    <option>Singapore</option>
                    <option>USA</option>
                  </select>
                  <select className="filter-dropdown">
                    <option>All Impact Levels</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                  <select className="filter-dropdown">
                    <option>All Categories</option>
                    <option>Manufacturing</option>
                    <option>Services</option>
                    <option>Inflation</option>
                    <option>Employment</option>
                  </select>
                  <div className="filter-buttons">
                    <button className="reset-btn">Reset</button>
                    <button className="apply-btn">Apply Filters</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="calendar-table-box">
            <table className="calendar-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Event</th>
                  <th>Impact</th>
                  <th>Actual</th>
                  <th>Forecast</th>
                  <th>Previous</th>
                </tr>
              </thead>
              <tbody>
                {sortedEvents.map((e, idx) => (
                  <tr key={idx} className={e.impact === "high" ? "high-impact-row" : ""}>
                    <td>{e.time}</td>
                    <td>{e.event}</td>
                    <td><span className={`impact ${e.impact}`}></span></td>
                    <td>{e.actual}</td>
                    <td>{e.forecast}</td>
                    <td>{e.previous}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div class="trading-banner">
            <div class="banner-wrapper">
              <div class="banner-left">
                <img src="/logo2.png" alt="Market.trad Logo" class="banner-logo" />
                <h1 class="banner-title">Transform Market.trad Insights into Smarter Trading</h1>
                <p class="banner-subtitle">Leverage Market.trad’s advanced tools to expand your portfolio, access competitive spreads, and execute trades with unmatched speed—built for serious traders like you</p>
                <div class="banner-buttons">
                  <button class="btn-live">Open Live Account →</button>
                  <button class="btn-demo">Try Demo Account</button>
                </div>
              </div>
              <div class="banner-right">
                <div class="info-panel">
                  <p><span class="panel-label">Live Spreads</span> <span class="panel-value green-text">From 0.0 pips</span></p>
                  <p><span class="panel-label">Execution</span> <span class="panel-value blue-text">&lt;12ms avg</span></p>
                  <p><span class="panel-label">Leverage</span> <span class="panel-value">Up to 1:500</span></p>
                  <p class="market-status"><span class="status-dot green-dot"></span> Markets Open - Ready to Trade</p>
                </div>
              </div>
            </div>
          </div>


        </div>



      </div>
    </>
  );
};

export default EconomicCalendar;
