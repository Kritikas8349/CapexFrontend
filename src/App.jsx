import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import "bootstrap-icons/font/bootstrap-icons.css";

import NavbarBlue from "./component/NavbarBlue";

import Footers from "./component/Footers";

import CreateAccount from "./component/CreateAccount";
import PersonalHome from "./component/PersonalHome";




import EducationHub from "./component/EducationHub";
import Webinars from "./component/Webinars";
import ForexTutorials from "./component/ForexToutorials";
import Education_Forex_Beginner from "./component/SubPages/Education_Forex_Beginner";
import Education_Forex_Intermediate from "./component/SubPages/Education_Forex_Intermediate";
import Education_Forex_Advance from "./component/SubPages/Education_Forex_Advance";
import SharesTutorials from "./component/SharesTutorials";
// import BeginnerShare from "./component/SubPages/BeginnerShare";
// import Intermediate from "./component/SubPages/Intermediate";
// import AdvShare from "./component/SubPages/AdvShare";
import CommoditiesTutorials from "./component/CommoditiesTutorials";
import Education_Com_Beginner from "./component/SubPages/Education_Com_Beginner";
import Education_Com_Intermediate from "./component/SubPages/Education_Com_Intermediate";
import Education_Com_Advance from "./component/SubPages/Educaiton_Com_Advance";
//  import EconomicCalendar from "./component/EconomicCalendar"; 
import Research from "./component/Research";
import TradingOpportunity from "./component/SubPages/TradingOpportunity";
import InvestmentResearch from "./component/SubPages/InvestmentResearch";
import TradingView from "./component/TradingView";
import CTrader from "./component/CTrader";
import MetaTrader4 from "./component/MetaTrader4";
import MetaTrader5 from "./component/MetaTrader5";
import CopyTrader from "./component/CopyTrader";
//import QuickStart3 from "./component/QuickStart3"; trading tools
// import VPStrading from "./component/SubPages/VPStrading";
// import FixAPI from "./component/SubPages/FixAPI";
// import ZuluTrade from "./component/SubPages/Zulutrade";
// import Myfxbook from "./component/SubPages/Myfxbook";






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


// Sub Pages
import Market_com_Energies from "./component/SubPages/Market_com_Energies";
import Market_com_Metal from "./component/SubPages/Market_com_Metal";
import Market_Future_Energy from "./component/SubPages/Market_Future_Energy";
import Market_Future_Indices from "./component/SubPages/Market_Future_Indices";
import Market_Future_Other from "./component/SubPages/Market_Future_Other";





import About2 from "./component/About2";
import NewsSection from "./component/NewsSection";
import Compliance from "./component/Compliance";
import SecurityFunds from "./component/SecurityFunds";
import GettingStarted from "./component/GettingStarted";
import AccountSupport from "./component/AccountSupport";
import PlatformSupport from "./component/PlatformSupport";
import LoginForm1 from "./component/LoginForm1";
import ScrollToTop from "./component/ScrollToTop";



import SecureClientArea from "./component/SubPages/SecureClientArea";
import TradingViewFAQs from "./component/SubPages/TradingViewFAQs";
import CTraderFAQs from "./component/SubPages/CTraderFAQs";
import MetaTrader4FAQs from "./component/SubPages/MetaTrader4FAQs";
import MetaTrader5FAQs from "./component/SubPages/MetaTrader5FAQs";
import BlackBullInvestFAQs from "./component/SubPages/BlackBullInvestFAQ";
import MarketSupport from "./component/MarketSupport";
import TradingConditions from "./component/SubPages/TradingConditions";
import TradingHourChange from "./component/SubPages/TradingHourChange";
import ContractSpecifications from "./component/SubPages/ContractSpecifications"
import ContractExpiries from "./component/SubPages/ContractExpiries"
import EconomicCalendar from "./component/EconomicCalendar";
import ContactSupport from "./component/ContactSupport";
import VPStrading from "./component/SubPages/VPStrading";
import FixAPI from "./component/SubPages/FixAPI";
import ZuluTrade from "./component/SubPages/ZuluTrade";
import Myfxbook from "./component/SubPages/Myfxbook";
import BeginnerShare from "./component/SubPages/BeginnerShare";
import Intermediate from "./component/SubPages/Intermediate";
import AdvShare from "./component/SubPages/AdvShare";
import AccountCreate from "./component/SubPages/AccountCreate";
import VerifyAccount from "./component/SubPages/VerifyAccount";
import FundAccount from "./component/SubPages/FundAccount";
import ConnectTrading from "./component/SubPages/ConnectTrading";
import FirstTrade from "./component/SubPages/FirstTrade";
import InvestAccount from "./component/SubPages/InvestAccount";
import FundInvest from "./component/SubPages/FundInvest";
import InstallMarkettrad from "./component/SubPages/InstallMarkettrad";
import ChangeCurrency from "./component/SubPages/ChangeCurrency";



