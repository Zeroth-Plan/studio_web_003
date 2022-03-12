import React, { Component } from 'react';
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';
import Scontent from './Scontent';
import Serbottom from './Serbottom';
import './Services.css'
import Serviceshead from './Serviceshead';



class Services extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Serviceshead/>
                <Scontent/>
                <Serbottom/>
                <Footer/>
            </div>
        );
    }
}

export default Services;
