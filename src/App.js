import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

//Stylesheets
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

//Pages
import Navbar from './components/navbar/navbar';
import Landing from './pages/landing/landing';
import StoreLanding from './pages/storelanding/storelanding';
import NotFound from './pages/404/404';
import Store from './pages/store/store';
import Product from './components/product/product';
import Cart from './pages/cart/cart';
import SellerCard from './components/sellercard/sellercard';
import SellerLanding from './pages/seller_dashboard/seller_landing/seller_landing';
import SellerProducts from './pages/seller_dashboard/seller_products/seller_products';
import SellerSettings from './pages/seller_dashboard/seller_settings/seller_settings';
import axios from 'axios';
import SignIn from './pages/sign_in/sign_in';
import SignUp from './pages/sign_up/sign_up';
import Checkout from './pages/checkout/checkout';
import Settings from './pages/settings/settings';

document.body.style = 'background: #F1574D;';

class App extends Component {
  render() {
    axios.defaults.headers.common['X-Api-Key'] = process.env.REACT_APP_API_KEY
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
            <Route exact path="/dashboard" component={SellerLanding} />
            <Route exact path="/dashboard/products" component={SellerProducts} />
            <Route exact path="/dashboard/settings" component={SellerSettings} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/products" component={Store} />
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
