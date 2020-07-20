import React, {Component} from 'react';

import MainBanner from './MainBanner';
import About from './About';
import Portfolio from './Portfolio';

class Landing extends Component {
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