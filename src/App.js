import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/> 
        <About/> 
        <Projects/> 
        <Footer/>
      </div>
    );
  }
}

export default App;
