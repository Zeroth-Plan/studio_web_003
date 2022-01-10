import React, { Component } from 'react';
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';
import './Services.css'

function before7(){
    document.getElementById('myImage')
    .src="assets/img/fancy/fancy.png";
    document.getElementById('myImage1')
    .src="assets/img/fancy/fancy1.png";
    document.getElementById('myImage2')
    .src="assets/img/fancy/fancy2.png";
    document.getElementById('myImage3')
    .src="assets/img/fancy/fancy3.jpg";
    document.getElementById('myImage4')
    .src="assets/img/fancy/fancy4.jpg";
    document.getElementById('myImage5')
    .src="assets/img/fancy/fancy5.jpg";
    
      
};
function before8(){
    document.getElementById('myImage')
    .src="assets/img/abox/abox.jpg";
    document.getElementById('myImage1')
    .src="assets/img/abox/abox1.jpg";
    document.getElementById('myImage2')
    .src="assets/img/abox/abox2.jpg";
    document.getElementById('myImage3')
    .src="assets/img/abox/abox3.jpg";
    document.getElementById('myImage4')
    .src="assets/img/abox/abox4.jpg";
    document.getElementById('myImage5')
    .src="assets/img/abox/abox5.jpg";
      
};
function before9(){
    document.getElementById('myImage')
    .src="assets/img/abox/abox.jpg";
    document.getElementById('myImage1')
    .src="assets/img/abox/abox1.jpg";
    document.getElementById('myImage2')
    .src="assets/img/abox/abox2.jpg";
    document.getElementById('myImage3')
    .src="assets/img/abox/abox3.jpg";
    document.getElementById('myImage4')
    .src="assets/img/abox/abox4.jpg";
    document.getElementById('myImage5')
    .src="assets/img/abox/abox5.jpg";
      
};
function before10(){
    document.getElementById('myImage')
    .src="assets/img/event/event.jpg";
    document.getElementById('myImage1')
    .src="assets/img/event/event1.jpg";
    document.getElementById('myImage2')
    .src="assets/img/event/event2.jpg";
    document.getElementById('myImage3')
    .src="assets/img/event/event3.jpg";
    document.getElementById('myImage4')
    .src="assets/img/event/event4.jpg";
    document.getElementById('myImage5')
    .src="assets/img/event/event5.png";
      
};
function before11(){
    document.getElementById('myImage')
    .src="assets/img/acrylic/acrylic2.jpg";
    document.getElementById('myImage1')
    .src="assets/img/trophy/trophy4.jpg";
    document.getElementById('myImage2')
    .src="assets/img/fancy/fancy4.jpg";
    document.getElementById('myImage3')
    .src="assets/img/acrylic/acrylic3.jpg";
    document.getElementById('myImage4')
    .src="assets/img/keytags/keytags2.jpg";
    document.getElementById('myImage5')
    .src="assets/img/nb/nb.jpg";
      
};
function before12(){
    document.getElementById('myImage')
    .src="assets/img/abox/abox.jpg";
    document.getElementById('myImage1')
    .src="assets/img/abox/abox1.jpg";
    document.getElementById('myImage2')
    .src="assets/img/abox/abox2.jpg";
    document.getElementById('myImage3')
    .src="assets/img/abox/abox3.jpg";
    document.getElementById('myImage4')
    .src="assets/img/abox/abox4.jpg";
    document.getElementById('myImage5')
    .src="assets/img/abox/abox5.jpg";
      
};
function before13(){
    document.getElementById('myImage')
    .src="assets/img/abox/abox.jpg";
    document.getElementById('myImage1')
    .src="assets/img/abox/abox1.jpg";
    document.getElementById('myImage2')
    .src="assets/img/abox/abox2.jpg";
    document.getElementById('myImage3')
    .src="assets/img/abox/abox3.jpg";
    document.getElementById('myImage4')
    .src="assets/img/abox/abox4.jpg";
    document.getElementById('myImage5')
    .src="assets/img/abox/abox5.jpg";
      
};

