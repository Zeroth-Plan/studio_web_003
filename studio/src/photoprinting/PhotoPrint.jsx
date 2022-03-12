import React, { Component } from 'react';
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';
import Pbottom from './Pbottom';
import Pcontent from './Pcontent';
import Photophead from './Photophead';
import './PhotoPrint.css'

class Photoprint extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Photophead/>
                <Pcontent/>
                <Pbottom/>
                <Footer/>
            </div>
        );
    }
}

export default Photoprint;
