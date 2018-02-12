import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default class Submit extends Component {
    constructor(){
      super();
      this.state={
        customers:[],
        selected:[]
      }
      
      fetch('http://localhost:3131/products')
      .then(results => { return results.json()})
      .then(data => {
          this.setState({
              customers:data
            })
        console.log(this.state.customers);
    
      })
    }
    
    handleAddToCart(product_id){
        console.log(localStorage.getItem('customer_id'));
        console.log(product_id);
        // var headers = {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        // };

        // var params = {
        //     id: product_id,
        //     c_id: localStorage.getItem('customer_id')
        // };
        
        // var formData = new FormData();
        
        // for (var k in params) {
        //     formData.append(k, params[k]);
        // }
        
        // var request = {
        //     method: 'POST',
        //     headers: headers,
        //     body: {"id":product_id, "c_id": localStorage.getItem('customer_id') }
        // };
        
        // fetch('http://localhost:3131/customers', request)
        // .then(results => { return results.text()})
        // .then(data => {
        //   console.log(data);
      
        // })
        
        var payload = {"id":"5a7dddd8ef43f9778a06f103", "c_id": "5a7ebec872942cc21849c3f9"}

        fetch('http://localhost:3131/customers', {
            method: 'post',
            body: JSON.stringify(payload)
          }).then(function(response) {
            return response.text();
          }).then(function(data) {
            console.log(data);
          });
    }

    render() {
        const products = this.state.customers;

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
                    <NavLink to="/Submit">Order</NavLink>
                </li>
                </ul>
  
            </div>
        </div>
     </nav>

        <table className="table">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
            </tr>
        </thead>
  
        
        <tbody>
            
            {products.map(product=>
            <tr>
                <td>{product.productname}</td>
                <td>{product.desc}</td>
                <td>{product.price}</td>
                <Button
                    type="submit"
                    onClick={() => this.handleAddToCart(product._id)}
                >
                    Add to Cart
                </Button>
            </tr>
            )}
            
        </tbody>
        </table>
        </div>
      );
    }
}