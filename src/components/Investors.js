import React from "react";
import Invest from "./Investors.json";
import Table from "react-bootstrap/Table";
import "./Investors.css"



const Investors = () => {
  return (
 
    <>
    <h3 className="heading">Investments</h3>
      <Table responsive striped bordered hover variant="dark" className="table">
        <thead>
          <tr>
            <th scope="col">User ID</th>
            <th scope="col">Date</th>
            <th scope="col">Principle</th>
            <th scope="col">Plan Type</th>
          </tr>
        </thead>
        <tbody>
          
            {Invest.map((data) => {
              return (
                <tr>
                  <td key={data.Userid}>{data.Userid}</td>
                  <td>{data.Date}</td>
                  <td>{data.Principle}</td>
                  <td>{data["Plan-type"]}</td>
                </tr>
              );
            })}
          
        </tbody>
      </Table>
    </>
  );
};

export default Investors;