//------------------------------ Partner----------------------------------//
import PartnerNavbar from "./component/PartnerNavbar";
import PartnerHome from "./component/Partners/PartnerHome";
import AffiliateOverview from "./component/Partners/AffiliateOverview";
import Cpapaymentstructure from "./component/Partners/Cpapaymentstructure";
import Multistep_payment from "./component/Partners/Multistep_payment";
import PartnerTier from "./component/Partners/PartnerTier";
import Subaffiliate from "./component/Partners/subaffiliate";
import ExampleReview from "./component/Partners/ExampleReview";
import AffiliateSupport from "./component/Partners/AffiliateSupport";
import IBOverview from "./component/Partners/IBOverview";
import RegionalRepresentatives from "./component/Partners/RegionalRepresentatives";
import MarketingMaterials from "./component/Partners/MarketingMaterials";
// import  from "./component/Partners/";
import AboutUs from "./component/Partners/AboutUs";
import ComplianceP from "./component/Partners/ComplianceP";
import BlogPartner from "./component/Partners/BlogPartner";
// import BlogPartner from "./component/Partners/BlogPartner";
// import BlogPartner from "./component/Partners/BlogPartner";
// import BlogPartner from "./component/Partners/BlogPartner";
import Support1 from "./component/Partners/Support1";
import Support2 from "./component/Partners/Support2";
import Support3 from "./component/Partners/Support3";
import Partnerterms from "./component/Partners/Partnerterms";
import VerificationPayments from "./component/Partners/VerificationPayments";


//--------------------------------------- Research------------------------------------------ //

import ResearchNavbar from "./component/ResearchNavbar";
import ResearchHome from "./component/Research/ResearchHome";
import DailyNews from "./component/Research/DailyNews";
import EquityResearch from "./component/Research/EquityResearch";
import Australia from "./component/Research/Australia";
import NewZealand from "./component/Research/NewZealand";
import USA from "./component/Research/USA";
import TechnicalAnalysis from "./component/Research/TechnicalAnalysis";

// import Dashboard from "./Component/Dashboard";
// import Dashboard from "../../User_Panel/src/Component/Dashboard";

// import Dashboard from "../User_panel-main/User_Panel/src/Component/Dashboard";


function Layout({ children }) {
  const location = useLocation();

  const isPartnerPage = location.pathname.startsWith("/partners") ||
    location.pathname.startsWith("/affiliates") ||
    location.pathname.startsWith("/ib-program") ||
    location.pathname.startsWith("/partner-about") ||
    location.pathname.startsWith("/partner/support");

  const isResearchPage = location.pathname.startsWith("/research") ||
    location.pathname.startsWith("/Daily News") ||
    location.pathname.startsWith("/Equity Research") ||
    location.pathname.startsWith("/Technical Analysis");

  let navbar = <NavbarBlue />;

  if (isResearchPage) {
    navbar = <ResearchNavbar />;
  } else if (isPartnerPage) {
    navbar = <PartnerNavbar />;
  }

  return (
    <>
      {navbar}
      {children}
    </>
  );
}





