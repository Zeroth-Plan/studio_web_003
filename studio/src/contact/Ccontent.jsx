import React, { Component } from 'react';
import './Contact.css'

class Ccontent extends Component {
    render() {
        return (
            <div>
                {/* Contact Start */}
                <div className="contact">
                        <div className="container ct">
                        <div
                            className="section-header text-center wow zoomIn"
                            data-wow-delay="0.1s"
                        >
                            <p>Get In Touch</p>
                            <h2>For Any Query</h2>
                        </div>
                        <div className="row">
                            <div className="col-12">
                            <div className="row">
                                <div
                                className="col-md-4 contact-item wow zoomIn"
                                data-wow-delay="0.2s"
                                >
                                <i className="fa fa-map-marker-alt" />
                                <div className="contact-text">
                                    <h2>Location</h2>
                                    <p>A1, Nittambuwa</p>
                                </div>
                                </div>
                                <div
                                className="col-md-4 contact-item wow zoomIn"
                                data-wow-delay="0.4s"
                                >
                                <i className="fa fa-phone-alt" />
                                <div className="contact-text">
                                    <h2>Phone</h2>
                                    <p>+943 322 89605</p>
                                </div>
                                </div>
                                <div
                                className="col-md-4 contact-item wow zoomIn"
                                data-wow-delay="0.6s"
                                >
                                <i className="far fa-envelope" />
                                <div className="contact-text">
                                    <h2>Email</h2>
                                    <p>milans@example.com</p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="contact-form">
                                <div id="success" />
                                <form name="sentMessage" id="contactForm" noValidate="novalidate">
                                <div className="control-group">
                                    <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    required="required"
                                    data-validation-required-message="Please enter your name"
                                    />
                                    <p className="help-block text-danger" />
                                </div>
                                <div className="control-group">
                                    <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Your Email"
                                    required="required"
                                    data-validation-required-message="Please enter your email"
                                    />
                                    <p className="help-block text-danger" />
                                </div>
                                <div className="control-group">
                                    <input
                                    type="text"
                                    className="form-control"
                                    id="subject"
                                    placeholder="Subject"
                                    required="required"
                                    data-validation-required-message="Please enter a subject"
                                    />
                                    <p className="help-block text-danger" />
                                </div>
                                <div className="control-group">
                                    <textarea
                                    className="form-control"
                                    id="message"
                                    placeholder="Message"
                                    required="required"
                                    data-validation-required-message="Please enter your message"
                                    defaultValue={""}
                                    />
                                    <p className="help-block text-danger" />
                                </div>
                                <div>
                                    <button className="btn" type="submit" id="sendMessageButton">
                                    Send Message
                                    </button>
                                </div>
                                </form>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Contact End */}
            </div>
        );
    }
}

export default Ccontent;
