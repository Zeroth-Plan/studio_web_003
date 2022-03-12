import React, { Component } from 'react';
import './About.css'

class Abouthead extends Component {
    render() {
        return (
            <div>
                {/* Page Header Start */}
                <div className="about-header">
                {/* <img src="" alt="Image" /> */}
                    <div className="containerab">
                    <div className="roab">
                        <div className="col-12">
                        <h2>About Us</h2>
                        </div>
                        <div className="col-12">
                        <a href="/home">Home</a>
                        <a href="/about">About Us</a>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Page Header End */}
            </div>
        );
    }
}

export default Abouthead;
