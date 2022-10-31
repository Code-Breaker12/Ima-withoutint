import React from "react";
// import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Transactions from "./pages/Transactions";
import Investments from "./pages/Investment";
import Nopage from "./pages/Nopage";
import Users from "./pages/Users";
import Plans from "./pages/Plans";
import "./App.css";



const App = () => {
  
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="plans" element={<Plans />} />
        <Route path="transaction" element={<Transactions />} />
        <Route path="investment" element={<Investments />} />
        <Route path="*" element={<Nopage />} />
        {/* <Route index element={<Investments/>} /> */}
      </Routes>
      

    </BrowserRouter>
  );
  // const activeMenu= false;
  // return (
  // <div>
  //   {activeMenu ? <div>Sidebar</div> : <div>'A'</div>}
  //   <div className='nav'>Navbar</div>

  //   <div>
  //     <Routes>
  //       {/* Options on Dashboard  SideBar*/}

  //       <Route path= "/" element= 'Growpital'/>
  //       <Route path= "/" element= 'Dashboard'/>
  //       <Route path= "/" element= 'Our Users'/>
  //       <Route path= "/" element= 'Invesments'/>
  //       <Route path= "/" element= 'Transactions'/>
  //       <Route path= "/" element= 'Plans'/>
  //     </Routes>
  //   </div>
  // </div>
  // );

};

export default App;