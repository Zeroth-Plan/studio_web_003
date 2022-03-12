import React, { Component } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header'; 
import Navigation from '../navigation/Navigation';
import Hero from './Hero';
import './Home.css'
import Homeabout from './Homeabout';
import Homecontent from './Homecontent';
import Testimonial from './Testimonial';

class Home extends Component {
    render() {
        return (
            
            <div>
                
                {/* <Header/>  */}
                <Navigation/>
                <Hero/>
                <Homecontent/>                             
                <Homeabout/>
                <Testimonial/>
                <Footer/>
                
                
            </div>
        );
    }
}

export default Home;
