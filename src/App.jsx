




import React, { useState, useEffect } from "react";

//import "./App.css";
// import LeftDiv from "./component/leftDiv";
// import RightDiv from "./component/RightDiv";
// import Navbar from "./component/Navbar";
// import QuickStart from "./component/QuickStart";
// import QuickStart2 from "./component/QuickStart2";
// import QuickStart3 from "./component/QuickStart3";
// import QuickStart4 from "./component/QuickStart4";
// import QuickStart5 from "./component/QuickStart5";
// import QuickStart6 from "./component/QuickStart6";
// import QuickStart7 from "./component/QuickStart7";
// import Market from "./component/Market";
// import Market2 from "./component/Market2";
// import Market3 from "./component/Market3";
// import Market4 from "./component/Market4";
// import Market5 from "./component/Market5";
// import Market6 from "./component/Market6";
// import Market7 from "./component/Market7";
// import Market_com_Energies from "./component/SubPages/Market_com_Energies";
// import Market_com_Metal from "./component/SubPages/Market_com_Metal";
// import Market_Future_Energy from "./component/SubPages/Market_Future_Energy";
// import Market_Future_Indices from "./component/SubPages/Market_Future_Indices";
// import Market_Future_Other from "./component/SubPages/Market_Future_Other";
// import Education_Forex_Beginner from "./component/SubPages/Education_Forex_Beginner";
// import Education_Forex_Intermediate from "./component/SubPages/Education_Forex_Intermediate";
// import Education_Forex_Advance from "./component/SubPages/Education_Forex_Advance";
import CreateAccount from "./component/CreateAccount";




//import LeftDiv from "./component/leftDiv";
//import RightDiv from "./component/RightDiv";
//import QuickStart from "./component/QuickStart";
// import "./App.css";
//import QuickStart3 from "./component/QuickStart3";
//import QuickStart4 from "./component/QuickStart4";
//import QuickStart5 from "./component/QuickStart5";
//import QuickStart6 from "./component/QuickStart6";
// import Navbar from "./component/Navbar";

import "./App.css";


// import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "bootstrap-icons/font/bootstrap-icons.css";

//  import LeftDiv from "./component/leftDiv";
//  import RightDiv from "./component/RightDiv";
// // import QuickStart from"./component/QuickStart";
// // import "./App.css"; 
// // import QuickStart3 from "./component/QuickStart3";
// // import QuickStart4 from "./component/QuickStart4";
// // import QuickStart5 from "./component/QuickStart5";
// import Navbar from "./component/Navbar1";
// import EducationHub from "./component/EducationHub"

// import LeftDiv from "./component/leftDiv";
// import RightDiv from "./component/RightDiv";
// import QuickStart from "./component/QuickStart";
// import "./App.css";
// import QuickStart3 from "./component/QuickStart3";
// import QuickStart4 from "./component/QuickStart4";
// import QuickStart5 from "./component/QuickStart5";
// import QuickStart6 from "./component/QuickStart6";
// import QuickStart7 from "./component/QuickStart7";
// import Market from "./component/Market";

// import Navbar from "./component/Navbar";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./component/Navbar1";
import EducationHub from "./component/EducationHub"

import { Route, Routes } from "react-router-dom";
import Webinars from "./component/Webinars";
import ForexTutorials from "./component/ForexToutorials";
import CommoditiesTutorials from "./component/CommoditiesTutorials";
import SharesTutorials from "./component/SharesTutorials";
import Research from "./component/Research";
import TradingView from "./component/TradingView";
import CTrader from "./component/CTrader";
import MetaTrader4 from "./component/MetaTrader4";
import MetaTrader5 from "./component/MetaTrader5";
import CopyTrader from "./component/CopyTrader";
import Invest from "./component/invest";
// import LeftDiv from "./component/leftDiv";
// import RightDiv from "./component/RightDiv";
// import Navbar from "./component/Navbar";
// import QuickStart from "./component/QuickStart";
// import QuickStart2 from "./component/QuickStart2";
// import QuickStart3 from "./component/QuickStart3";
// import QuickStart4 from "./component/QuickStart4";
// import QuickStart5 from "./component/QuickStart5";
// import QuickStart6 from "./component/QuickStart6";
// import QuickStart7 from "./component/QuickStart7";
// import Market from "./component/Market";
// import Market2 from "./component/Market2";
// import Market3 from "./component/Market3";
// import Market4 from "./component/Market4";
// import Market5 from "./component/Market5";
// import Market6 from "./component/Market6";
// import Market7 from "./component/Market7";
// import CreateAccount from "./component/CreateAccount";



