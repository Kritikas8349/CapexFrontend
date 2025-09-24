



import React, { useState, useEffect } from "react";

import "./App.css";
import LeftDiv from "./component/leftDiv";
import RightDiv from "./component/RightDiv";
// import Navbar from "./component/Navbar";
import QuickStart from "./component/QuickStart";
import QuickStart2 from "./component/QuickStart2";
import QuickStart3 from "./component/QuickStart3";
import QuickStart4 from "./component/QuickStart4";
import QuickStart5 from "./component/QuickStart5";
import QuickStart6 from "./component/QuickStart6";
import QuickStart7 from "./component/QuickStart7";
import Market from "./component/Market";
import Market2 from "./component/Market2";
import Market3 from "./component/Market3";
import Market4 from "./component/Market4";
import Market5 from "./component/Market5";
import Market6 from "./component/Market6";
import Market7 from "./component/Market7";
import Market_com_Energies from "./component/SubPages/Market_com_Energies";
import Market_com_Metal from "./component/SubPages/Market_com_Metal";
import Market_Future_Energy from "./component/SubPages/Market_Future_Energy";
import Market_Future_Indices from "./component/SubPages/Market_Future_Indices";
import Market_Future_Other from "./component/SubPages/Market_Future_Other";
import Education_Forex_Beginner from "./component/SubPages/Education_Forex_Beginner";
import Education_Forex_Intermediate from "./component/SubPages/Education_Forex_Intermediate";
import Education_Forex_Advance from "./component/SubPages/Education_Forex_Advance";
import CreateAccount from "./component/CreateAccount";





// import Navbar from "./component/Navbar1";
// import EducationHub from "./component/EducationHub";
// import Webinars from "./component/Webinars";
// import ForexTutorials from "./component/ForexToutorials";
// import CommoditiesTutorials from "./component/CommoditiesTutorials";
// import SharesTutorials from "./component/SharesTutorials";
// import Research from "./component/Research";
// import LoginForm from "./component/LoginForm1";
// import WelcomeSection from "./component/WelcomeSection";
// import "./App.css";
// import Market_Future_Other from "./component/SubPages/Market_Future_Other";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "bootstrap-icons/font/bootstrap-icons.css";

// 
// import About2 from "./component/About2";
// import NewsSection from "./component/NewsSection";
// import Compliance from "./component/Compliance";
// import SecurityFunds from "./SecurityFunds";
// import GettingStarted from "./GettingStarted";
// import AccountSupport from "./component/AccountSupport";
// import PlatformSupport from "./PlatformSupport";
// import MarketSupport from "./MarketSupport";
// import EconomicCalendar from "./component/EconomicCalendar";
// import ContactSupport from "./ContactSupport";



const App = () => {
  return (
    <div className="app-container">
      {/* <div className="main-sections">

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
        </div> */}

      <div className="container1">
        <LeftDiv />
          <RightDiv />
          <QuickStart />
          <QuickStart3 />
          <QuickStart2 />
          <QuickStart4 />
          <QuickStart5 />
          <QuickStart6 />
          <QuickStart7 />
          <Market />
          <Market2 />
          <Market3 />
          <Market4 />
          <Market5 />
          <Market6 />
          <Market7 />
          <CreateAccount /> 
          <Market_com_Energies/>
          <Market_Future_Energy/>
          <Market_com_Metal/>
          <Market_Future_Indices/>
          <Market_Future_Other/>
          <Education_Forex_Beginner/> 
          <Education_Forex_Intermediate/>
         <Education_Forex_Advance/>
        

      </div>


      {/* // <div className="rohan">
    //   <Navbar />
    //   <Routes>
    //     <Route path="/EducationHub" element={<EducationHub />} />
    //     <Route path="/Webinars" element={<Webinars />} />
    //     <Route path="/ForexTutorials" element={<ForexTutorials />} />
    //     <Route path="/CommoditiesTutorials" element={<CommoditiesTutorials />} />
    //     <Route path="/SharesTutorials" element={<SharesTutorials />} />
    //     <Route path="/Research" element={<Research />} />
    //   </Routes>
    // </div> */}

    </div>

  );
};

export default App;



































