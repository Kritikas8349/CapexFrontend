
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";



import EducationHub from "./component/EducationHub";
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
import BlackbullInvest from "./component/BlackbullInvest";
import EconomicCalendar from "./component/EconomicCalendar";
import InvestmentResearch from "./component/SubPages/InvestmentResearch";
import SecureClientArea from "./component/SubPages/SecureClientArea";
import TradingViewFAQs from "./component/SubPages/TradingViewFAQs";
import CTraderFAQs from "./component/SubPages/CTraderFAQs";
import MetaTrader4FAQs from "./component/SubPages/MetaTrader4FAQs";
import MetaTrader5FAQs from "./component/SubPages/MetaTrader5FAQs";
import BlackBullInvestFAQs from "./component/SubPages/BlackBullInvestFAQ";
import TradingConditions from "./component/SubPages/TradingConditions";
import TradingHourChange from "./component/SubPages/TradingHourChange";
import ContractSpecifications from "./component/SubPages/ContractSpecifications"
import ContractExpiries from "./component/SubPages/ContractExpiries"
import IBOverview from "./component/Partners/IBOverview"
import RegionalRepresentatives from "./component/Partners/RegionalRepresentatives"
import MarketingMaterials from "./component/Partners/MarketingMaterials"
import Navbar from "./component/NavbarBlue";



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
 //import Market5 from "./component/Market5";
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
// import Education_Com_Beginner from "./component/SubPages/Education_com_Beginner";
// import Education_Com_Intermediate from "./component/SubPages/Education_Com_Intermediate";
// import Education_Com_Advance from "./component/SubPages/Educaiton_Com_Advance";
 import CreateAccount from "./component/CreateAccount";
// import Navbar from "./component/Navbar1";
// import popup from "./component/SubPages/popup";
// import DailyNews from "./component/Research/DailyNews";
// import EquityResearch from "./component/Research/EquityResearch";
// import NavbarBlue from "./component/NavbarBlue";
// import Australia from "./component/Research/Australia";
// import NewZealand from "./component/Research/NewZealand";
// import USA from "./component/Research/USA";
// import TechnicalAnalysis from "./component/Research/TechnicalAnalysis";
// import Support1 from "./component/Partners/Support1"; 
// import Support2 from "./component/Partners/Support2"; 
// import Support3 from "./component/Partners/Support3";





import NavbarBlue from "./component/NavbarBlue";
import Footers from "./component/Footers";



// import EducationHub from "./component/EducationHub";
// import Webinars from "./component/Webinars";
// import ForexTutorials from "./component/ForexToutorials";
// import CommoditiesTutorials from "./component/CommoditiesTutorials";
// import SharesTutorials from "./component/SharesTutorials";
// import Research from "./component/Research";
// import TradingView from "./component/TradingView";
// import CTrader from "./component/CTrader";
// import MetaTrader4 from "./component/MetaTrader4";
// import MetaTrader5 from "./component/MetaTrader5";
// import CopyTrader from "./component/CopyTrader";
// import Invest from "./component/invest";
// import EconomicCalendar from "./component/EconomicCalendar";
// import InvestmentResearch from "./component/SubPages/InvestmentResearch";
// import SecureClientArea from "./component/SubPages/SecureClientArea";
// import TradingViewFAQs from "./component/SubPages/TradingViewFAQs";
// import CTraderFAQs from "./component/SubPages/CTraderFAQs";
// import MetaTrader4FAQs from "./component/SubPages/MetaTrader4FAQs";
// import MetaTrader5FAQs from "./component/SubPages/MetaTrader5FAQs";
// import BlackBullInvestFAQs from "./component/SubPages/BlackBullInvest";
// import TradingConditions from "./component/SubPages/TradingConditions";
// import TradingHourChange from "./component/SubPages/TradingHourChange";
// import ContractSpecifications from "./component/SubPages/ContractSpecifications"
// import ContractExpiries from "./component/SubPages/ContractExpiries "
// import IBOverview from "./component/Partners/IBOverview"
// import RegionalRepresentatives from "./component/Partners/RegionalRepresentatives"
// import MarketingMaterials from "./component/Partners/MarketingMaterials"





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
// import Education_Com_Beginner from "./component/SubPages/Education_com_Beginner";
// import Education_Com_Intermediate from "./component/SubPages/Education_Com_Intermediate";
// import Education_Com_Advance from "./component/SubPages/Educaiton_Com_Advance";
// import CreateAccount from "./component/CreateAccount";
// import Navbar from "./component/Navbar1";
// import popup from "./component/SubPages/popup";
// import DailyNews from "./component/Research/DailyNews";
// import EquityResearch from "./component/Research/EquityResearch";
// import NavbarBlue from "./component/NavbarBlue";
// import Australia from "./component/Research/Australia";
// import NewZealand from "./component/Research/NewZealand";
// import USA from "./component/Research/USA";
// import TechnicalAnalysis from "./component/Research/TechnicalAnalysis";
// import Support1 from "./component/Partners/Support1"; 
// import Support2 from "./component/Partners/Support2"; 
// import Support3 from "./component/Partners/Support3";


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
import AccountCreate from "./component/SubPages/AccountCreate";
import VerifyAccount from "./component/SubPages/VerifyAccount";
import FundAccount from "./component/SubPages/FundAccount";
import ConnectTrading from "./component/SubPages/ConnectTrading";
import FirstTrade from "./component/SubPages/FirstTrade";
import InvestAccount from "./component/SubPages/InvestAccount";
import FundInvest from "./component/SubPages/FundInvest";
import InstallMarkettrad from "./component/SubPages/InstallMarkettrad";
import ChangeCurrency from "./component/SubPages/ChangeCurrency";
// import PartnerHome from "./component/Partners/PartnerHome";
// import AboutUs from "./component/Partners/AboutUs";
// import routesMap from "./RoutesMap";
// import ComplianceP from "./component/Partners/ComplianceP";