function App() {
  return (





    <div className='app-container'>


      <div className="app-section">
        <ScrollToTop />
        <Layout />
        <>
          {/* <NavbarBlue /> */}

          <Routes>

            <Route path="/loginform" element={<LoginForm1 />} />
            <Route path="/create-account" element={<CreateAccount />} />


            <Route path="/quickstart/create-account" element={<CreateAccount />}></Route>
            {/* Aryan */}
            {/* Quick Start */}
            <Route path="/quickstart/why-markets" element={<QuickStart />} />
            <Route path="/quickstart/assets" element={<QuickStart2 />} />
            <Route path="/quickstart/platform-options" element={<QuickStart3 />} />
            <Route path="/quickstart/account-types" element={<QuickStart4 />} />
            <Route path="/quickstart/verify-account" element={<QuickStart5 />} />
            <Route path="/quickstart/deposit-funds" element={<QuickStart6 />} />
            <Route path="/quickstart/withdraw-funds" element={<QuickStart7 />} />


            {/* Market Overview */}
            <Route path="/markets" element={<Market />} />
            <Route path="/markets/forex" element={<Market2 />} />
            <Route path="/market/equities" element={<Market3 />} />
            <Route path="/markets/commodities" element={<Market4 />} />
            <Route path="/markets/futures" element={<Market5 />} />
            <Route path="/markets/indices" element={<Market6 />} />
            <Route path="/markets/crypto" element={<Market7 />} />

            {/* Commodities & Futures */}
            <Route path="/markets/commodities/energies" element={<Market_com_Energies />} />
            <Route path="/markets/commodities/metals" element={<Market_com_Metal />} />
            <Route path="/markets/futures/energy" element={<Market_Future_Energy />} />
            <Route path="/markets/futures/indices" element={<Market_Future_Indices />} />
            <Route path="/markets/futures/other" element={<Market_Future_Other />} />




            {/* Rohan */}


            <Route path="/education/education-hub" element={<EducationHub />}></Route>
            <Route path="/education/webinars" element={<Webinars></Webinars>}></Route>
            <Route path="/education/forex" element={<ForexTutorials></ForexTutorials>}></Route>
            <Route path="/education/forex/beginner" element={<Education_Forex_Beginner />}></Route>
            <Route path="/education/forex/intermediate" element={<Education_Forex_Intermediate />}></Route>
            <Route path="/education/forex/advanced" element={<Education_Forex_Advance />}></Route>
            <Route path="/education/shares" element={<SharesTutorials></SharesTutorials>}></Route>
            {/* <Route path="/education/shares/beginner" element={<BeginnerShare />} /> */}
            {/* <Route path="/education/shares/intermediate" element={<Intermediate />} /> */}
            {/* <Route path="/education/shares/advanced" element={<AdvShare />} />   */}
            <Route path="/education/commodities" element={<CommoditiesTutorials></CommoditiesTutorials>}></Route>
            <Route path="/education/commodities/beginner" element={<Education_Com_Beginner />}></Route>
            <Route path="/education/commodities/intermediate" element={<Education_Com_Intermediate />}></Route>
            <Route path="/education/commodities/advanced" element={<Education_Com_Advance />}></Route>
            <Route path="/support/economic-calendar" element={<EconomicCalendar></EconomicCalendar>}></Route>
            <Route path="/education/research/hub" element={<Research></Research>}></Route>
            <Route path='/education/research/opportunities' element={<TradingOpportunity></TradingOpportunity>}></Route>
            <Route path="/education/research/investmenresearch" element={<InvestmentResearch></InvestmentResearch>}></Route>
            <Route path="/platforms/tradingview" element={<TradingView></TradingView>}></Route>
            <Route path="/platforms/ctrade" element={<CTrader></CTrader>}></Route>
            <Route path="/platforms/mt4" element={<MetaTrader4></MetaTrader4>}></Route>
            <Route path="/platforms/mt5" element={<MetaTrader5></MetaTrader5>}></Route>
            <Route path="/platforms/copytrade" element={<CopyTrader></CopyTrader>}></Route>
            <Route path="/platforms/tradingtools" element={<QuickStart3 />} />
            <Route path="/platform/tradingtools/vpstrading" element={<VPStrading />} />
            <Route path="/platform/tradingtools/fixapi" element={<FixAPI />} />
            <Route path="/platform/tradingtools/zulutrade" element={<ZuluTrade />} />
            <Route path="/platform/tradingtools/myfxbook" element={<Myfxbook />} />




         <Route path="/Research" element={<ResearchHome />} />
         <Route path="/research/daily-news" element={<DailyNews />}></Route>
          {/* <Route path="/research/equity-research" element={<EquityResearch />}></Route> */}
          <Route path="/research/equity-research/australia" element={<Australia />}></Route>
          <Route path="/research/equity-research/new-zealand" element={<NewZealand/>}></Route>
          <Route path="/research/equity-research/usa" element={<USA/>}></Route>
          <Route path="/research/technical-analysis" element={<TechnicalAnalysis/>}></Route>
{/* <Route path="/userdashboard" element={<Dashboard />} /> */}






          </Routes>
        </>
        <Footers />






      </div>

    </div>


  )
}

export default App