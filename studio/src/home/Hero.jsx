import React, { Component } from 'react';
import './Home.css'

class Hero extends Component {
    render() {
        return (
            <div>
                 {/* Hero Start */}
                 <div className="hero">
                        <div className="containerw-fluid">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-6" >
                            <div className="hero-text wow fadeInUp" data-wow-delay="0.1s" >
                                <h1> Photography <br></br>Solution For You</h1>
                                {/* <h1> <span>Photography Solution For You </span></h1> */}
                                <p>
                                {/* Lorem ipsum dolor sit amet elit. Phasell nec pretum mi. Curabi
                                ornare velit non. Aliqua metus tortor auctor quis sem. */}
                                We are a photo booth service provider based in Sri Lanka and we specialize in providing high quality, fun, professional, user friendly and cost effective open air photo booth rental services for your events held island wide.
                                
                                </p>
                                {/* <div className="hero-btn"> */}
                                <div className="hero-btn wow fadeInUp" data-wow-delay="0.9s">
                                <a className="btn" href="/login">
                                    Join Now
                                </a>
                                <a className="btn" href="/contact">
                                    Contact Us
                                </a>
                                
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-12 col-md-6 d-none d-md-block">
                            <div className="hero-image">
                                <img src="assets/img/hero.png" alt="Hero Image" />
                            </div>
                            </div>
                        </div>
                        </div>
                       {/******** */}
                       <div class="area" >
                       <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
            </div>
                       {/******* */}
                    </div>
                    {/* Hero End */}
            </div>
        );
    }
}

export default Hero;
