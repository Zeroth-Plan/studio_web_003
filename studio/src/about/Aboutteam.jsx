import React, { Component } from 'react';
import './About.css'

class Aboutteam extends Component {
    render() {
        return (
            <div>
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
                   </div>
                    {/* Team End */} 
            </div>
        );
    }
}

export default Aboutteam;
