import React, { Component } from 'react';
import './Mug.css'

class Mughead extends Component {
    render() {
        return (
            <div>
                {/* Page Header Start */}
                <div className="mug-header">
                {/* <img src="assets/img/frame3.jpg" alt="Image" /> */}
                    <div className="containert">
                    <div className="ro">
                        <div className="col-12">
                        <h2>Sublimations Items</h2>
                        </div>
                        <div className="col-12">
                        <a href="/home">Home</a>
                        <a href="/mug">Sublimations Items</a>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Page Header End */}
            </div>
        );
    }
}

export default Mughead;
