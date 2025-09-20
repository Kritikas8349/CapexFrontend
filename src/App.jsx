import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
=======
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
>>>>>>> 05c606116baf14924bc0fa49f030da7e902a03cf

// import LoginForm from "./component/LoginForm1";
// import WelcomeSection from "./component/WelcomeSection";

import About2 from "./component/About2";  
import NewsSection from "./component/NewsSection";
import Compliance from "./component/Compliance";

const App = () => {
  return (
<<<<<<< HEAD
   
      <div className="app-container">
        
        {/* <div className="main-sections">
          <div className="login-section">
            <LoginForm />
          </div>
          <div className="welcome-section">
            <WelcomeSection />
          </div>
        </div> */}
=======
    <div className="container1">
     {/* <LeftDiv />
      <RightDiv />  
      <QuickStart/>
      <QuickStart3/> 
      <QuickStart2/> 
      <QuickStart4/>
      */}
>>>>>>> 05c606116baf14924bc0fa49f030da7e902a03cf

        <div className="About2-section">
          <About2 />
        </div>

        <div className="NewsSection-section">
          <NewsSection />
        </div>

        <Compliance/>
       
      </div>
   

<<<<<<< HEAD
=======
     <Navbar/>
     <EducationHub></EducationHub>
    
>>>>>>> 05c606116baf14924bc0fa49f030da7e902a03cf

  );
};

export default App;
