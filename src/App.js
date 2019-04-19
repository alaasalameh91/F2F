import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navigation  from './components/Navigation.js';
import HomePage  from './components/HomePage.js';
import Profile  from './components/Profile.js';

class App extends Component {
  render() {
    return (
	    <Router>
			  <div className="App">	 
			       <div class="container">
				<Navigation />
			    <Route path="/" exact component={HomePage} />
				<Route path="/home"  component={HomePage} />
				<Route path="/profile"  component={Profile} />
 </div>
			  </div>
	    </Router>
    );
  }
}

export default App;


