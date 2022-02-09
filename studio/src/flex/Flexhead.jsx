import React, { Component } from 'react';
import './Flex.css'

class Flexhead extends Component {
    render() {
        return (
            <div>
                {/* Page Header Start */}
                <div className="flex-header">
                {/* <img src="assets/img/frame3.jpg" alt="Image" /> */}
                    <div className="containeri">
                    <div className="ro1">
                        <div className="col-12">
                        <h2>Flex,Banners and Stickers</h2>
                        </div>
                        <div className="col-12">
                        <a href="/home">Home</a>
                        <a href="/flex">Flex,Banners and Stickers</a>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Page Header End */}
            </div>
        );
    }
}

export default Flexhead;
