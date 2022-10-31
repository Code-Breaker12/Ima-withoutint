import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Navbars from '../components/Navbar';
import Slides from '../components/Slides';
import Cards from '../components/Cards';
import Sales from '../components/Sales';
// import Pies from '../components/Pies';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  return (
    <>
      <nav>
        <p>

        <Link to='/'><Navbars /></Link>
        <Link to='/'><Slides /></Link>
        <Link to='/'><Cards /></Link>
        <Link to='/'><Sales /></Link>
        

      </p>
      </nav>
      <Outlet />
    </>
  )
}

export default Dashboard;
;