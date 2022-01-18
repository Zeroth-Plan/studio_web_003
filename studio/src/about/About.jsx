import React, { Component } from 'react';
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';
import './About.css'

class About extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                   {/* Page Header Start */}
                <div className="about-header">
                {/* <img src="" alt="Image" /> */}
                    <div className="containerab">
                    <div className="roab">
                        <div className="col-12">
                        <h2>About Us</h2>
                        </div>
                        <div className="col-12">
                        <a href="/home">Home</a>
                        <a href="/about">About Us</a>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Page Header End */}
                              {/* About Start */}
                <div className="about wow fadeInUp" data-wow-delay="0.3s">
                        {/* <div className="deflix"> */}
                        <div className="container ct">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-6">
                            {/* <div className="about-img"> */}
                            <div className="about-img wow fadeInUp" data-wow-delay="0.9s">
                                <img src="assets/img/ppn.png" alt="Image" />
                            </div>
                            </div>
                            <div className="col-lg-7 col-md-6">
                            <div className="section-header text-left">
                                <p>Learn About Us</p>
                                <h2>Welcome to Milan's Studio</h2>
                            </div>
                            <div className="about-text">
                                <p>
                                To us, photography is about storytelling. we’re a different type of photography company.
                                we’re not here to boast about the hours we spend in Photoshop or our proficiency with special effects.
                                We’re focused on capturing the story of you and your wedding day. The real you, and the real emotions of your wedding day.
                                We’re passionate about your story, what makes you special and unique. We think photography offers an exceptional opportunity to capture this story, one that is often missed by photographers focused on “cool shots” and “special effects”.
                                Our goal is to be present, feel the energy, tell your story, and capture what makes you special, unique, quirky, and different. We think you deserve nothing less on your wedding day. don’t you agree?
                                </p>
                                <p>
                                Have a look around our site, have a look at the way we display the stories of our clients in a way that really captures who they are, and what the emotions of their wedding day was like.
                                To us, this is the pinnacle of wedding photography. not everyone see’s things the way we do, and that’s ok. But to us there’s no other way to shoot a wedding, than where we’re capturing the story of who we’re shooting, capturing the unique emotions of their day, and bringing it all together to present what makes them special, unique, and different.
                                </p>
                                {/* <a className="btn" href>
                                Learn More
                                </a> */}
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* About End */} 
                    {/* Team Start */}
                    <div className="team">
                        <div className="deflix">
                        {/* <div className="container ctt"> */}
                        <div
                            className="section-header text-center wow zoomIn"
                            data-wow-delay="0.1s"
                        >
                            <p>Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!</p>
                            <h2>Our Team</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            {/* <div className="team-item"> */}
                            <div className="team-itemi">
                                <div className="team-img ">
                                <img src="assets/img/Teamab.jpg" alt="Image" />
                                <div className="team-social">
                                    <a href="/services">
                                    {/* <i className="fab fa-twitter" /> */}
                                    <i class="fas fa-chevron-circle-right"></i>
                                    </a>
                                    {/* <a href>
                                    <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href>
                                    <i className="fab fa-linkedin-in" />
                                    </a>
                                    <a href>
                                    <i className="fab fa-instagram" />
                                    </a> */}
                                </div>
                                </div>
                                {/* <div className="team-text">
                                <h2>Millie Harper</h2>
                                <p>Yoga Teacher</p>
                                </div> */}
                            </div>
                            </div>
                            </div>
                            
                   </div>
                    {/* Team End */}       
                <Footer/>
            </div>
            </div>
        );
    }
}

export default About;
