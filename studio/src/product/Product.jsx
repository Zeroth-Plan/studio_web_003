import React, { Component } from 'react';
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';
import Prbottom from './Prbottom';
import Prcontent from './Prcontent';
import './Product.css'
import Producthead from './Producthead';
class Product extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Producthead/>
                <Prcontent/>
                <Prbottom/>
                <Footer/>
                
            </div>
        )
    }
}

export default Product;