// import EducationHub from "./component/EducationHub"


// // Main Components

// 
// import Webinars from "./component/Webinars";
// import ForexTutorials from "./component/ForexToutorials";
// import CommoditiesTutorials from "./component/CommoditiesTutorials";
// import SharesTutorials from "./component/SharesTutorials";
// import Research from "./component/Research";
// import TradingView from "./component/TradingView";
// import CTrader from "./component/CTrader";

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
// import MetaTrader4 from "./component/MetaTrader4";
// import MetaTrader5 from "./component/MetaTrader5";
// import CopyTrader from "./component/CopyTrader";
//  import Invest from "./component/invest";



// import LeftDiv from "./component/leftDiv";
// import RightDiv from "./component/RightDiv";
// import QuickStart from "./component/QuickStart";
// import QuickStart2 from "./component/QuickStart2";
// import QuickStart3 from "./component/QuickStart3";
// import QuickStart4 from "./component/QuickStart4";
// import QuickStart5 from "./component/QuickStart5";
// import QuickStart6 from "./component/QuickStart6";
// import QuickStart7 from "./component/QuickStart7";
// import Affiliate from "./component/Partners/Affiliate";
// import AffiliateOverview from "./component/Partners/AffiliateOverview";
// import AffiliateOverview from "./component/Partners/AffiliateOverview";
// import Subaffiliate from "./component/Partners/subaffiliate";
// import AffiliateSuport from "./component/Partners/AffiliateSupport";
// import ExampleReview from "./component/Partners/ExampleReview";
// import Cpapaymentstructure from "./component/Partners/Cpapaymentstructure";
// import Multistep_payment from "./component/Partners/Multistep_payment";
// import PartnerTier from "./component/Partners/PartnerTier";

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
// import Education_Com_Beginner from "./component/SubPages/Education_com_Beginner";
// import Education_Com_Intermediate from "./component/SubPages/Education_Com_Intermediate";
// import Education_Com_Advance from "./component/SubPages/Educaiton_Com_Advance";
// import CreateAccount from "./component/CreateAccount";
// import Navbar from "./component/Navbar1";
// import popup from "./component/SubPages/popup";
// import DailyNews from "./component/Research/DailyNews";
// import EquityResearch from "./component/Research/EquityResearch";
// import NavbarBlue from "./component/NavbarBlue";
// import Australia from "./component/Research/Australia";
// import NewZealand from "./component/Research/NewZealand";
// import USA from "./component/Research/USA";
// import TechnicalAnalysis from "./component/Research/TechnicalAnalysis";
// import Support1 from "./component/Partners/Support1"; 
// import Support2 from "./component/Partners/Support2"; 
// import Support3 from "./component/Partners/Support3"; 
// import Affiliate from "./component/Partners/Affiliate";






