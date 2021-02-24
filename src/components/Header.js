import React, { Component } from "react";
import { Link } from "react-router-dom";
import jump from "jump.js";
import gif from "../gifs/portfolio_logo.gif";
import "../style/Header.css";

class Header extends Component {
  state = {
    collapse: false,
  };

  collapseDiv = () => {
    this.setState((prevState) => ({
      collapse: !prevState.collapse,
    }));
  };

  render() {
    if (this.props.location.pathname === "/") {
      return (
        <div className="container-fluid row header .is-sticky" id="header">
          {/* <h4 className="text-secondary">MW Designs</h4> */}
          <img src={gif} className="header-logo" />
          <nav className={`nav-bar col-md-5 ${this.state.collapse.toString()}`}>
            <ul>
              <li
                onClick={() => {
                  jump("#about-section-header");
                  this.collapseDiv();
                }}
              >
                <i className="fa fa-user-circle-o"></i>About
              </li>
              <li
                onClick={() => {
                  jump("#portfolio-section-header");
                  this.collapseDiv();
                }}
              >
                <i className="fa fa-tv"></i>Portfolio
              </li>
              <li
                onClick={() => {
                  jump("#footer-section");
                  this.collapseDiv();
                }}
              >
                <i className="fa fa-edit"></i>Contact
              </li>
            </ul>
          </nav>
          <button onClick={this.collapseDiv}>
            <i className="fa fa-reorder"></i>
          </button>
        </div>
      );
    } else {
      return (
        <div className="container-fluid row header .is-sticky" id="header">
          {/* <h4 className="text-secondary">MW Designs</h4> */}
          <img src={gif} className="header-logo" />
          <nav className={`nav-bar col-md-5 ${this.state.collapse.toString()}`}>
            <ul>
              <li onClick={this.collapseDiv}>
                <Link to="/#about-section-header" className="linkAnchorTag">
                  <i className="fa fa-user-circle-o"></i>About
                </Link>
              </li>
              <li onClick={this.collapseDiv}>
                <Link to="/#portfolio-section-header" className="linkAnchorTag">
                  <i className="fa fa-tv"></i>Portfolio
                </Link>
              </li>
              <li
                onClick={() => {
                  jump("#footer-section");
                  this.collapseDiv();
                }}
              >
                <i className="fa fa-edit"></i>Contact
              </li>
            </ul>
          </nav>
          <button onClick={this.collapseDiv}>
            <i className="fa fa-reorder"></i>
          </button>
        </div>
      );
    }
  } //end of render
} //end of class

export default Header;
