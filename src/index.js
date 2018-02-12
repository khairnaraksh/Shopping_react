import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';
import Home from './Home';  
import Submit from './Submit';
import Table from './Table';
import Order from './Order';
import Customer from './Customer';
import { NavLink } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();
ReactDOM.render(
 <Router>
    <div className="container">
      <Route exact path="/" component={Home}/>
      <Route path="/Customer" component={Customer}/>
      <Route path="/Submit" component={Submit}/>
      <Route exact path="/product" component={Submit} history={history}/>
    </div>
  </Router>, document.getElementById('root'));
registerServiceWorker();
