import React, { Component } from "react";
import Colombia from "../images/colombia_pose.jpg";
import "../style/About.css";

class About extends Component {
  render() {
    return (
      <div className="about-section-div">
        <div className="about-section row">
          <h1 className="col-md-12" id="about-section-header">
            About
          </h1>
          <div className="card-display col-md-6">
            <div className="rounded mx-auto img-div">
              <img
                src={Colombia}
                alt="guy looking across the sky"
                className="rounded"
              />
            </div>
            <div className="aboutSpan">
              <span>
                "I value the little things in life. Developing websites
                challenges the artistic side of me as well as the logical.
                That's mostly why I love it!"
              </span>
            </div>
          </div>
          <div className="col-md-6">
            <h6>Technologies</h6>
            <ul>
              {/* <li>HTML5</li>
                        <li>CSS3</li>
                        <li>
                            JavaScript</li>
                        <li>JQuery</li> */}
              <li>React.js</li>
              <li>Redux</li>
              <li>Typescript</li>
              <li>Material UI / Bootstrap 4</li>
              <li>Adobe Premier (Logo Design, Animations, etc...)</li>
              <li>Oauth 2.0</li>
              <li>Java / Spring</li>
              <li>GraphQL</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>PHP7</li>
              <li>MySQL</li>
              <li>Wordpress Theme Construction</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
