import React from "react";
import "./App.css";

// Bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap-icons/font/bootstrap-icons.css";

// // Main Components
// import LeftDiv from "./component/leftDiv";
// import RightDiv from "./component/RightDiv";
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

// import CreateAccount from "./component/CreateAccount";
import Navbar1 from "./component/Navbar1";
// import EducationHub from "./component/EducationHub";

import { Route, Routes } from "react-router-dom";
// import Webinars from "./component/Webinars";
// import ForexTutorials from "./component/ForexToutorials";
// import CommoditiesTutorials from "./component/CommoditiesTutorials";
// import SharesTutorials from "./component/SharesTutorials";
// import Research from "./component/Research";
// import TradingView from "./component/TradingView";
// import CTrader from "./component/CTrader";

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





// import MetaTrader4 from "./component/MetaTrader4";
// import MetaTrader5 from "./component/MetaTrader5";
// import CopyTrader from "./component/CopyTrader";
// import Invest from "./component/invest";

const App = () => {
  return (
    <div className="app-container">

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
          <Route path="/Invest" element={<Invest />} />
        </Routes>
      </div> */}

      <div className="app-section">
        {/* <Routes>
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

        </Routes> */}
        {/* <Navbar1/> */}
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
        
      </div>

      {/* <div className="container1">
        <LeftDiv />
        <RightDiv />
        <QuickStart />
        <QuickStart2 />
        <QuickStart3 />
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
        <Market_com_Energies />
        <Market_Future_Energy />
        <Market_com_Metal />
        <Market_Future_Indices />
        <Market_Future_Other />
        <Education_Forex_Beginner />
        <Education_Forex_Intermediate />
        <Education_Forex_Advance />
        <CreateAccount />
      </div> */}

    </div>
  );
};

export default App;
