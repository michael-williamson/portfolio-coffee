import React, {Component} from 'react';
import projects from '../json/portfolio';
import '../styles/Projects.css';

class Projects extends Component{  

    displayProjects(){
       return projects.map((item,index)=>{
            return(
                <div className="projects-li-bg-img li-container" key={index}>
                <li className="project-li-item">
                    <h2>{item.title}</h2>
                    <img alt="screenshots of projects" src={process.env.PUBLIC_URL + item.image}/> 
                    <span>{item.description}</span>
                    <div className="btn-div">
                        <button><a href={item.site}>Site</a></button> 
                        <button><a href={item.code}>Code</a></button>   
                    </div> 
                </li>
                </div> 
            );
        })
    }


    render(){
        return(
            <section className="projects-section">
                <h1>Apps and Sites</h1>
                <ul>{this.displayProjects()}</ul>
            </section>
        );
    }


}

export default Projects; 