import React, { Component } from 'react';
import './Home.css'

class Homeabout extends Component {
    render() {
        return (
            <section>
            <div>
                
                {/* About Start */}
                <div className="about wow fadeInUp" data-wow-delay="0.1s">
                        {/* <div className="containere"> */}
                        <div className="container ct">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-6">
                            <div className="about-imge ">
                                <img src="assets/img/about.png" alt="Image" />
                            </div>
                            </div>
                            <div className="col-lg-7 col-md-6">
                            <div className="section-header text-left">
                                <p>Learn About Us</p>
                                <h2>Welcome to Milan's Studio</h2>
                            </div>
                            <div className="about-text">
                                <p>
                                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                                nec pretium mi. Curabitur facilisis ornare velit non vulputate.
                                Aliquam metus tortor, auctor id gravida condimentum, viverra quis
                                sem. */}
                                To us, photography is about storytelling. we’re a different type of photography company.
                                we’re not here to boast about the hours we spend in Photoshop or our proficiency with special effects.
                                We’re focused on capturing the story of you and your wedding day. 
                                
                                </p>
                                <p>
                                The real you, and the real emotions of your wedding day.
                                We’re passionate about your story, what makes you special and unique. We think photography offers an exceptional opportunity to capture this story, one that is often missed by photographers focused on “cool shots” and “special effects”.
                                Our goal is to be present, feel the energy, tell your story, and capture what makes you special, unique, quirky, and different. We think you deserve nothing less on your wedding day. don’t you agree?
                                </p>
                                {/* <a className="btn" href="/about"> */}
                                <a className="btn" href="/about">
                                Learn More
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* About End */} 
                    
             </div> 
             </section>
        );
    }
}

export default Homeabout;
