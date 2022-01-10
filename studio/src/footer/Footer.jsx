import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer wow fadeIn" data-wow-delay="0.3s">
                    <div className="containerq-fluid">
                    <div className="containerq">
                        <div className="footer-info">
                        <a href="index.html" className="footer-logo">
                            Mi<span>la</span>ns
                        </a>
                        {/* <h3>123 Street, New York, USA</h3> */}
                        {/* <div className="footer-menu">
                            <p>+012 345 67890</p>
                            <p>info@example.com</p>
                        </div> */}
                        <div className="footer-social">
                            <a href>
                            <i className="fab fa-twitter" />
                            </a>
                            <a href>
                            <i className="fab fa-facebook-f" />
                            </a>
                            <a href>
                            <i className="fab fa-youtube" />
                            </a>
                            <a href>
                            <i className="fab fa-instagram" />
                            </a>
                            <a href>
                            <i className="fab fa-linkedin-in" />
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="containerq copyright">
                        <div className="row">
                        <div className="col-md-6">
                            <p>
                            © <a href="#">Milans Studio</a>, All Right Reserved.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                            Designed By <a href="#">ZerothPlan</a>
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Footer End */}
                
                <a href="#" className="back-to-top">
                    <i className="fas fa-chevron-circle-right" />
                </a>
            </div>
        );
    }
}

export default Footer;
