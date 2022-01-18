import React, { Component } from 'react';
// import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';
import './Home.css'

class Home extends Component {
    render() {
        return (
            
            <div>
                
                 <Navigation/>
                                    {/* Hero Start */}
                    <div className="hero">
                        <div className="containerw-fluid">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-6" >
                            <div className="hero-text wow fadeInUp" data-wow-delay="0.1s" >
                                <h1> Photography <br></br>Solution For You</h1>
                                {/* <h1> <span>Photography Solution For You </span></h1> */}
                                <p>
                                {/* Lorem ipsum dolor sit amet elit. Phasell nec pretum mi. Curabi
                                ornare velit non. Aliqua metus tortor auctor quis sem. */}
                                We are a photo booth service provider based in Sri Lanka and we specialize in providing high quality, fun, professional, user friendly and cost effective open air photo booth rental services for your events held island wide.
                                
                                </p>
                                {/* <div className="hero-btn"> */}
                                <div className="hero-btn wow fadeInUp" data-wow-delay="0.9s">
                                <a className="btn" href="/login">
                                    Join Now
                                </a>
                                <a className="btn" href="/contact">
                                    Contact Us
                                </a>
                                
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-12 col-md-6 d-none d-md-block">
                            <div className="hero-image">
                                <img src="assets/img/hero.png" alt="Hero Image" />
                            </div>
                            </div>
                        </div>
                        </div>
                       {/******** */}
                       <div class="area" >
                       <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
            </div>
                       {/******* */}
                    </div>
                    {/* Hero End */}
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
                                        {/* Team Start */}
                    <div className="team">
                        <div className="containerdt">
                        {/* <div className="container ct"> */}
                        <div
                            className="section-header text-center wow zoomIn"
                            data-wow-delay="0.1s"
                        >
                            <p>Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!</p>
                            <h2>Our Latest Products</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.0s">
                            <div className="team-item">
                                <div className="team-img ">
                                <img src="assets/img/v3.jpg" alt="Image" />
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
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="team-item">
                                <div className="team-img">
                                <img src="assets/img/event/event4.jpg" alt="Image" />
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
                                <h2>Lilly Fry</h2>
                                <p>Yoga Teacher</p>
                                </div> */}
                            </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="team-item">
                                <div className="team-img">
                                <img src="assets/img/3.jpg" alt="Image" />
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
                                <h2>Elise Moran</h2>
                                <p>Yoga Teacher</p>
                                </div> */}
                            </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="team-item">
                                <div className="team-img">
                                <img src="assets/img/v.jpg" alt="Image" />
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
                                <h2>Kate Glover</h2>
                                <p>Yoga Teacher</p>
                                </div> */}
                            </div>
                            </div>
                            {/* break */}
                             <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.8s">
                            <div className="team-item">
                                <div className="team-img">
                                <img src="assets/img/2.jpg" alt="Image" />
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
                                <h2>Lilly Fry</h2>
                                <p>Yoga Teacher</p>
                                </div> */}
                            </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="1.2s">
                            <div className="team-item">
                                <div className="team-img">
                                <img src="assets/img/5.jpg" alt="Image" />
                                <div className="team-social">
                                    <a href="/services">
                                    <i class="fas fa-chevron-circle-right"></i>    
                                    {/* <i className="fab fa-twitter" /> */}
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
                                <h2>Lilly Fry</h2>
                                <p>Yoga Teacher</p>
                                </div> */}
                            </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="1.4s">
                            <div className="team-item">
                                <div className="team-img one">
                                <img src="assets/img/6.jpg" alt="Image" />
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
                                <h2>Lilly Fry</h2>
                                <p>Yoga Teacher</p>
                                </div> */}
                            </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="1.6s">
                            <div className="team-item">
                                <div className="team-img">
                                <img src="assets/img/event/event5.png" alt="Image" />
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
                                <h2>Lilly Fry</h2>
                                <p>Yoga Teacher</p>
                                </div> */}
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Team End */}                
                    
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

                 {/* <Footer/> */}
                 {/******** */}
                 <div className="foote wow fadeIn" data-wow-delay="0.3s">
                    <div className="containerr-fluid">
                    <div className="containerr">
                        <div className="foote-info">
                        <a href="index.html" className="foote-logo">
                            Mi<span>la</span>ns
                        </a>
                        <h3>A1, Nittambuwa</h3>
                        <div className="foote-menu">
                            <p>+94332289605</p>
                            <p>milans@example.com</p>
                        </div>
                        <div className="foote-social">
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
                    {/******* */}
                    <div className="loca">
                        {/* <p>Location</p> */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.8601367123524!2d80.09241061477414!3d7.142167394842818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fd5ecc8aaa3f%3A0xab664bfe8b0794cb!2sMilans%20Digital%20Color%20Lab!5e0!3m2!1sen!2slk!4v1640800442143!5m2!1sen!2slk" width="100%" height="249" ></iframe>
                        </div>
                        {/************ */}
                    {/* <div className="container copyright">
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
                    </div> */}
                    </div>
                     {/************ */}
                    <div className="containerp copyright">
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
                {/* Footer End */}
            </div>
        );
    }
}

export default Home;
