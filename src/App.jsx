import React from "react";

import LeftDiv from "./component/leftDiv";
import RightDiv from "./component/RightDiv";
import QuickStart from"./component/QuickStart";
import "./App.css"; 
import QuickStart3 from "./component/QuickStart3";
import QuickStart4 from "./component/QuickStart4";
import QuickStart5 from "./component/QuickStart5";
import QuickStart6 from "./component/QuickStart6";
// import Navbar from "./component/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
// import LeftDiv from "./component/leftDiv";
// import RightDiv from "./component/RightDiv";
// import QuickStart from"./component/QuickStart";
// import "./App.css"; 
// import QuickStart3 from "./component/QuickStart3";
// import QuickStart4 from "./component/QuickStart4";
// import QuickStart5 from "./component/QuickStart5";
import Navbar from "./component/Navbar1";
import EducationHub from "./component/EducationHub"


// import LoginForm from "./component/LoginForm1";
// import WelcomeSection from "./component/WelcomeSection";

import About2 from "./component/About2";  
import NewsSection from "./component/NewsSection";
import Compliance from "./component/Compliance";

const App = () => {
  return (

   
      <div className="app-container">
        
        {/* <div className="main-sections">
          <div className="login-section">
            <LoginForm />
          </div>
          <div className="welcome-section">
            <WelcomeSection />
          </div>
        </div> */}

    <div className="container1">
     {/* <LeftDiv />
      <RightDiv />  
      <QuickStart/>
      <QuickStart3/> 
      <QuickStart2/> 
      <QuickStart4/>
      */}



      <QuickStart6/>

     {/* <Navbar/>
     */}

        <div className="About2-section">
          <About2 />
        </div>

        <div className="NewsSection-section">
          <NewsSection />
        </div>

        <Compliance/>
       
      </div>
   



     <Navbar/>
     <EducationHub></EducationHub>
    


  );
};

export default App;
