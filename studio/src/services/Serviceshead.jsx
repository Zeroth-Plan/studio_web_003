import React, { Component } from 'react';
import './Services.css'

class Serviceshead extends Component {
    render() {
        return (
            <div>
                {/* Page Header Start */}
                <div className="services-header">
                {/* <img src="assets/img/frame3.jpg" alt="Image" /> */}
                    <div className="containerp">
                    <div className="ro3">
                        <div className="col-12">
                        <h2>Services</h2>
                        </div>
                        <div className="col-12">
                        <a href="/home">Home</a>
                        <a href="/services">Services</a>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Page Header End */}
            </div>
        );
    }
}

export default Serviceshead;
