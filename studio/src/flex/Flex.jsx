import React, { Component } from 'react';
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';
import './Flex.css'

function fl1(){
    document.getElementById('f1')
    .src="assets/img/flex/flex.jpg" ;
    document.getElementById('f2')
    .src="assets/img/flex/flex1.jpg";
    document.getElementById('f3')
    .src="assets/img/flex/flex2.jpg";
    document.getElementById('f4')
    .src="assets/img/flex/flex3.jpg";
    document.getElementById('f5')
    .src="assets/img/flex/flex4.jpg";
    document.getElementById('f6')
    .src="assets/img/flex/flex5.jpg";
    
};
function fl2(){
    document.getElementById('f1')
    .src="assets/img/abox/abox.jpg";
    document.getElementById('f2')
    .src="assets/img/abox/abox1.jpg";
    document.getElementById('f3')
    .src="assets/img/abox/abox2.jpg";
    document.getElementById('f4')
    .src="assets/img/abox/abox3.jpg";
    document.getElementById('f5')
    .src="assets/img/abox/abox4.jpg";
    document.getElementById('f6')
    .src="assets/img/abox/abox5.jpg";
    
};
function fl3(){
    document.getElementById('f1')
    .src="assets/img/acrylic/acrylic.jpg";
    document.getElementById('f2')
    .src="assets/img/acrylic/acrylic1.jpg";
    document.getElementById('f3')
    .src="assets/img/acrylic/acrylic2.jpg";
    document.getElementById('f4')
    .src="assets/img/acrylic/acrylic3.jpg";
    document.getElementById('f5')
    .src="assets/img/acrylic/acrylic4.jpg";
    document.getElementById('f6')
    .src="assets/img/acrylic/acrylic5.jpg";
    
    
};
function fl4(){
    document.getElementById('f1')
    .src="assets/img/keytags/keytags.jpg";
    document.getElementById('f2')
    .src="assets/img/keytags/keytags1.jpg";
    document.getElementById('f3')
    .src="assets/img/keytags/keytags2.jpg";
    document.getElementById('f4')
    .src="assets/img/keytags/keytags3.jpg";
    document.getElementById('f5')
    .src="assets/img/keytags/keytags4.jpg";
    document.getElementById('f6')
    .src="assets/img/keytags/keytags5.jpg";
    
};

function fl5(){
    document.getElementById('f1')
    .src="assets/img/f.jpg" ;
    document.getElementById('f2')
    .src="assets/img/a.jpg" ;
    document.getElementById('f3')
    .src="assets/img/b.jpg";
    document.getElementById('f4')
    .src="assets/img/c.jpg";
    document.getElementById('f5')
    .src="assets/img/d.jpg";
    document.getElementById('f6')
    .src="assets/img/e.jpg";
    
};
class Flex extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                {/* Page Header Start */}
                <div className="flex-header">
                {/* <img src="assets/img/frame3.jpg" alt="Image" /> */}
                    <div className="containeri">
                    <div className="ro1">
                        <div className="col-12">
                        <h2>Flex,Banners and Stickers</h2>
                        </div>
                        <div className="col-12">
                        <a href="/home">Home</a>
                        <a href="/flex">Flex,Banners and Stickers</a>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Page Header End */}
                {/* Class Start */}
                <div className="class">
                    {/* <div className="containeri"> */}
                    <div className="container ct">
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
                            {/* <li data-filter="*" className="filter-active">
                            Flex printing
                            </li> */}
                            <li data-filter="*" onClick={fl1}>
                            Flex printing
                            </li>
                            <li data-filter=".filter-1"onClick={fl2}>Photo enlargement</li>
                            <li data-filter=".filter-2"onClick={fl3}>Sticker printing</li>
                            <li data-filter=".filter-2"onClick={fl4}>Fabric printing</li>
                            <li data-filter=".filter-2"onClick={fl5}>PV paper printing</li>
                            <a className="btn" href="/flexup">
                                Upload a Photo
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
                            <img id="f1" src="assets/img/flex/flex.jpg" alt="Image" />
                            <div class="class-social">
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
                            <img id="f2" src="assets/img/flex/flex1.jpg" alt="Image" />
                            <div class="class-social">
                                    <a href="/product"><i class="fab fa-twitter"></i></a>
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
                            <img id="f3" src="assets/img/flex/flex2.jpg" alt="Image" />
                            <div class="class-social">
                                    <a href="/product"><i class="fab fa-twitter"></i></a>
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
                            <img id="f4" src="assets/img/flex/flex3.jpg" alt="Image" />
                            <div class="class-social">
                                    <a href="/product"><i class="fab fa-twitter"></i></a>
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
                            <img id="f5" src="assets/img/flex/flex4.jpg" alt="Image" />
                            <div class="class-social">
                                    <a href="/product"><i class="fab fa-twitter"></i></a>
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
                            <img id="f6" src="assets/img/flex/flex5.jpg" alt="Image" />
                            <div class="class-social">
                                    <a href="/product"><i class="fab fa-twitter"></i></a>
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
                    className="befo wow zoomIn"
                    data-wow-delay="0.1s"
                    style={{ marginBottom: 90 }}
                >
                    <div className="containeri">
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

export default Flex;
