import React, { Component } from 'react';
export default class Table extends Component {
    render() {
      return (
        <div>
     
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
    <tr>
      <td>Jacob</td>
      <td>Thornton</td>
    </tr>
  </tbody>
</table>
</div>
      );
    }
}