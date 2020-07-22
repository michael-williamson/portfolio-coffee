import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../style/Portfolio.css';
import projects from '../json/portfolio.js';

class Portfolio extends Component {

    displayProjects(){
        return projects.map((project,index)=>{
            return(
                <div className="card-display-projects" id={`position${index}`} key={index}>
                    <img alt="screenshots of projects" src={process.env.PUBLIC_URL + project.image}/>
                    <div className="overlay">
                        <h5>{project.title}</h5>
                        <ul>
                        {project.tech.map((tech,index)=>{
                            return (
                                <li key={index}>{tech}</li>
                            );
                        })}
                        </ul> 
                        <div className="link-div">
                        <Link to={`project/${project.title}`} className="btn see-more-link">See More!</Link>
                        </div> 
                    </div> 
                </div> 
            );
        })
    }


    render() {
        return (
            <div className="portfolio-section" id="portfolio-section">
                <h1>Portfolio</h1>
                <div className="projects-div">
                    {this.displayProjects()}
                </div>
            </div>
        );
    }
}

export default Portfolio;