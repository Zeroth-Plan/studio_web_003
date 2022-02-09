import React, { Component } from 'react';
import './Metal.css'

class Metalhead extends Component {
    render() {
        return (
            <div>
                {/* Page Header Start */}
                <div className="metal-header">
                {/* <img src="assets/img/frame3.jpg" alt="Image" /> */}
                    <div className="containermtt">
                    <div className="romt">
                        <div className="col-12">
                        <h2>Metal Etching</h2>
                        </div> 
                        <div className="col-12">
                        <a href="/home">Home</a>
                        <a href ="/metal">Metal Etching</a>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Page Header End */}
            </div>
        );
    }
}

export default Metalhead;
