import React, { Component } from 'react';
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';
import './PhotoService.css'

function serviceb(){
    document.getElementById('ser')
    .src="assets/img/event/event.jpg";
    document.getElementById('ser1')
    .src="assets/img/event/event1.jpg" ;
    document.getElementById('ser2')
    .src="assets/img/event/event2.jpg";
    document.getElementById('ser3')
    .src="assets/img/event/event3.jpg";
    document.getElementById('ser4')
    .src="assets/img/event/event4.jpg";
    document.getElementById('ser5')
    .src="assets/img/event/event5.png";
    
};
function serviceb1(){
    document.getElementById('ser')
    .src="assets/img/product/product.jpg";
    document.getElementById('ser1')
    .src="assets/img/product/product1.jpg";
    document.getElementById('ser2')
    .src="assets/img/product/product2.jpg";
    document.getElementById('ser3')
    .src="assets/img/product/product3.jpg";
    document.getElementById('ser4')
    .src="assets/img/product/product4.jpg";
    document.getElementById('ser5')
    .src="assets/img/product/product5.jpg";
    
};
function serviceb2(){
    document.getElementById('ser')
    .src="assets/img/wedding/wedding.jpg";
    document.getElementById('ser1')
    .src="assets/img/wedding/wedding1.jpg";
    document.getElementById('ser2')
    .src="assets/img/wedding/wedding2.jpg";
    document.getElementById('ser3')
    .src="assets/img/wedding/wedding3.jpg";
    document.getElementById('ser4')
    .src="assets/img/wedding/wedding4.jpg";
    document.getElementById('ser5')
    .src="assets/img/wedding/wedding5.jpg";
    
};
class Photoservice extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                {/* Page Header Start */}
                <div className="service-header">
                {/* <img src="assets/img/frame3.jpg" alt="Image" /> */}
                    <div className="containeru">
                    <div className="ron">
                        <div className="col-12">
                        <h2>Photography Services</h2>
                        </div>
                        <div className="col-12">
                        <a href="/home">Home</a>
                        <a href="/photoservice">Photography Services</a>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Page Header End */}
                {/* Class Start */}
                <div className="class">
                    <div className="container">
                    <div
                        className="section-header text-center wow zoomIn"
                        data-wow-delay="0.1s"
                    >
                        <p>Showing 1003 products</p>
                        {/* <h2>Yoga Class Shedule</h2> */}
                    </div>
                    <div className="row">
                        <div className="col-12">
                        <ul id="class-filter">
                            {/* <li data-filter="*" className="filter-active"> */}
                            <li data-filter="*" onClick={serviceb}>  
                            Events
                            </li>
                            <li data-filter=".filter-1" onClick={serviceb1}>Product photography</li>
                            <li data-filter=".filter-2" onClick={serviceb2}>Wedding/Engagements etc</li>
                            <a className="btn" href="/contact">
                                Contact Us
                                </a>
                        </ul>
                        </div>
                    </div>
                    <div className="row class-container">
                        <div
                        className="col-lg-4 col-md-6 col-sm-12 class-item filter-1 wow fadeInUp"
                        data-wow-delay="0.0s"
                        >
                        <div className="class-wrap">
                            <div className="class-img">
                            <img id="ser" src="assets/img/event/event.jpg"alt="Image" />
                            <div class="class-social">
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="class-text">
                            {/* <div className="class-teacher">
                                <img src="assets/img/teacher-1.png" alt="Image" />
                                <h3>Elise Moran</h3>
                                <a href>+</a>
                            </div> */}
                            <h2>Rs:5000</h2>
                            <div className="class-meta">
                                <p>
                                {/* <i className="far fa-calendar-alt" /> */}
                                16*16
                                </p>
                                {/* <p>
                                <i className="far fa-clock" />
                                9:00 - 10:00
                                </p> */}
                            </div>
                            </div>
                        </div>
                        </div>
                        <div
                        className="col-lg-4 col-md-6 col-sm-12 class-item filter-2 wow fadeInUp"
                        data-wow-delay="0.2s"
                        >
                        <div className="class-wrap">
                            <div className="class-img">
                            <img id="ser1" src="assets/img/event/event1.jpg" alt="Image" />
                            <div class="class-social">
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="class-text">
                            {/* <div className="class-teacher">
                                <img src="assets/img/teacher-2.png" alt="Image" />
                                <h3>Kate Glover</h3>
                                <a href>+</a>
                            </div> */}
                            <h2>Rs:3500</h2>
                            <div className="class-meta">
                                <p>
                                {/* <i className="far fa-calendar-alt" /> */}
                                20*12
                                </p>
                                {/* <p>
                                <i className="far fa-clock" />
                                9:00 - 10:00
                                </p> */}
                            </div>
                            </div>
                        </div>
                        </div>
                        <div
                        className="col-lg-4 col-md-6 col-sm-12 class-item filter-3 wow fadeInUp"
                        data-wow-delay="0.4s"
                        >
                        <div className="class-wrap">
                            <div className="class-img">
                            <img id="ser2" src="assets/img/event/event2.jpg" alt="Image" />
                            <div class="class-social">
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="class-text">
                            {/* <div className="class-teacher">
                                <img src="assets/img/teacher-3.png" alt="Image" />
                                <h3>Elina Ekman</h3>
                                <a href>+</a>
                            </div> */}
                            <h2>Rs:1000</h2>
                            <div className="class-meta">
                                <p>
                                {/* <i className="far fa-calendar-alt" /> */}
                                11*13
                                </p>
                                {/* <p>
                                <i className="far fa-clock" />
                                9:00 - 10:00
                                </p> */}
                            </div>
                            </div>
                        </div>
                        </div>
                        <div
                        className="col-lg-4 col-md-6 col-sm-12 class-item filter-4 wow fadeInUp"
                        data-wow-delay="0.6s"
                        >
                        <div className="class-wrap">
                            <div className="class-img">
                            <img id="ser3" src="assets/img/event/event3.jpg" alt="Image" />
                            <div class="class-social">
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="class-text">
                            {/* <div className="class-teacher">
                                <img src="assets/img/teacher-4.png" alt="Image" />
                                <h3>Lilly Fry</h3>
                                <a href>+</a>
                            </div> */}
                            <h2>Rs:1500</h2>
                            <div className="class-meta">
                                <p>
                                {/* <i className="far fa-calendar-alt" /> */}
                                16*30
                                </p>
                                {/* <p>
                                <i className="far fa-clock" />
                                9:00 - 10:00
                                </p> */}
                            </div>
                            </div>
                        </div>
                        </div>
                        <div
                        className="col-lg-4 col-md-6 col-sm-12 class-item filter-1 wow fadeInUp"
                        data-wow-delay="0.8s"
                        >
                        <div className="class-wrap">
                            <div className="class-img">
                            <img id="ser4" src="assets/img/event/event4.jpg" alt="Image" />
                            <div class="class-social">
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="class-text">
                            {/* <div className="class-teacher">
                                <img src="assets/img/teacher-5.png" alt="Image" />
                                <h3>Olivia Yates</h3>
                                <a href>+</a>
                            </div> */}
                            <h2>Rs:2000</h2>
                            <div className="class-meta">
                                <p>
                                {/* <i className="far fa-calendar-alt" /> */}
                                12*30
                                </p>
                                {/* <p>
                                <i className="far fa-clock" />
                                9:00 - 10:00
                                </p> */}
                            </div>
                            </div>
                        </div>
                        </div>
                        <div
                        className="col-lg-4 col-md-6 col-sm-12 class-item filter-2 wow fadeInUp"
                        data-wow-delay="1s"
                        >
                        <div className="class-wrap">
                            <div className="class-img">
                            <img id="ser5" src="assets/img/event/event5.png" alt="Image" />
                            <div class="class-social">
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="class-text">
                            {/* <div className="class-teacher">
                                <img src="assets/img/teacher-6.png" alt="Image" />
                                <h3>Millie Harper</h3>
                                <a href>+</a>
                            </div> */}
                            <h2>Rs:3000</h2>
                            <div className="class-meta">
                                <p>
                                {/*<i className="far fa-calendar-alt" />*/}
                                12*40
                                </p>
                                {/* <p>
                                <i className="far fa-clock" />
                                9:00 - 10:00
                                </p> */}
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Class End */}
                {/* Discount Start */}
                <div
                    className="before wow zoomIn"
                    data-wow-delay="0.1s"
                    style={{ marginBottom: 90 }}
                >
                    <div className="containeru">
                    {/* <div className="section-header text-center">
                        <p>Awesome Discount</p>
                        <h2>
                        Get <span>30%</span> Discount for all Classes
                        </h2>
                    </div> */}
                    {/* <div className="container discount-text">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
                        pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam
                        metus tortor, auctor id gravida condimentum, viverra quis sem.
                        Curabitur non nisl nec nisi scelerisque maximus.
                        </p>
                        <a className="btn">Join Now</a>
                    </div> */}
                    </div>
                </div>
                {/* Discount End */}
                <Footer/>
            </div>
        );
    }
}

export default Photoservice;
