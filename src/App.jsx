import React from "react";

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

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
// import LeftDiv from "./component/leftDiv";
// import RightDiv from "./component/RightDiv";
// import QuickStart from"./component/QuickStart";
// import "./App.css"; 
// All commented imports remain untouched
// import LeftDiv from "./component/leftDiv";
// import RightDiv from "./component/RightDiv";
// import QuickStart from "./component/QuickStart";
// import QuickStart3 from "./component/QuickStart3";
// import QuickStart4 from "./component/QuickStart4";
// import QuickStart5 from "./component/QuickStart5";
// import QuickStart6 from "./component/QuickStart6";
// // import Navbar from "./component/Navbar";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap-icons/font/bootstrap-icons.css";
// // import LeftDiv from "./component/leftDiv";
// // import RightDiv from "./component/RightDiv";
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
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./component/Navbar1";
import EducationHub from "./component/EducationHub"

import { Route, Routes } from "react-router-dom";
import Webinars from "./component/Webinars";
import ForexTutorials from "./component/ForexToutorials";
import CommoditiesTutorials from "./component/CommoditiesTutorials";
import SharesTutorials from "./component/SharesTutorials";
import Research from "./component/Research";
import EconomicCalendarRC from "./component/EconomicCalendarRC";
import TradingView from "./component/TradingView";
import CTrader from "./component/CTrader";
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
import SecurityFunds from "./SecurityFunds";
import GettingStarted from "./GettingStarted";
import AccountSupport from "./AccountSupport";
import PlatformSupport from "./PlatformSupport";
import MarketSupport from "./MarketSupport";
import EconomicCalendar from "./component/EconomicCalendar";
import ContactSupport from "./ContactSupport";

//import About2 from "./component/About2";
//import NewsSection from "./component/NewsSection";
//import Compliance from "./component/Compliance";

// import About2 from "./component/About2";
// import NewsSection from "./component/NewsSection";
// import Compliance from "./component/Compliance";
// import SecurityFunds from "./SecurityFunds";
// import GettingStarted from "./GettingStarted";
// import AccountSupport from "./AccountSupport";
// import PlatformSupport from "./PlatformSupport";
// import MarketSupport from "./MarketSupport";
// import EconomicCalendar from "./component/EconomicCalendar";


const App = () => {
  return (



    <div className="app-container">








      <div className="rohan">
        <Navbar />
        <Routes>
          <Route path="/EducationHub" element={<EducationHub></EducationHub>}></Route>
          <Route path="/Webinars" element={<Webinars></Webinars>}></Route>
          <Route path="/ForexTutorials" element={<ForexTutorials></ForexTutorials>}></Route>
          <Route path="/CommoditiesTutorials" element={<CommoditiesTutorials></CommoditiesTutorials>}></Route>
          <Route path="/SharesTutorials" element={<SharesTutorials></SharesTutorials>}></Route>
          <Route path="/EconomicCalendarRC" element={<EconomicCalendarRC></EconomicCalendarRC>}></Route>
          <Route path="/Research" element={<Research></Research>}></Route>
          <Route path="/TradingView" element={<TradingView></TradingView>}></Route>
          <Route path="/CTrader" element={<CTrader></CTrader>}></Route>
        </Routes>
      </div>

    </div >
  );
};

export default App;