// import Webinars from "./component/Webinars";
// import ForexTutorials from "./component/ForexToutorials";
// import CommoditiesTutorials from "./component/CommoditiesTutorials";
// import SharesTutorials from "./component/SharesTutorials";
// import Research from "./component/Research";
// import TradingView from "./component/TradingView";
// import CTrader from "./component/CTrader";
// import MetaTrader4 from "./component/MetaTrader4";
// import MetaTrader5 from "./component/MetaTrader5";
// import CopyTrader from "./component/CopyTrader";
// import Invest from "./component/invest";


// 
// import Webinars from "./component/Webinars";
// import ForexTutorials from "./component/ForexToutorials";
// import CommoditiesTutorials from "./component/CommoditiesTutorials";
// import SharesTutorials from "./component/SharesTutorials";
// import Research from "./component/Research";
// import TradingView from "./component/TradingView";
// import CTrader from "./component/CTrader";
// import MetaTrader4 from "./component/MetaTrader4";
// import MetaTrader5 from "./component/MetaTrader5";
// import CopyTrader from "./component/CopyTrader";
// import Invest from "./component/invest";

// import Market_com_Energies from "./component/SubPages/Market_com_Energies";
// import Market_com_Metal from "./component/SubPages/Market_com_Metal";
// import Market_Future_Energy from "./component/SubPages/Market_Future_Energy";
// import Market_Future_Indices from "./component/SubPages/Market_Future_Indices";
// import Market_Future_Other from "./component/SubPages/Market_Future_Other";

// import Education_Forex_Beginner from "./component/SubPages/Education_Forex_Beginner";
// import Education_Forex_Intermediate from "./component/SubPages/Education_Forex_Intermediate";
// import Education_Forex_Advance from "./component/SubPages/Education_Forex_Advance";

// import CreateAccount from "./component/CreateAccount";
// import Navbar1 from "./component/Navbar1";

 import EducationHub from "./component/EducationHub";




// import Webinars from "./component/Webinars";
// import ForexTutorials from "./component/ForexToutorials";
// import CommoditiesTutorials from "./component/CommoditiesTutorials";
// import SharesTutorials from "./component/SharesTutorials";
// import Research from "./component/Research";
// import TradingView from "./component/TradingView";
// import CTrader from "./component/CTrader";



import NavbarBlue from "./component/NavbarBlue";
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
import Education_Com_Beginner from "./component/SubPages/Education_com_Beginner";
import Education_Com_Intermediate from "./component/SubPages/Education_Com_Intermediate";
import Education_Com_Advance from "./component/SubPages/Educaiton_Com_Advance";
import CreateAccount from "./component/CreateAccount";
import DailyNews from "./component/Research/DailyNews";
import EquityResearch from "./component/Research/EquityResearch";
import Australia from "./component/Research/Australia";
import NewZealand from "./component/Research/NewZealand";
import USA from "./component/Research/USA";
import TechnicalAnalysis from "./component/Research/TechnicalAnalysis";
import Support1 from "./component/Partners/Support1"; 
import Support2 from "./component/Partners/Support2"; 
import Support3 from "./component/Partners/Support3";
import Footer from './component/Footer'; 




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
// import AccountCreate from "./component/SubPages/AccountCreate";
// import VerifyAccount from "./component/SubPages/VerifyAccount";
// import FundAccount from "./component/SubPages/FundAccount";
// import ConnectTrading from "./component/SubPages/ConnectTrading";
// import FirstTrade from "./component/SubPages/FirstTrade";
// import InvestAccount from "./component/SubPages/InvestAccount";
// import FundInvest from "./component/SubPages/FundInvest";
// import InstallMarkettrad from "./component/SubPages/InstallMarkettrad";
// import ChangeCurrency from "./component/SubPages/ChangeCurrency";





