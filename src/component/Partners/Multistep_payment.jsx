import React from "react";
import "./Multistep_payment.css";
// import { 
//   FaCalendarAlt, 
//   FaNetworkWired, 
//   FaUsers, 
//   FaUserCheck, 
//   FaFileAlt 
// } from "react-icons/fa";
// Removed broken imports since icons are now in public folder

const CPAPaymentStructure = () => {
  // const steps = [
  //   { icon: <FaCalendarAlt />, title: "Three months minimum with BlackBull Partners" },
  //   { icon: <FaNetworkWired />, title: "Priority brand placement on your channel" },
  //   { icon: <FaCalendarAlt />, title: "At least 30 consecutive days of traffic" },
  //   { icon: <FaUsers />, title: "1,000 new registered leads" },
  //   { icon: <FaUserCheck />, title: "100 qualified referrals" },
  //   { icon: <FaFileAlt />, title: "Written application" },
  // ];

  // Use public folder paths directly
  const criteria = [
    { icon: '/icons1.svg', text: 'Three months minimum with BlackBull Partners' },
    { icon: '/icons2.svg', text: 'Priority brand placement on your channel' },
    { icon: '/icons3.svg', text: 'At least 30 consecutive days of traffic' },
    { icon: '/icons4.svg', text: '1,000 new registered leads' },
    { icon: '/icons5.svg', text: '100 qualified referrals' },
    { icon: '/icons6.svg', text: 'Written application' },
  ];

  const tableData = [
    {
      group: 'Group A',
      rows: [
        { qualification: 'New Lead', multiStepCPA: '$25' },
        { qualification: 'Approved Client', multiStepCPA: '$50', totalCPA: '$500' },
        { qualification: 'Qualifying Deposit & Trade', multiStepCPA: '$425' },
      ],
    },
    {
      group: 'Group B',
      rows: [
        { qualification: 'New Lead', multiStepCPA: '$18.75' },
        { qualification: 'Approved Client', multiStepCPA: '$37.50', totalCPA: '$375' },
        { qualification: 'Qualifying Deposit & Trade', multiStepCPA: '$281.25' },
      ],
    },
    {
      group: 'Group C',
      rows: [
        { qualification: 'New Lead', multiStepCPA: '$15' },
        { qualification: 'Approved Client', multiStepCPA: '$30', totalCPA: '$300' },
        { qualification: 'Qualifying Deposit & Trade', multiStepCPA: '$225' },
      ],
    },
    {
      group: 'Group D',
      rows: [
        { qualification: 'New Lead', multiStepCPA: '$12.50' },
        { qualification: 'Approved Client', multiStepCPA: '$25', totalCPA: '$250' },
        { qualification: 'Qualifying Deposit & Trade', multiStepCPA: '$187.50' },
      ],
    },
  ];

  return (
    <div className="cpa-page">
      {/* Hero Section */}
      <div className="cpa-hero" style={{ backgroundImage: "url('/12.jpg')" }}>
        <div className="cpa-overlay">
          <div className="cpa-breadcrumb">
            HOME &gt; AFFILIATES &gt; CPA STRUCTURES &gt; <b>MULTI-STEP PAYMENT STRUCTURE</b>
          </div>
          <h1 className="cpa-title">Multi-Step Payment Structure</h1>
        </div>
      </div>

      {/* Info Section */}
      <div className="cpa-info">
        <div className="cpa-info-left">
          <h2>
            BlackBull Partners <br /> Multi-Step CPA
          </h2>
        </div>
        <div className="cpa-info-right">
          <p>
            BlackBull Partners offers an industry-leading payment structure to reward our valued partners for their hard work on a cost per acquisition for every new client they refer. High performing affiliates will have access to a BlackBull Partners Multi-Step.
          </p>
        </div>
      </div>

      {/* Multi-Step Criteria Section */}
      <div className="multi-step-section">
        <h2 className="title">
          To Qualify For Multi-Step You Will Need To Meet The Following Criteria:
        </h2>

        <div className="criteria-container">
          {criteria.map((item, idx) => (
            <div className="criteria-item" key={idx}>
              <div className="icon-wrapper">
                <img src={item.icon} alt="" />
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Group</th>
                <th>Qualifications</th>
                <th>Multi-Step CPA</th>
                <th>Total CPA</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((group, idx) =>
                group.rows.map((row, rowIdx) => (
                  <tr key={`${idx}-${rowIdx}`}>
                    {rowIdx === 0 && <td rowSpan={group.rows.length}>{group.group}</td>}
                    <td>{row.qualification}</td>
                    <td>{row.multiStepCPA}</td>
                    <td>{row.totalCPA || ''}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CPAPaymentStructure;
