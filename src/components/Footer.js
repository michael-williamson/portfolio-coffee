import React, {Component} from 'react';
import '../styles/Footer.css';

class Footer extends Component{  


    render(){
        return(
            <footer>
                <h5>michaelwilliamsondesigns@gmail.com</h5>
                <div className="social-icons-div">
                <a href="https://github.com/michael-williamson"><i className="fa fa-github-square"></i></a>
                    <a href="https://www.linkedin.com/in/michael-williamson-b6158913b/"><i className="fa fa-linkedin"></i></a>
                </div>                 
            </footer> 
        );
    }


}

export default Footer; 