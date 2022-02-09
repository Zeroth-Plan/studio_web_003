import React, { Component } from 'react';
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';
import Flexbottomu from './Flexbottomu';
import Flexcontentu from './Flexcontentu';
import Flexuhead from './Flexuhead';
import './FlexUp.css'

class Flexup extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Flexuhead/>
                <Flexcontentu/>
                <Flexbottomu/>
                <Footer/>
            </div>
        );
    }
}

export default Flexup;
