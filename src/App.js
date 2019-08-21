import React from 'react';
import './App.css';

import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import AddLocation from './containers/AddLocation/AddLocation';
import AddWarehouse from './containers/AddWarehouse/AddWarehouse';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/home' component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
