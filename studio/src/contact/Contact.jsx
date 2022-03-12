import React, { Component } from 'react';
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';
import Ccontent from './Ccontent';
import './Contact.css'
import Contacthead from './Contacthead';

class Contact extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Contacthead/>
                <Ccontent/>    
                <Footer/>
            </div>
        );
    }
}

export default Contact;
