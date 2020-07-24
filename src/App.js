import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header';
import Landing from './components/Landing';
import SingleProject from './components/SingleProject';
import Footer from './components/Footer';
import BadPath from './components/BadPath';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
            <Route path="/" component={Header}/>
          <Switch>
              <Route exact path="/" component={Landing}/> 
              <Route exact path="/project/:name" component={SingleProject}/> 
              <Route path="" component={BadPath}/>
          </Switch>    
          <Route path="/" component={Footer}/>
      </div>
      </BrowserRouter> 
    );
  }
}

export default App;
