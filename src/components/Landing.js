import React, {Component} from 'react';
import jump from 'jump.js';
import projects from '../json/portfolio';

import MainBanner from './MainBanner';
import About from './About';
import Portfolio from './Portfolio';

class Landing extends Component {

    componentDidMount(){
        let {hash} = this.props.location; 
        if(hash === ""){
           return; 
        }else if(this.paramCheck()){
            jump(hash);
        }
    }


    paramCheck = () => {
        let positionArr = projects.map((element,index)=>`#position${index}`);
        let acceptableStringsArr = ["#about-section-header","#portfolio-section-header","#header","#footer-section",...positionArr];
        let {hash} = this.props.location;
        return acceptableStringsArr.includes(hash); 
    }

    render() {
        return (
            <div>
                <MainBanner/>
                <About/>
                <Portfolio/>
            </div>
        );
    }
}

export default Landing;