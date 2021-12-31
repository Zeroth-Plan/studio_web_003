import React, { Component } from 'react';
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';
import './Frame.css'


function frameb(){
    document.getElementById('Im')
    .src="assets/img/f.jpg" ;
    document.getElementById('Im1')
    .src="assets/img/a.jpg" ;
    document.getElementById('Im2')
    .src="assets/img/b.jpg";
    document.getElementById('Im3')
    .src="assets/img/c.jpg";
    document.getElementById('Im4')
    .src="assets/img/d.jpg";
    document.getElementById('Im5')
    .src="assets/img/e.jpg";
    
};
function frameb1(){
    document.getElementById('Im')
    .src="assets/img/acrylic/acrylic.jpg";
    document.getElementById('Im1')
    .src="assets/img/acrylic/acrylic1.jpg";
    document.getElementById('Im2')
    .src="assets/img/acrylic/acrylic2.jpg";
    document.getElementById('Im3')
    .src="assets/img/acrylic/acrylic3.jpg";
    document.getElementById('Im4')
    .src="assets/img/acrylic/acrylic4.jpg";
    document.getElementById('Im5')
    .src="assets/img/acrylic/acrylic5.jpg";
    
    
};
function frameb2(){
    document.getElementById('Im')
    .src="assets/img/keytags/keytags.jpg";
    document.getElementById('Im1')
    .src="assets/img/keytags/keytags1.jpg";
    document.getElementById('Im2')
    .src="assets/img/keytags/keytags2.jpg";
    document.getElementById('Im3')
    .src="assets/img/keytags/keytags3.jpg";
    document.getElementById('Im4')
    .src="assets/img/keytags/keytags4.jpg";
    document.getElementById('Im5')
    .src="assets/img/keytags/keytags5.jpg";
    
};
function frameb3(){
    document.getElementById('Im')
    .src="assets/img/abox/abox.jpg";
    document.getElementById('Im1')
    .src="assets/img/abox/abox1.jpg";
    document.getElementById('Im2')
    .src="assets/img/abox/abox2.jpg";
    document.getElementById('Im3')
    .src="assets/img/abox/abox3.jpg";
    document.getElementById('Im4')
    .src="assets/img/abox/abox4.jpg";
    document.getElementById('Im5')
    .src="assets/img/abox/abox5.jpg";
    
};
function frameb4(){
    document.getElementById('Im')
    .src="assets/img/event/event.jpg";
    document.getElementById('Im1')
    .src="assets/img/event/event1.jpg";
    document.getElementById('Im2')
    .src="assets/img/event/event2.jpg";
    document.getElementById('Im3')
    .src="assets/img/event/event3.jpg";
    document.getElementById('Im4')
    .src="assets/img/event/event4.jpg";
    document.getElementById('Im5')
    .src="assets/img/event/event5.png";
    
};
class Frame extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                {/* Nav Bar Start */}
                {/* <div className="navbar navbar-expand-lg bg-dark navbar-dark">
                    <div className="container-fluid">
                    <a href="index.html" className="navbar-brand">
                        Mi<span>la</span>ns
                    </a>
                    <button
                        type="button"
                        className="navbar-toggler"
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-between"
                        id="navbarCollapse"
                    >
                        <div className="navbar-nav ml-auto">
                        <a href="#" className="nav-item nav-link">
                            Home
                        </a>
                        <a href="#" className="nav-item nav-link">
                            Shop
                        </a>
                        <a href="#" className="nav-item nav-link">
                            Products
                        </a>
                        <a href="#" className="nav-item nav-link">
                            About
                        </a>
                        <a href="#" className="nav-item nav-link active">
                            Login
                        </a>
                        </div>
                    </div>
                    </div>
                </div> */}
                {/* Nav Bar End */}
                {/* Page Header Start */}
                <div className="page-header">
                {/* <img src="assets/img/frame3.jpg" alt="Image" /> */}
                    <div className="containery">
                    <div className="rowi">
                        <div className="col-12">
                        <h2>Frames</h2>
                        </div>
                        <div className="col-12">
                        <a href>Home</a>
                        <a href>Frames</a>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Page Header End */}
                {/* Class Start */}
                <div className="class">
                    <div className="containery">
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
                            <li data-filter="*" onClick={frameb}>   
                            Mount
                            </li>
                            <li data-filter=".filter-1" onClick={frameb1}>Frame Types</li>
                            <li data-filter=".filter-2" onClick={frameb2}>Albums</li>
                            <li data-filter=".filter-3" onClick={frameb3}>Fancy frames</li>
                            <li data-filter=".filter-4" onClick={frameb4}> Laminating Types</li>
                        </ul>
                        </div>
                    </div>
                    <div className="row class-containery">
                        <div
                        className="col-lg-4 col-md-6 col-sm-12 class-item filter-1 wow fadeInUp"
                        data-wow-delay="0.0s"
                        >
                        <div className="class-wrap">
                            <div className="class-img">
                            <img id="Im" src="assets/img/f.jpg" alt="Image" />
                            <div class="class-social">
                                    <a href="/product"><i class="fas fa-chevron-circle-right"></i></a>
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
                            <img id="Im1" src="assets/img/a.jpg" alt="Image" />
                            <div class="class-social">
                                    <a href="/product"><i class="fas fa-chevron-circle-right"></i></a>
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
                            <img id="Im2" src="assets/img/b.jpg" alt="Image" />
                            <div class="class-social">
                                    <a href="/product"><i class="fas fa-chevron-circle-right"></i></a>
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
                            <img id="Im3" src="assets/img/c.jpg" alt="Image" />
                            <div class="class-social">
                                    <a href="/product"><i class="fas fa-chevron-circle-right"></i></a>
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
                            <img id="Im4" src="assets/img/d.jpg" alt="Image" />
                            <div class="class-social">
                                    <a href="/product"><i class="fas fa-chevron-circle-right"></i></a>
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
                            <img id="Im5" src="assets/img/e.jpg" alt="Image" />
                            <div class="class-social">
                                    <a href="/product"><i class="fas fa-chevron-circle-right"></i></a>
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
                    className="discount wow zoomIn"
                    data-wow-delay="0.1s"
                    style={{ marginBottom: 90 }}
                >
                    <div className="containery">
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
                                {/* Footer Start */}
                                <Footer/>
                {/* <div className="footer wow fadeIn" data-wow-delay="0.3s">
                    <div className="container-fluid">
                    <div className="container">
                        <div className="footer-info">
                        <a href="index.html" className="footer-logo">
                            Mi<span>la</span>ns
                        </a> */}
                        {/* <h3>123 Street, New York, USA</h3> */}
                        {/* <div className="footer-menu">
                            <p>+012 345 67890</p>
                            <p>info@example.com</p>
                        </div> */}
                        {/* <div className="footer-social">
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
                    <div className="container copyright">
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
                </div> */}
                {/* Footer End */}
                
                {/* <a href="#" className="back-to-top">
                    <i className="fa fa-chevron-up" />
                </a> */}
            
            </div>
        );
    }
}

export default Frame;
