import React, {Component} from 'react';
import mountainPic from '../images/mountain.JPG';
import montana from '../images/montana-pt.jpg';
import '../styles/About.css';

class About extends Component{  

    constructor(props){
        super(props)

     this.state ={ techArray: [
                "HTML5",
                "CSS3",
                "JavaScript",
                "JQuery",
                "React.js",
                "GraphQL",
                "Node.js",
                "MongoDB",
                "PHP7",
                "MySQL",
                "Wordpress Theme Construction"
]}
    }
    cycleThroughList(e){
        let ulList = document.getElementById("ul-tech");
        let timer = 100;

        for(let i = 0; i < 12; i++){

            setTimeout(
                function(){
                ulList.childNodes[i].className = "bigger"}
                ,timer);
            timer += 100;
        }
        let oppTimer = 1200; 
        for(let i = 0; i < 12; i++){

            setTimeout(
                function(){
                ulList.childNodes[i].className = "normal"}
                ,oppTimer);
            oppTimer += 100;
        }
    }



    listTechnologies(){
       return this.state.techArray.map((item,index)=>{
            return(
                <li
                key={index}
                 >
                    {item}
                </li> 
            );
        });
    }


    render(){
        return(
            <section className="about-section">
                <h2>First... A little about me</h2>
                <div className="tech-div">
                    <h4>Technologies</h4>
                    <ul onMouseEnter={this.cycleThroughList.bind(this)} id="ul-tech">
                        <span>(mouse here!)</span> 
                        {this.listTechnologies()}
                    </ul>
                </div>
                <img className="about-pic" src={mountainPic} alt="guy standing on mountain"/> 
                <img className="montana-pt" src={montana} alt="pointer"/> 
                <span>
                    I value the little things in life,  and always try to enjoy the present
                    .  My travels have broadened my horizons
                    and I love watersports.  Developing websites challenges the artistic side of 
                    me as well as the logical.  That's mostly why I love it.    
                </span> 
                <h2 className="classified">CLASSIFIED</h2>
            </section>
        );
    }


}

export default About; 