function App() {
  return (
    <div className='app-container'>

{/* //       <div className='rohan'>
//         <NavbarBlue />
//         <Routes>
//          <Route path="/" element={<EducationHub />}></Route>
//          <Route path="/Webinars" element={<Webinars></Webinars>}></Route>
//          <Route path="/ForexTutorials" element={<ForexTutorials></ForexTutorials>}></Route>
//          <Route path="/CommoditiesTutorials" element={<CommoditiesTutorials></CommoditiesTutorials>}></Route>
//          <Route path="/SharesTutorials" element={<SharesTutorials></SharesTutorials>}></Route>
//          <Route path="/EconomicCalendar" element={<EconomicCalendar></EconomicCalendar>}></Route>
//          <Route path="/CreateAccount" element={<CreateAccount></CreateAccount>}></Route>
//          <Route path="/Research" element={<Research></Research>}></Route>
//          <Route path="/TradingView" element={<TradingView></TradingView>}></Route>
//          <Route path="/CTrader" element={<CTrader></CTrader>}></Route>
//          <Route path="/MetaTrader4" element={<MetaTrader4></MetaTrader4>}></Route>
//          <Route path="/MetaTrader5" element={<MetaTrader5></MetaTrader5>}></Route>
//          <Route path="/CopyTrader" element={<CopyTrader></CopyTrader>}></Route>
//          <Route path="/BlackbullInvest" element={<BlackbullInvest></BlackbullInvest>}></Route>
//          <Route path="Invest/InvestmentResearch" element={<InvestmentResearch></InvestmentResearch>}></Route> {/Child page of Education hub Research/}
//          <Route path="/SecureClientArea" element={<SecureClientArea></SecureClientArea>}></Route> {/Child page of platform support/}
//          <Route path="/TradingViewFAQs" element={<TradingViewFAQs></TradingViewFAQs>}></Route> {/Child page of platform support/}
//          <Route path="/CTraderFAQs" element={<CTraderFAQs></CTraderFAQs>}></Route> {/Child page of platform support/}
//          <Route path="/MetaTrader4FAQs" element={<MetaTrader4FAQs></MetaTrader4FAQs>}></Route> {/Child page of platform support/}
//          <Route path="/MetaTrader5FAQs" element={<MetaTrader5FAQs></MetaTrader5FAQs>}></Route> {/Child page of platform support/}
//          <Route path="/BlackBullInvestFAQs" element={<BlackBullInvestFAQs></BlackBullInvestFAQs>}></Route> {/Child page of platform support/}
//          <Route path="/TradingHourChange" element={<TradingHourChange></TradingHourChange>}></Route> {/Child page of market support/}
//          <Route path="/TradingConditions" element={<TradingConditions></TradingConditions>}></Route> {/Child page of market support/}
//          <Route path="/ContractExpiries" element={<ContractExpiries></ContractExpiries>}></Route> {/Child page of market support/}
//          <Route path="/ContractSpecification" element={<ContractSpecification></ContractSpecification>}></Route> {/Child page of market support/}
//          <Route path="/IBOverview" element={<IBOverview></IBOverview>}></Route> {/Child page of market support/}
//          <Route path="/RegionalRepresentatives" element={<RegionalRepresentatives></RegionalRepresentatives>}></Route> {/Child page of market support/}
//          <Route path="/MarketingMaterials" element={<MarketingMaterials></MarketingMaterials>}></Route> {/Child page of market support/}
//        </Routes>

      // </div> */}

      {/* <div className='container1'> */}
        
        {/* <Routes> */}

          {/* <Route path="/" element={<QuickStart />}></Route>
          <Route path="/quickstart/assets" element={<QuickStart2 />}></Route>
          <Route path="/quickstart/platform-options" element={<QuickStart3 />}></Route>
          <Route path="/quickstart/account-types" element={<QuickStart4 />}></Route>
          <Route path="/quickstart/verify-account" element={<QuickStart5 />}></Route>
          <Route path="/quickstart/deposit-funds" element={<QuickStart6 />}></Route>
          <Route path="/quickstart/withdraw-funds" element={<QuickStart7 />}></Route>

          <Route path="/markets" element={<Market />}></Route>
          <Route path="/markets/forex" element={<Market2 />}></Route>
          <Route path="market/equities" element={<Market3 />}></Route>
          <Route path="/markets/commodities" element={<Market4 />}></Route>
          <Route path="/markets/futures" element={<Market5 />}></Route>
          <Route path="/markets/indices" element={<Market6 />}></Route>
          <Route path="/markets/crypto" element={<Market7 />}></Route>
          <Route path="/markets/commodities/energies" element={<Market_com_Energies />}></Route>
          <Route path="/markets/commodities/metals" element={<Market_com_Metal />}></Route>
          <Route path="/markets/futures/energy" element={<Market_Future_Energy />}></Route>
          <Route path="/markets/futures/indices" element={<Market_Future_Indices />}></Route>
          <Route path="markets/futures/other" element={<Market_Future_Other />}></Route>

          <Route path="/education/forex/beginner" element={<Education_Forex_Beginner />}></Route>
          <Route path="/education/forex/intermediate" element={<Education_Forex_Intermediate />}></Route>
          <Route path="/education/forex/advanced" element={<Education_Forex_Advance />}></Route>
          <Route path="/education/commodities/beginner" element={<Education_Com_Beginner />}></Route>
          <Route path="/education/commodities/intermediate" element={<Education_Com_Intermediate />}></Route>
          <Route path="/education/commodities/advanced" element={<Education_Com_Advance />}></Route> */}
          {/* <Route path="/dailynews" element={<DailyNews />}></Route> */}
          {/* <Route path="/EquityResearch" element={<EquityResearch />}></Route>

      <div className='rohan'>
        <Navbar></Navbar>
        <Routes>
           <Route path="/" element={<EducationHub />}></Route>
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
           <Route path="/BlackbullInvest" element={<BlackbullInvest></BlackbullInvest>}></Route>
           <Route path="/InvestmentResearch" element={<InvestmentResearch></InvestmentResearch>}></Route> 
           <Route path="/SecureClientArea" element={<SecureClientArea></SecureClientArea>}></Route> 
           <Route path="/TradingViewFAQs" element={<TradingViewFAQs></TradingViewFAQs>}></Route> 
           <Route path="/CTraderFAQs" element={<CTraderFAQs></CTraderFAQs>}></Route>
           <Route path="/MetaTrader4FAQs" element={<MetaTrader4FAQs></MetaTrader4FAQs>}></Route> 
           <Route path="/MetaTrader5FAQs" element={<MetaTrader5FAQs></MetaTrader5FAQs>}></Route> 
           <Route path="/BlackBullInvestFAQs" element={<BlackBullInvestFAQs></BlackBullInvestFAQs>}></Route> 
           <Route path="/TradingHourChange" element={<TradingHourChange></TradingHourChange>}></Route>
           <Route path="/TradingConditions" element={<TradingConditions></TradingConditions>}></Route> 
           <Route path="/ContractExpiries" element={<ContractExpiries></ContractExpiries>}></Route> 
           <Route path="/ContractSpecifications" element={<ContractSpecifications></ContractSpecifications>}></Route> 
           <Route path="/IBOverview" element={<IBOverview></IBOverview>}></Route> 
           <Route path="/RegionalRepresentatives" element={<RegionalRepresentatives></RegionalRepresentatives>}></Route> 
           <Route path="/MarketingMaterials" element={<MarketingMaterials></MarketingMaterials>}></Route> 
         </Routes>

      </div>

      {/* <div className='container1'>
        <NavbarBlue/>
        <Routes>

           <Route path="/" element={<QuickStart />}></Route>
          <Route path="/Assets" element={<QuickStart2 />}></Route>
          <Route path="/platforms" element={<QuickStart3 />}></Route>
          <Route path="/Account-type" element={<QuickStart4 />}></Route>
          <Route path="/verify-account" element={<QuickStart5 />}></Route>
          <Route path="/deposit-funds" element={<QuickStart6 />}></Route>
          <Route path="/withdraw-funds" element={<QuickStart7 />}></Route>
          <Route path="/Market-Overview" element={<Market />}></Route>
          <Route path="/Forex" element={<Market2 />}></Route>
          <Route path="/Equities" element={<Market3 />}></Route>
          <Route path="/commodities" element={<Market4 />}></Route>
          <Route path="/Futures" element={<Market5 />}></Route>
          <Route path="/Indices" element={<Market6 />}></Route>
          <Route path="/crypto" element={<Market7 />}></Route>
          <Route path="/Energies" element={<Market_com_Energies />}></Route>
          <Route path="/metals" element={<Market_com_Metal />}></Route>
          <Route path="/Energy" element={<Market_Future_Energy />}></Route>
          <Route path="/Metal" element={<Market_com_Metal />}></Route>
          <Route path="/Indices" element={<Market_Future_Indices />}></Route>
          <Route path="/Other" element={<Market_Future_Other />}></Route>
          <Route path="/Beginner" element={<Education_Forex_Beginner />}></Route>
          <Route path="/Intermediate" element={<Education_Forex_Intermediate />}></Route>
          <Route path="/Advance" element={<Education_Forex_Advance />}></Route>
          <Route path="/Beginner" element={<Education_Com_Beginner />}></Route>
          <Route path="/Intermediate" element={<Education_Com_Intermediate />}></Route>
          <Route path="/Advance" element={<Education_Com_Advance />}></Route>
          <Route path="/dailynews" element={<DailyNews />}></Route>
          <Route path="/EquityResearch" element={<EquityResearch />}></Route>

          <Route path="/Australia" element={<Australia />}></Route>
          <Route path="/NewZealand" element={<NewZealand/>}></Route>
          <Route path="/USA" element={<USA/>}></Route>
          <Route path="/TechnicalAnalysis" element={<TechnicalAnalysis/>}></Route>
          <Route path="/AffiliateSupport" element={<Support1/>}></Route>
          <Route path="/AffiliateSupport" element={<Support2/>}></Route>
          <Route path="/AffiliateSupport" element={<Support3/>}></Route> 

          <CreateAccount /> */}
           
         

        {/* </Routes> */}
      {/* </div> */}

      <div className="app-section">

     
      <>
  <NavbarBlue />

  <Routes>
    {/* About */}
    <Route path="/about/awards" element={<About2 />} />
    <Route path="/about/news" element={<NewsSection />} />
    <Route path="/about/compliance" element={<Compliance />} />
    <Route path="/about/security-funds" element={<SecurityFunds />} />

    {/* Support */}
    <Route path="/support/getting-started" element={<GettingStarted />} />
    <Route path="/support/getting-started/create-account" element={<AccountCreate />} />
    <Route path="/support/getting-started/verify-account" element={<VerifyAccount />} />
    <Route path="/support/getting-started/fund-account" element={<FundAccount />} />
    <Route path="/support/getting-started/link-platform" element={<ConnectTrading />} />
    <Route path="/support/getting-started/first-trade" element={<FirstTrade />} />

    <Route path="/support/account-support" element={<AccountSupport />} />
    <Route path="/support/platform-support" element={<PlatformSupport />} />
    <Route path="/support/market-support" element={<MarketSupport />} />
    <Route path="/support/economic-calendar" element={<EconomicCalendar />} />
    <Route path="/support/contact-support" element={<ContactSupport />} />

    {/* Platform Trading Tools */}
    <Route path="/platform/tradingtools/vpstrading" element={<VPStrading />} />
    <Route path="/platform/tradingtools/fixapi" element={<FixAPI />} />
    <Route path="/platform/tradingtools/zulutrade" element={<ZuluTrade />} />
    <Route path="/platform/tradingtools/myfxbook" element={<Myfxbook />} />

    {/* Education */}
    <Route path="/education/shares/beginner" element={<BeginnerShare />} />
    <Route path="/education/shares/intermediate" element={<Intermediate />} />
    <Route path="/education/shares/advanced" element={<AdvShare />} />

    {/* Invest */}
    <Route path="/support/platform/invest/open-share-account" element={<InvestAccount />} />
    <Route path="/support/platform/invest/fund-share-account" element={<FundInvest />} />
    <Route path="/support/platform/invest/install-login" element={<InstallMarkettrad />} />
    <Route path="/support/platform/invest/currency-conversion" element={<ChangeCurrency />} />
    
    

          <CreateAccount />
           <Footer/>
          

        </Routes>
      </div> 

      {/* <div className="app-section">
        <Routes>
        <Route path="/" element={<About2/>}    />
        <Route path="/NewsSection" element={<NewsSection/>}    />
        <Route path="/Compliance" element={<Compliance/>}    />
        <Route path="/SecurityFunds" element={<SecurityFunds/>}    />
        <Route path="/GettingStarted" element={<GettingStarted/>}    />
        <Route path="/AccountSupport" element={<AccountSupport/>}    />
        <Route path="/PlatformSupport" element={<PlatformSupport/>}    />
        <Route path="/MarketSupport" element={<MarketSupport/>}    />
        <Route path="/EconomicCalendar" element={<EconomicCalendar/>}    />
        <Route path="/ContactSupport" element={<ContactSupport/>}    />
        <Route path="/VPStrading" element={<VPStrading/>}    />
        <Route path="/FixAPI" element={<FixAPI/>}    />
        <Route path="/ZuluTrade" element={<ZuluTrade/>}    />
        <Route path="/Myfxbook" element={<Myfxbook/>}    />
        <Route path="/BeginnerShare" element={<BeginnerShare/>}    />
        <Route path="/Intermediate" element={<Intermediate/>}    />
        <Route path="/AdvShare" element={<AdvShare/>}    />
        <Route path="/AccountCreate" element={<AccountCreate/>}    />
        <Route path="/VerifyAccount" element={<VerifyAccount/>}    />
        <Route path="/FundAccount" element={<FundAccount/>}    />
        <Route path="/ConnectTrading" element={<ConnectTrading/>}    />
        <Route path="/FirstTrade" element={<FirstTrade/>}    />

        </Routes>  


        <NavbarBlue/>

        </div> */}

      {/* <div className="rohan">
        <Navbar />
        <Routes>
          <Route path="/" element={<EducationHub />}></Route>
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
          <Route path="/InvestmentResearch" element={<InvestmentResearch></InvestmentResearch>}></Route> 
          <Route path="/SecureClientArea" element={<SecureClientArea></SecureClientArea>}></Route> 
          <Route path="/TradingViewFAQs" element={<TradingViewFAQs></TradingViewFAQs>}></Route> 
          <Route path="/CTraderFAQs" element={<CTraderFAQs></CTraderFAQs>}></Route>
          <Route path="/MetaTrader4FAQs" element={<MetaTrader4FAQs></MetaTrader4FAQs>}></Route> 
          <Route path="/MetaTrader5FAQs" element={<MetaTrader5FAQs></MetaTrader5FAQs>}></Route> 
          <Route path="/BlackBullInvestFAQs" element={<BlackBullInvestFAQs></BlackBullInvestFAQs>}></Route> 
          <Route path="/TradingConditions" element={<TradingConditions></TradingConditions>}></Route> 
          <Route path="/TradingHourChange" element={<TradingHourChange></TradingHourChange>}></Route> 



        </Routes>
        {/* <div className="main-sections">

        <div className="About2-section">
          <About2 />
        </div>

        <div className="NewsSection-section">
          <NewsSection />
        </div>

 
        <div className="app-section">*/}






      <div className="container1">
        {/* <NavbarBlue /> */}
        <Routes>

          {/* <Route path="/" element={<QuickStart />}></Route>
          <Route path="/Assets" element={<QuickStart2 />}></Route>
          <Route path="/platforms" element={<QuickStart3 />}></Route>
          <Route path="/Account-type" element={<QuickStart4 />}></Route>
          <Route path="/verify-account" element={<QuickStart5 />}></Route>
          <Route path="/deposit-funds" element={<QuickStart6 />}></Route>
          <Route path="/withdraw-funds" element={<QuickStart7 />}></Route>
          <Route path="/Market-Overview" element={<Market />}></Route>
          <Route path="/Forex" element={<Market2 />}></Route>
          <Route path="/Equities" element={<Market3 />}></Route>
          <Route path="/commodities" element={<Market4 />}></Route>
          <Route path="/Futures" element={<Market5 />}></Route>
          <Route path="/Indices" element={<Market6 />}></Route>
          <Route path="/crypto" element={<Market7 />}></Route>
          <Route path="/Energies" element={<Market_com_Energies />}></Route>
          <Route path="/metals" element={<Market_com_Metal />}></Route>
          <Route path="/Energy" element={<Market_Future_Energy />}></Route>
          <Route path="/Metal" element={<Market_com_Metal />}></Route>
          <Route path="/Indices" element={<Market_Future_Indices />}></Route>
          <Route path="/Other" element={<Market_Future_Other />}></Route>
          <Route path="/Beginner" element={<Education_Forex_Beginner />}></Route>
          <Route path="/Intermediate" element={<Education_Forex_Intermediate />}></Route>
          <Route path="/Advance" element={<Education_Forex_Advance />}></Route>

          <Route path="/Beginner" element={<Education_Com_Beginner />}></Route>
          <Route path="/Intermediate" element={<Education_Com_Intermediate />}></Route>
          <Route path="/Advance" element={<Education_Com_Advance />}></Route>

          <Route path="/dailynews" element={<DailyNews />}></Route>
          <Route path="/EquityResearch" element={<EquityResearch />}></Route>
          <Route path="/Australia" element={<Australia />}></Route>
          <Route path="/NewZealand" element={<NewZealand/>}></Route>
          <Route path="/USA" element={<USA/>}></Route>
          <Route path="/TechnicalAnalysis" element={<TechnicalAnalysis/>}></Route>
          <Route path="/AffiliateSupport" element={<Support1/>}></Route>
          <Route path="/AffiliateSupport" element={<Support1/>}></Route>
          <Route path="/AffiliateSupport" element={<Support1/>}></Route>
          <Route path="/EducationHub" element={<EducationHub></EducationHub>} /> */}


        </Routes>
        {/* <LeftDiv />
                      <RightDiv /> 
                      <CreateAccount />
                      */}


        {/* <QuickStart/>
        <QuickStart3 />
        <QuickStart4 />
        <QuickStart5 /> */}
        {/* <QuickStart6 /> */}
        {/* <QuickStart7 /> */}
     
  
        {/* <Market />
        <Market2 />
        <Market3 />
        <Market4 />
        <Market5 />
        <Market6 />
        <Market7 /> */}
        {/* <CreateAccount /> */}
        {/* <Market_com_Energies />
        <Market_Future_Energy />
        <Market_com_Metal />
        <Market_Future_Indices />
        <Market_Future_Other />
        <Education_Forex_Beginner /> */}
        {/* <Education_Forex_Intermediate />
        <Education_Forex_Advance />
        <Education_Com_Beginner />
        <Education_Com_Intermediate />
        <Education_Com_Advance />
        <DailyNews />
        <EquityResearch />
        <Australia />
        <NewZealand/>
        <USA/>
        <TechnicalAnalysis/>
        <Support1/> 
        <Support2/>
        <Support3/>  */}

         {/* <popup /> */}

      </div>




      {/* <div className="rohan">
        <Navbar />
        <Routes>
          <Route path="/EducationHub" element={<EducationHub />} />
          <Route path="/Webinars" element={<Webinars />} />
          <Route path="/ForexTutorials" element={<ForexTutorials />} />
          <Route path="/CommoditiesTutorials" element={<CommoditiesTutorials />} />
          <Route path="/SharesTutorials" element={<SharesTutorials />} />
          <Route path="/EconomicCalendar" element={<EconomicCalendar />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/Research" element={<Research />} />
          <Route path="/TradingView" element={<TradingView />} />
          <Route path="/CTrader" element={<CTrader />} />
          <Route path="/MetaTrader4" element={<MetaTrader4 />} />
          <Route path="/MetaTrader5" element={<MetaTrader5 />} />
          <Route path="/CopyTrader" element={<CopyTrader />} />
        </Routes>
      </div> */}


      {/* <div className="app-section">

      {/* <div className="app-section">


        <About2/>
        <NewsSection/>
        <Compliance />
        <SecurityFunds />
        <GettingStarted />
        <AccountSupport />
        <PlatformSupport />
        <MarketSupport />
        <EconomicCalendar />
        <ContactSupport />
        <VPStrading />
        <FixAPI />
        <ZuluTrade />
        <Myfxbook />
        <BeginnerShare />
        <Intermediate />
        <AdvShare />
        <AccountCreate/>
        <VerifyAccount/>
        <FundAccount/>
        <ConnectTrading/>
        <FirstTrade/>
        <InvestAccount/>
        <FundInvest/>
        <InstallMarkettrad/>
        <ChangeCurrency/>


      </div> */}


  </Routes>
</>



// {/*
//         <div className="rohan">
//           <Navbar />
//           <Routes>
//             <Route path="/Webinars" element={<Webinars></Webinars>} />
//             <Route path="/ForexTutorials" element={<ForexTutorials></ForexTutorials>} />
//             <Route path="/CommoditiesTutorials" element={<CommoditiesTutorials></CommoditiesTutorials>} />
//             <Route path="/SharesTutorials" element={<SharesTutorials></SharesTutorials>} />
//             <Route path="/EconomicCalendarRC" element={<EconomicCalendarRC></EconomicCalendarRC>} />
//             <Route path="/Research" element={<Research></Research>} />
//             <Route path="/TradingView" element={<TradingView></TradingView>} />
//             <Route path="/CTrader" element={<CTrader></CTrader>} />
          <Route path="/Invest" element={<Invest />} />

//           </Routes>
//         </div>

 
        <Footers/> 

        {/* <NavbarBlue/> */}
        {/* <About2/> */}
        {/* <NewsSection/> */}
        {/* <Compliance />
        <SecurityFunds />
        <GettingStarted />
        <AccountSupport />
        <PlatformSupport />
        <MarketSupport />
        <EconomicCalendar />
        <ContactSupport />

        <VPStrading />
        <FixAPI />
        <ZuluTrade />
        <Myfxbook />
        <BeginnerShare />
        <Intermediate />
        <AdvShare />

        <AccountCreate/>
        <VerifyAccount/>
        <FundAccount/>
        <ConnectTrading/>
        <FirstTrade/>
        
        <InvestAccount/>
        <FundInvest/>
        <InstallMarkettrad/>
        <ChangeCurrency/>
 
        <PartnerHome/>
        <AboutUs/>   */}
        {/* <ComplianceP/> */}


      </div>




    </div>



  )
}

export default App