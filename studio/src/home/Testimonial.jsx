import React, { Component } from 'react';
import './Home.css'

class Testimonial extends Component {
    render() {
        return (
            <div>
                 {/* Testimonial Start */}
                 <div className="testimonial wow fadeInUp" data-wow-delay="0.1s">
                        {/* <div className="containerw"> */}
                        <div className="container ct">
                        <div className="section-header text-center">
                            <p>Testimonial</p>
                            <h2>Testimonial!</h2>
                        </div>
                        </div>
                    </div>
                    {/*8888888*/}    
                                        {/* <div className="container1"> */}
                                        <div className="container ct">
                    <div className="row">
                        <div className="col-lg-4">
                        <div className="card">
                            <div className="face front-face">
                            {" "}
                            <img
                                // src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                                // src="assets/img/pf1.jpg"
                                src="assets/img/1.svg"
                                alt
                                className="profile"
                            />
                            <div className="pt-3 text-uppercase name"> Robert Garrison </div>
                            <div className="designation">Photographer</div>
                            </div>
                            <div className="face back-face">
                            {" "}
                            <span className="fas fa-quote-left" />
                            <div className="testimonial">
                                {" "}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                                nec pretium mi. Curabitur facilisis ornare velit non vulputate.
                                Aliquam metus tortor, auctor id gravida condimentum,{" "}
                            </div>{" "}
                            <span className="fas fa-quote-right" />
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="card">
                            <div className="face front-face">
                            {" "}
                            <img
                                // src="assets/img/pf3.jpg"
                                src="assets/img/3.svg"
                                alt
                                className="profile"
                            />
                            <div className="pt-3 text-uppercase name"> Eve Torrese </div>
                            <div className="designation">Doctor</div>
                            </div>
                            <div className="face back-face">
                            {" "}
                            <span className="fas fa-quote-left" />
                            <div className="testimonial">
                                {" "}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                                nec pretium mi. Curabitur facilisis ornare velit non vulputate.
                                Aliquam metus tortor, auctor id gravida condimentum,{" "}
                            </div>{" "}
                            <span className="fas fa-quote-right" />
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="card">
                            <div className="face front-face">
                            {" "}
                            <img
                                // src="assets/img/pf2.jpg"
                                src="assets/img/2.svg"
                                alt
                                className="profile"
                            />
                            <div className="pt-3 text-uppercase name"> Issac Maxwell </div>
                            <div className="designation">Finance Director</div>
                            </div>
                            <div className="face back-face">
                            {" "}
                            <span className="fas fa-quote-left" />
                            <div className="testimonial">
                                {" "}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                                nec pretium mi. Curabitur facilisis ornare velit non vulputate.
                                Aliquam metus tortor, auctor id gravida condimentum, {" "}
                            </div>{" "}
                            <span className="fas fa-quote-right" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        );
    }
}

export default Testimonial;
