import React, { Component } from 'react';
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';
import './PhotoPrint.css'

class Photoprint extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                {/* Page Header Start */}
                <div className="print-header">
                    <div className="container">
                    <div className="ro4">
                        {/* <div className="col-12">
                        <h2>Frames</h2>
                        </div>
                        <div className="col-12">
                        <p>Revamp your style with the latest designer trends in men’s clothing or 
                        achieve a perfectly curated wardrobe thanks to our line-up of timeless pieces.</p>
                        </div> */}
                    </div>
                    </div>
                </div>
                {/* Page Header End */}
                 {/* Discount Start */}
                 <div
                    className="b wow zoomIn"
                    data-wow-delay="0.1s"
                    style={{ marginBottom: 90 }}
                >
                    <div className="container">
                    {/* <div className="section-header text-center">
                        <p>Awesome Discount</p>
                        <h2>
                        Get <span>30%</span> Discount for all Classes
                        </h2>
                    </div> */}
                    {/* <div className="container discount-text">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
                        pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam
                        metus tortor, auctor id gravida condimentum, viverra quis sem.
                        Curabitur non nisl nec nisi scelerisque maximus.
                        </p>
                        <a className="btn">Join Now</a>
                    </div> */}
                    </div>
                </div>
                {/* Discount End */}
                <Footer/>
            </div>
        );
    }
}

export default Photoprint;
