import React, { Component } from 'react';
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';
import './Cart.css'
import Cartbottom from './Cartbottom';
import Cartcontent from './Cartcontent';
import Carthead from './Carthead';

class Cart extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Carthead/>
                <Cartcontent/>
                <Cartbottom/>
                <Footer/>
            </div>
        );
    }
}

export default Cart;