class Services extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                {/* Page Header Start */}
                <div className="services-header">
                {/* <img src="assets/img/frame3.jpg" alt="Image" /> */}
                    <div className="containerp">
                    <div className="ro3">
                        <div className="col-12">
                        <h2>Services</h2>
                        </div>
                        <div className="col-12">
                        <a href>Home</a>
                        <a href>Services</a>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Page Header End */}
                        {/* Class Start */}
                        <div className="class">
                            <div className="containera">
                            <div
                                className="section-header text-center wow zoomIn"
                                data-wow-delay="0.1s"
                            >
                                <p>Showing 1003 products</p>
                                {/* <h2>Yoga Class Shedule</h2> */}
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    {/************ */}
                                    <div className="ticb">
                                    <div className="formq-check">
                                        <input
                                        className="formq-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                        onClick={before7}
                                        />
                                        <label className="formq-check-label" htmlFor="flexRadioDefault1">
                                        Frame
                                        </label>
                                    </div>
                                    <div className="formq-check">
                                        <input
                                        className="formq-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault2"
                                        defaultChecked
                                        onClick={before8}
                                        />
                                        <label className="formq-check-label"  htmlFor="flexRadioDefault2">
                                        Photo Editing
                                        </label>
                                    </div>
                                    <div className="formq-check">
                                        <input
                                        className="formq-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                        onClick={before9}
                                        />
                                        <label className="formq-check-label" htmlFor="flexRadioDefault1">
                                        Photo Printing
                                        </label>
                                    </div>
                                    <div className="formq-check">
                                        <input
                                        className="formq-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                        onClick={before10}
                                        />
                                        <label className="formq-check-label" htmlFor="flexRadioDefault1">
                                        Photography Service
                                        </label>
                                    </div>
                                    <div className="formq-check">
                                        <input
                                        className="formq-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                        onClick={before11}
                                        />
                                        <label className="formq-check-label" htmlFor="flexRadioDefault1">
                                        Laser
                                        </label>
                                    </div>
                                    <div className="formq-check">
                                        <input
                                        className="formq-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                        onClick={before12}
                                        />
                                        <label className="formq-check-label" htmlFor="flexRadioDefault1">
                                        Mug
                                        </label>
                                    </div>
                                    <div className="formq-check">
                                        <input
                                        className="formq-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                        onClick={before13}
                                        />
                                        <label className="formq-check-label" htmlFor="flexRadioDefault1">
                                        Flex
                                        </label>
                                    </div>
                                    </div>
                                    {/* <div className="btno">
                                    <button className="btnq" onClick>Frame</button>
                                    
                                    <button className="btnq"onClick={before7}>Photo Editing</button>
                                     <button className="btnq" onClick>Photo Printing</button>
                                     <button className="btnq" onClick>Photography Services</button>
                                     <button className="btnq" onClick>Laser</button>
                                     <button className="btnq" onClick>Mug</button>
                                    <button className="btnq" >Laser</button>
                                     
                                     </div> */}
            
                             </div>
                            </div>
                            <div className="row class-containera">
                                <div
                                className="col-lg-4 col-md-6 col-sm-12 class-item filter-1 wow fadeInUp"
                                data-wow-delay="0.0s"
                                >
                                <div className="class-wrap">
                                
                                    <div className="class-img" >
                                    <img id="myImage" src="assets/img/trophy/trophy1.jpg" alt="Image"/>
                                    <div class="class-social">
                                            <a href="/product"><i class="fab fa-twitter"></i></a>
                                        </div>
                                    </div>
                                    <div className="class-text">
                                    <h2 Id="message">Rs:5000</h2>
                                    <div className="class-meta">
                                        <p>
                                        16*16
                                        </p>
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
                                    <img id="myImage1"src="assets/img/trophy/trophy2.jpg" alt="Image" />
                                    <div  class="class-social">
                                            <a href="/product"><i class="fab fa-twitter"></i></a>
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
                                    <img id="myImage2"src="assets/img/trophy/trophy3.jpg" alt="Image" />
                                    <div class="class-social">
                                            <a href="/product"><i class="fab fa-twitter"></i></a>
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
                                    <img id="myImage3"src="assets/img/trophy/trophy4.jpg" alt="Image" />
                                    <div class="class-social">
                                            <a href="/product"><i class="fab fa-twitter"></i></a>
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
                                    <img id="myImage4"src="assets/img/trophy/trophy5.jpg" alt="Image" />
                                    <div class="class-social">
                                            <a href="/product"><i class="fab fa-twitter"></i></a>
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
                                    <img id="myImage5"src="assets/img/trophy/trophy6.jpg" alt="Image" />
                                    <div class="class-social">
                                            <a href="/product"><i class="fab fa-twitter"></i></a>
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
                    className="be wow zoomIn"
                    data-wow-delay="0.1s"
                    style={{ marginBottom: 90 }}
                >
                    <div className="containerp">
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

export default Services;
