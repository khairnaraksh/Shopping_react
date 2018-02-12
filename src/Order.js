import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Order extends Component {
    constructor(){
      super();
      this.state={
        customers:[]
      }
      
      fetch('http://localhost:3131/customers')
      .then(results => { return results.json()})
      .then(data => {
          this.setState({
              customers:data
            })
        console.log(this.state.customers);
    
      })
    }
    
    render() {
        const customers = this.state.customers;

        // console.log(customersDesc[0]);       
      return (
          <div>
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="#"> Dashboard</a>
                <ul className="nav nav-pills">
                <li className="nav-item">
                    <NavLink to="/Customer">Customer</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/product">Product</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/Order">Order</NavLink>
                </li>
                </ul>
  
            </div>
        </div>
     </nav>
     
        <table className="table">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
            </tr>
        </thead>
  
        
        <tbody>
            
            {customers.map(customer=>
            <tr>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
            </tr>
            )}
            
        </tbody>
        </table>
        </div>
      );
    }
}