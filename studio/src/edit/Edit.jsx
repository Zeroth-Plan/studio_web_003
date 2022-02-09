import React, { Component } from 'react';
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';
import './Edit.css'
import Editbottom from './Editbottom';
import Editcontent from './Editcontent';
import Edithead from './Edithead';

class Edit extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Edithead/> 
                <Editcontent/>
                <Editbottom/>
                <Footer/>
            </div>
        );
    }
}

export default Edit;
