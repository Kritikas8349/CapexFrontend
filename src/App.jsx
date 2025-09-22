import React from "react";
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
import { Route, Routes } from "react-router-dom";
import Webinars from "./component/Webinars";


function App() {
  return (
    <div className="container1">
     {/* <LeftDiv />
      <RightDiv />  
      <QuickStart/>
      <QuickStart3/> 
      <QuickStart2/> 
      <QuickStart4/>
      */}

      {/* <QuickStart5/> */}

     <Navbar/>
     <Routes>
        <Route path="/EducationHub" element={<EducationHub></EducationHub>}></Route>
        <Route path="/Webinars" element={<Webinars></Webinars>}></Route>
     </Routes>
    

    </div>
  );
}

export default App;