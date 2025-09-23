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
import CreateAccount from "./component/CreateAccount";





const App = () => {
  return (
    <div className="container1">
       <LeftDiv />
      <RightDiv />  
      <QuickStart/>
      <QuickStart3/> 
      <QuickStart2/> 
      <QuickStart4/>
      <QuickStart5/>
      <QuickStart6 />
      <QuickStart7 />
      <Market /> 
      <Market2 />
      <Market3 />
      <Market4 />
      <Market5 />
      <Market6 /> 
      <Market7 /> 
     

      <CreateAccount/> 
    </div>
  );
};




export default App;
