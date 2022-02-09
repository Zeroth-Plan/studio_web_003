import React, { Component } from 'react';
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';
import './About.css'
import Abouta from './Abouta';
import Abouthead from './Abouthead';
import Aboutteam from './Aboutteam';

class About extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                   <Abouthead/>
                         <Abouta/>    
                    <Aboutteam/>   
                <Footer/>
            
            </div>
        );
    }
}

export default About;
