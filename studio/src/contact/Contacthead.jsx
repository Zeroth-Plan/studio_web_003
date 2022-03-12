import React, { Component } from 'react';
import './Contact.css'

class Contacthead extends Component {
    render() {
        return (
            <div>
                {/* Page Header Start */}
                <div className="contact-header">
                        <div className="containerct">
                        <div className="rowct">
                            <div className="col-12">
                            <h2>Contact Us</h2>
                            </div>
                            <div className="col-12">
                            <a href="/home">Home</a>
                            <a href="/contact">Contact Us</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Page Header End */}
            </div>
        );
    }
}

export default Contacthead;