// import About2 from "./component/About2";
// import NewsSection from "./component/NewsSection";
// import Compliance from "./component/Compliance";
// import SecurityFunds from "./component/SecurityFunds";
// import GettingStarted from "./component/GettingStarted";
// import AccountSupport from "./component/AccountSupport";
// import PlatformSupport from "./component/PlatformSupport";
// import MarketSupport from "./component/MarketSupport";
// import EconomicCalendar from "./component/EconomicCalendar";
// import ContactSupport from "./component/ContactSupport";
// import VPStrading from "./component/SubPages/VPStrading";
// import FixAPI from "./component/SubPages/FixAPI";
// import ZuluTrade from "./component/SubPages/Zulutrade";
// import Myfxbook from "./component/SubPages/Myfxbook";
// import BeginnerShare from "./component/SubPages/BeginnerShare";
// import Intermediate from "./component/SubPages/Intermediate";
// import AdvShare from "./component/SubPages/AdvShare";

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



// import About2 from "./component/About2";
// import NewsSection from "./component/NewsSection";
// import Compliance from "./component/Compliance";
// import SecurityFunds from "./SecurityFunds";
// import GettingStarted from "./GettingStarted";
// import AccountSupport from "./AccountSupport";
// import PlatformSupport from "./PlatformSupport";
// import MarketSupport from "./MarketSupport";
//import EconomicCalendar from "./component/EconomicCalendar";
// import ContactSupport from "./ContactSupport";


//import About2 from "./component/About2";
//import NewsSection from "./component/NewsSection";
//import Compliance from "./component/Compliance";


// import About2 from "./component/About2";
// import NewsSection from "./component/NewsSection";
// import Compliance from "./component/Compliance";
// import SecurityFunds from "./SecurityFunds";
// import GettingStarted from "./GettingStarted";
// import AccountSupport from "./component/AccountSupport";
// import PlatformSupport from "./PlatformSupport";
// import MarketSupport from "./MarketSupport";
 import EconomicCalendar from "./component/EconomicCalendar";
import InvestmentResearch from "./component/SubPages/InvestmentResearch";
import SecureClientArea from "./component/SubPages/SecureClientArea";
import TradingViewFAQs from "./component/SubPages/TradingViewFAQs";
import CTraderFAQs from "./component/SubPages/CTraderFAQs";
import MetaTrader4FAQs from "./component/SubPages/MetaTrader4FAQs";
import MetaTrader5FAQs from "./component/SubPages/MetaTrader5FAQs";
import BlackBullInvestFAQs from "./component/SubPages/BlackBullInvest";
import TradingConditions from "./component/SubPages/TradingConditions";
import TradingHourChange from "./component/SubPages/TradingHourChange";

// import ContactSupport from "./ContactSupport";



