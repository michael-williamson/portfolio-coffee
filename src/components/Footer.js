import React, { Component } from "react";
import jump from "jump.js";
import "../style/Footer.css";

class Footer extends Component {
  displayButton() {
    if (this.props.location.pathname === "/") {
      return (
        <button
          onClick={() => {
            jump("#header");
          }}
        >
          top
        </button>
      );
    } else {
      return;
    }
  }

  render() {
    return (
      <div className="footer-section" id="footer-section">
        {this.displayButton()}
        <h4>michaelwilliamsondesigns@gmail.com</h4>
        <div className="icon-div">
          <a href="https://github.com/michael-williamson" target="_blank">
            <i className="fa fa-github-square"></i>
          </a>
          <a href="https://www.linkedin.com/in/mwilliamson102/" target="_blank">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
