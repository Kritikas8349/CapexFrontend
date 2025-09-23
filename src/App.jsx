import React from "react";

// All your previous commented imports remain commented
// import LeftDiv from "./component/leftDiv";
// import RightDiv from "./component/RightDiv";
// import QuickStart from "./component/QuickStart";
// import "./App.css";
// import QuickStart3 from "./component/QuickStart3";
// import QuickStart4 from "./component/QuickStart4";
// import QuickStart5 from "./component/QuickStart5";
// import QuickStart6 from "./component/QuickStart6";
// import Navbar from "./component/Navbar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import Navbar from "./component/Navbar1";
// import EducationHub from "./component/EducationHub";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

// Components
// import Navbar from "./component/Navbar1";
// import EducationHub from "./component/EducationHub";
// import Webinars from "./component/Webinars";
// import ForexTutorials from "./component/ForexToutorials";
// import CommoditiesTutorials from "./component/CommoditiesTutorials";
// import SharesTutorials from "./component/SharesTutorials";
// import Research from "./component/Research";

// Other sections
import About2 from "./component/About2";
import NewsSection from "./component/NewsSection";
import Compliance from "./component/Compliance";
import SecurityFunds from "./SecurityFunds";
import GettingStarted from "./GettingStarted";
import AccountSupport from "./AccountSupport";
import PlatformSupport from "./PlatformSupport";
import MarketSupport from "./MarketSupport";
import EconomicCalendar from "./component/EconomicCalendar";
import ContactSupport from "./ContactSupport";

const App = () => {
  return (
    <div className="app-container">

      Router and Navbar
      <Router>
        <Navbar />
        <Routes>
          <Route path="/EducationHub" element={<EducationHub />} />
          <Route path="/Webinars" element={<Webinars />} />
          <Route path="/ForexTutorials" element={<ForexTutorials />} />
          <Route path="/CommoditiesTutorials" element={<CommoditiesTutorials />} />
          <Route path="/SharesTutorials" element={<SharesTutorials />} />
          <Route path="/Research" element={<Research />} />
        </Routes>
      </Router>

      {/* Sections */}
      <About2 />
      <NewsSection />
      <Compliance />
      <SecurityFunds />
      <GettingStarted />
      <AccountSupport />
      <PlatformSupport />
      <MarketSupport />
      <EconomicCalendar />
      <ContactSupport />

      {/* All commented-out code preserved */}
      {/* <div className="main-sections"> ... </div> */}
      {/* <LeftDiv /> */}
      {/* <RightDiv /> */}
      {/* <QuickStart /> */}
      {/* <QuickStart3 /> */}
      {/* <QuickStart4 /> */}
      {/* <QuickStart5 /> */}
      {/* <QuickStart6 /> */}
      {/* <QuickStart7 /> */}
      {/* <Market /> */}
    </div>
  );
};

export default App;
