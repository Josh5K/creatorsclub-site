import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/landing/landing';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar/navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
        <Switch>
          <Route path="/" component={Landing}/>
          <Route component={Landing}/>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
