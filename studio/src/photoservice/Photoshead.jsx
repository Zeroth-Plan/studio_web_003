import React, { Component } from 'react';
import './PhotoService.css'

class Photoshead extends Component {
    render() {
        return (
            <div>
                {/* Page Header Start */}
                <div className="service-header">
                {/* <img src="assets/img/frame3.jpg" alt="Image" /> */}
                    <div className="containeru">
                    <div className="ron">
                        <div className="col-12">
                        <h2>Photography Services</h2>
                        </div>
                        <div className="col-12">
                        <a href="/home">Home</a>
                        <a href="/photoservice">Photography Services</a>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Page Header End */}
            </div>
        );
    }
}

export default Photoshead;