const App = () => {
  return (
  
  <div className="app-container">
      <div className="rohan">
        <Navbar />
        <Routes>
          <Route path="/" element={<EducationHub/>}></Route>
          <Route path="/Webinars" element={<Webinars></Webinars>}></Route>
          <Route path="/ForexTutorials" element={<ForexTutorials></ForexTutorials>}></Route>
          <Route path="/CommoditiesTutorials" element={<CommoditiesTutorials></CommoditiesTutorials>}></Route>
          <Route path="/SharesTutorials" element={<SharesTutorials></SharesTutorials>}></Route>
          <Route path="/EconomicCalendar" element={<EconomicCalendar></EconomicCalendar>}></Route>
          <Route path="/CreateAccount" element={<CreateAccount></CreateAccount>}></Route>
          <Route path="/Research" element={<Research></Research>}></Route>
          <Route path="/TradingView" element={<TradingView></TradingView>}></Route>
          <Route path="/CTrader" element={<CTrader></CTrader>}></Route>
          <Route path="/MetaTrader4" element={<MetaTrader4></MetaTrader4>}></Route>
          <Route path="/MetaTrader5" element={<MetaTrader5></MetaTrader5>}></Route>
          <Route path="/CopyTrader" element={<CopyTrader></CopyTrader>}></Route>
          <Route path="/Invest" element={<Invest></Invest>}></Route>
          <Route path="/InvestmentResearch" element={<InvestmentResearch></InvestmentResearch>}></Route> {/*Child page of Education hub Research*/}
          <Route path="/SecureClientArea" element={<SecureClientArea></SecureClientArea>}></Route> {/*Child page of platform support*/}
          <Route path="/TradingViewFAQs" element={<TradingViewFAQs></TradingViewFAQs>}></Route> {/*Child page of platform support*/}
          <Route path="/CTraderFAQs" element={<CTraderFAQs></CTraderFAQs>}></Route> {/*Child page of platform support*/}
          <Route path="/MetaTrader4FAQs" element={<MetaTrader4FAQs></MetaTrader4FAQs>}></Route> {/*Child page of platform support*/}
          <Route path="/MetaTrader5FAQs" element={<MetaTrader5FAQs></MetaTrader5FAQs>}></Route> {/*Child page of platform support*/}
          <Route path="/BlackBullInvestFAQs" element={<BlackBullInvestFAQs></BlackBullInvestFAQs>}></Route> {/*Child page of platform support*/}
          <Route path="/TradingConditions" element={<TradingConditions></TradingConditions>}></Route> {/*Child page of market support*/}
          <Route path="/TradingHourChange" element={<TradingHourChange></TradingHourChange>}></Route> {/*Child page of market support*/}
                                    

  
      </Routes>
      {/* <div className="main-sections">

        <div className="About2-section">
          <About2 />
        </div>

        <div className="NewsSection-section">
          <NewsSection />
        </div>

 
        <div className="app-section">
        <Compliance />
        <SecurityFunds />
        <GettingStarted />
        <AccountSupport />
        <PlatformSupport />
        <MarketSupport />
        <EconomicCalendar />
        <ContactSupport />

</div> */}

      {/* <div className="container1">
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
        

      </div> */}


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


        {/* <VPStrading />
        <FixAPI />
        <ZuluTrade />
        <Myfxbook />
        <BeginnerShare />
        <Intermediate />
        <AdvShare /> */}
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
      */}

      {/*
        <div className="rohan">
          <Navbar />
          <Routes>
            <Route path="/EducationHub" element={<EducationHub></EducationHub>} />
            <Route path="/Webinars" element={<Webinars></Webinars>} />
            <Route path="/ForexTutorials" element={<ForexTutorials></ForexTutorials>} />
            <Route path="/CommoditiesTutorials" element={<CommoditiesTutorials></CommoditiesTutorials>} />
            <Route path="/SharesTutorials" element={<SharesTutorials></SharesTutorials>} />
            <Route path="/EconomicCalendarRC" element={<EconomicCalendarRC></EconomicCalendarRC>} />
            <Route path="/Research" element={<Research></Research>} />
            <Route path="/TradingView" element={<TradingView></TradingView>} />
            <Route path="/CTrader" element={<CTrader></CTrader>} />
          </Routes>
        </div>
 
 */}
    </div>

  );
};

export default App;



































