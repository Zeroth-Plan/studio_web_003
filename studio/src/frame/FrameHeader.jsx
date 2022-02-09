import React, { Component } from 'react';
import './Frame.css'

class Frameheader extends Component {
    render() {
        return (
            <div>
                 {/* Page Header Start */}
                 <div className="page-header">
                {/* <img src="assets/img/frame3.jpg" alt="Image" /> */}
                    <div className="containery">
                    <div className="rowi">
                        <div className="col-12">
                        <h2>Frames</h2>
                        </div>
                        <div className="col-12">
                        <a href="/home">Home</a>
                        <a href="/frame">Frames</a>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Page Header End */}
            </div>
        );
    }
}

export default Frameheader;
