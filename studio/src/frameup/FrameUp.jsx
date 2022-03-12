import React, { Component } from 'react';
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';
import Fbottomup from './Fbottomup';
import Fcontentup from './Fcontentup';
import Frameuhead from './Frameuhead';
import './FrameUp.css'

class Frameup extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Frameuhead/> 
                <Fcontentup/>
                <Fbottomup/>
                <Footer/>
            </div>
        );
    }
}

export default Frameup;
