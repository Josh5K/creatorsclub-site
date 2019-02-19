import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Navbar from './components/navbar/navbar';
import Landing from './pages/landing/landing';
import StoreLanding from './pages/storelanding/storelanding';
import NotFound from './pages/404/404';
import Store from './pages/store/store';
import Product from './components/product/product';
import Cart from './pages/cart/cart';

document.body.style = 'background: #F1574D;';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/store" component={StoreLanding} />
            <Route exact path="/store/:seller" component={Store} />
            <Route exact path="/product/:product" component={Product} />
            <Route exact path="/cart" component={Cart} />
            <Route component={Store}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
