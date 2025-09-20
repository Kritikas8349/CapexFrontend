import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

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

        <div className="About2-section">
          <About2 />
        </div>

        <div className="NewsSection-section">
          <NewsSection />
        </div>

        <Compliance/>
       
      </div>
   


  );
};

export default App;
