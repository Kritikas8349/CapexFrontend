import React from "react";

// All commented imports remain untouched
// import LeftDiv from "./component/leftDiv";
// import RightDiv from "./component/RightDiv";
// import QuickStart from "./component/QuickStart";
// import QuickStart3 from "./component/QuickStart3";
// import QuickStart4 from "./component/QuickStart4";
// import QuickStart5 from "./component/QuickStart5";
// import QuickStart6 from "./component/QuickStart6";
// import Navbar from "./component/Navbar1";
// import EducationHub from "./component/EducationHub";
// import Webinars from "./component/Webinars";
// import ForexTutorials from "./component/ForexToutorials";
// import CommoditiesTutorials from "./component/CommoditiesTutorials";
// import SharesTutorials from "./component/SharesTutorials";
// import Research from "./component/Research";
// import LoginForm from "./component/LoginForm1";
// import WelcomeSection from "./component/WelcomeSection";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "bootstrap-icons/font/bootstrap-icons.css";

// 
import About2 from "./component/About2";
import NewsSection from "./component/NewsSection";
import Compliance from "./component/Compliance";
import SecurityFunds from "./component/SecurityFunds";
import GettingStarted from "./component/GettingStarted";
import AccountSupport from "./component/AccountSupport";
import PlatformSupport from "./component/PlatformSupport";
import MarketSupport from "./component/MarketSupport";
import EconomicCalendar from "./component/EconomicCalendar";
import ContactSupport from "./component/ContactSupport";
import VPStrading from "./component/SubPages/VPStrading";
import FixAPI from "./component/SubPages/FixAPI";
import ZuluTrade from "./component/SubPages/Zulutrade";
import Myfxbook from "./component/SubPages/Myfxbook";
import BeginnerShare from "./component/SubPages/BeginnerShare";
import Intermediate from "./component/SubPages/Intermediate";
import AdvShare from "./component/SubPages/AdvShare";

const App = () => {
  return (
    <div className="app-container">
      <div className="main-sections">

        <div className="About2-section">
          <About2 />
        </div>

        <div className="NewsSection-section">
          <NewsSection />
        </div>

        <Compliance />
        <SecurityFunds />
        <GettingStarted />
        <AccountSupport />
        <PlatformSupport />
        <MarketSupport />
        <EconomicCalendar />
        <ContactSupport />
        <VPStrading/>
        <FixAPI/>
        <ZuluTrade/>
        <Myfxbook/>
        <BeginnerShare/>
        <Intermediate/>
        <AdvShare/>

        </div>
        {/*
        <div className="container1">
          <LeftDiv />
          <RightDiv />
          <QuickStart />
          <QuickStart3 />
          <QuickStart4 />
          <QuickStart5 />
          <QuickStart6 />
          <QuickStart7 />
          <Navbar />
        </div>

        <div className="rohan">
          <Navbar />
          <Routes>
            <Route path="/EducationHub" element={<EducationHub />} />
            <Route path="/Webinars" element={<Webinars />} />
            <Route path="/ForexTutorials" element={<ForexTutorials />} />
            <Route path="/CommoditiesTutorials" element={<CommoditiesTutorials />} />
            <Route path="/SharesTutorials" element={<SharesTutorials />} />
            <Route path="/Research" element={<Research />} />
          </Routes>
        </div>
        */}
        
    </div>  
  );
};

export default App;
