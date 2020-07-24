import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import projects from '../json/portfolio.js';
import '../style/SingleProject.css';

class SingleProject extends Component {

    displayProject() {
        return  projects.map((project,index) => {
            if (this.props.match.params.name === project.title) {
                return (
                    <div className="project-item" key={index}>
                       <h1>{project.title}</h1>
                       <div>
                        <img
                            alt="screenshots of projects"
                            src={process.env.PUBLIC_URL + project.image}
                            style={{width:200,height:200}}/>
                        </div> 
                        <div>
                            <div className="lead">{project.description}</div>
                        </div>
                        <div>
                            <button className="btn btn-lg">
                                <a href={project.site} target="_blank">Check it out<i className="fa fa-hand-o-right"></i></a> 
                            </button> 
                        </div>
                        <Link to={`/#position${index}`} className="btn btn-lg to-main">Back to Main<i className="fa fa-home"></i></Link> 
                    </div>
                );
            }
                return null; 
        });
    }

    render() {
        return (
            <div className="single-project-page">
                {this.displayProject()}
            </div>
        );
    }
}

export default SingleProject;