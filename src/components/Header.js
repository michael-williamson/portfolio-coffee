import React, {Component} from 'react';
import '../styles/Header.css';

class Header extends Component{


    render(){
        return(

            <header className="bg-img">
                <div className="header-overlay">
                <i className="fa fa-motorcycle"></i>
                <h1 className="first-name">Michael </h1>
                <h1>Williamson</h1>
                <h3>Front End Developer  <i className="material-icons">computer</i></h3> 
                <h5>michaelwilliamsondesigns@gmail.com</h5>
                <div className="social-icons-div">
                    <a href="https://github.com/michael-williamson"><i className="fa fa-github-square"></i></a>
                    <a href="https://www.linkedin.com/in/michael-williamson-b6158913b/"><i className="fa fa-linkedin"></i></a>
                </div> 
                <i className="material-icons mood-icon">mood</i>
                <span className="span1">Artistic concepts; </span>
                <span className="span2"> logical design;</span>
                <span className="span3">Check out some of my projects below!</span> 
                <a href="#projects-section"> <i className="fa fa-arrow-down"></i></a>
                </div> 
            </header>

        );
    }


}

export default Header; 