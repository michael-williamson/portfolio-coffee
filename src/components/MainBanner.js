import React, { Component } from 'react';
import '../style/MainBanner.css';

import {Link} from 'react-router-dom';


class MainBanner extends Component {
    render() {
        return (
            <div className="main-banner container-fluid" id="main-banner">
                <div className="name-title-div">
                    <div className="name-title">Michael Williamson</div>
                </div> 
                <div className="h4">Web Developer</div> 
                {/* <div className="bg-secondary text-white lead">On the road to artistry</div> */}
                    <div className="mainSquare">
                        <div className="shapeOne"></div>
                        <div className="shapeTwo"></div>
                    </div>
            </div>
        );
    }
}

export default MainBanner;