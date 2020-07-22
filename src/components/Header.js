import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import jump from 'jump.js';
import '../style/Header.css';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapse: false
        }
    }

    collapseDiv() {
        this.setState(prevState => ({
            collapse: !prevState.collapse
        }));
    }

    render() {
        if(this.props.location.pathname === "/"){
        return (
            <div className="container-fluid row header .is-sticky">
                <h4 className="text-secondary">MW Designs</h4>
                <nav
                    className={`nav-bar col-md-5 ${this
                    .state
                    .collapse
                    .toString()}`}>
                    <ul>
                        <li
                            onClick={() => {
                            jump('#about-section');
                        }}><i className="fa fa-user-circle-o"></i>About</li>
                        <li
                            onClick={() => {
                            jump('#portfolio-section');
                        }}><i className="fa fa-tv"></i>Portfolio</li>
                        <li
                            onClick={() => {
                            jump('#footer-section');
                        }}><i className="fa fa-edit"></i>Contact</li>
                    </ul>
                </nav>
                <button
                    onClick={this
                    .collapseDiv
                    .bind(this)}>
                    <i className="fa fa-reorder"></i>
                </button>
            </div>
        );
    }
    else{
        return(
                <div className="container-fluid row header .is-sticky">
                    <h4 className="text-secondary">MW Designs</h4>
                    <nav
                        className={`nav-bar col-md-5 ${this
                        .state
                        .collapse
                        .toString()}`}>
                        <ul>
                            <li><Link to="/#about-section"><i className="fa fa-user-circle-o"></i>About</Link></li>
                            <li><Link to="/#portfolio-section"><i className="fa fa-tv"></i>Portfolio</Link></li>
                            <li
                                onClick={() => {
                                jump('#footer-section');
                            }}><i className="fa fa-edit"></i>Contact</li>
                        </ul>
                    </nav>
                    <button
                        onClick={this
                        .collapseDiv
                        .bind(this)}>
                        <i className="fa fa-reorder"></i>
                    </button>
                </div>
            );
    }
}//end of render
}//end of class

export default Header;