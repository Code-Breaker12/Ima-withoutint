import React from "react";
import Transact from "./Transaction.json";
import Table from "react-bootstrap/Table";
import "./Transaction.css"

const Transaction = () => {
  return (
    <div>
      {
        <>
          <h3 className="heading">Transactions</h3>

          <Table striped bordered hover variant="dark" className="table">
            <thead>
              <tr>
                <th scope="col">User ID</th>
                <th scope="col">Date </th>
                <th scope="col">Amount</th>
                <th scope="col">Account Number</th>
                <th scope="col">Destination A/C No</th>
                <th scope="col">IFSC</th>
                <th scope="col">Destination IFSC</th>
              </tr>
            </thead>
            <tbody>
              
                {Transact.map((info)=>{
                 return(
                <tr>
                <td key={info.userId}>{info.userId}</td>
                <td>{info.date}</td>
                <td>{info.amount}</td>
                <td>{info.accountNumber}</td>
                <td>{info.destinationAccountNumber}</td>
                <td>{info.ifsc}</td>
                <td>{info.destinationIfsc}</td>
                
                </tr>
              )})}
              
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              
            </tbody>
          </Table>
        </>
      }
    </div>
  );
};

export default Transaction;