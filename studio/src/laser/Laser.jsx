import React, { Component } from 'react';
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';
import './Laser.css'


// function before(){
//     document.getElementById('myImage')
//     .src="assets/img/abox/abox.jpg";
//     document.getElementById('myImage1')
//     .src="assets/img/abox/abox1.jpg";
//     document.getElementById('myImage2')
//     .src="assets/img/abox/abox2.jpg";
//     document.getElementById('myImage3')
//     .src="assets/img/abox/abox3.jpg";
//     document.getElementById('myImage4')
//     .src="assets/img/abox/abox4.jpg";
//     document.getElementById('myImage5')
//     .src="assets/img/abox/abox5.jpg";
//     document.getElementById('message')
//     .innerHTML="Hii! GeeksforGeeks people";
// };
// function before2(){
//     document.getElementById('myImage')
//     .src="assets/img/wde/wd.jpg";
//     document.getElementById('myImage1')
//     .src="assets/img/wde/wd1.jpg";
//     document.getElementById('myImage2')
//     .src="assets/img/wde/wd2.jpg";
//     document.getElementById('myImage3')
//     .src="assets/img/wde/wd3.jpg";
//     document.getElementById('myImage4')
//     .src="assets/img/wde/wd4.jpg";
//     document.getElementById('myImage5')
//     .src="assets/img/wde/wd5.jpg";
//     document.getElementById('message')
//     .innerHTML="Hii! GeeksforGeeks people";
// };

// function before3(){
//     document.getElementById('myImage')
//     .src="assets/img/keytags/keytags.jpg";
//     document.getElementById('myImage1')
//     .src="assets/img/keytags/keytags1.jpg";
//     document.getElementById('myImage2')
//     .src="assets/img/keytags/keytags2.jpg";
//     document.getElementById('myImage3')
//     .src="assets/img/keytags/keytags3.jpg";
//     document.getElementById('myImage4')
//     .src="assets/img/keytags/keytags4.jpg";
//     document.getElementById('myImage5')
//     .src="assets/img/keytags/keytags5.jpg";
//     document.getElementById('message')
//     .innerHTML="Hii! GeeksforGeeks people";
// };
// function before4(){
//     document.getElementById('myImage')
//     .src="assets/img/astand/astand.jpg";
//     document.getElementById('myImage1')
//     .src="assets/img/astand/astand1.jpg";
//     document.getElementById('myImage2')
//     .src="assets/img/astand/astand2.jpg";
//     document.getElementById('myImage3')
//     .src="assets/img/astand/astand3.jpg";
//     document.getElementById('myImage4')
//     .src="assets/img/astand/astand4.jpg";
//     document.getElementById('myImage5')
//     .src="assets/img/astand/astand5.jpg";
//     document.getElementById('message')
//     .innerHTML="Hii! GeeksforGeeks people";
// };
// function before5(){
//     document.getElementById('myImage')
//     .src="assets/img/nb/nb.jpg";
//     document.getElementById('myImage1')
//     .src="assets/img/nb/nb1.jpg";
//     document.getElementById('myImage2')
//     .src="assets/img/nb/nb2.jpg";
//     document.getElementById('myImage3')
//     .src="assets/img/nb/nb3png.png";
//     document.getElementById('myImage4')
//     .src="assets/img/nb/nb4.jpg";
//     document.getElementById('myImage5')
//     .src="assets/img/nb/nb5.jpg";
//     document.getElementById('message')
//     .innerHTML="Hii! GeeksforGeeks people";
// };
// function before6(){
//     document.getElementById('myImage')
//     .src="assets/img/acrylic/acrylic.jpg";
//     document.getElementById('myImage1')
//     .src="assets/img/acrylic/acrylic1.jpg";
//     document.getElementById('myImage2')
//     .src="assets/img/acrylic/acrylic2.jpg";
//     document.getElementById('myImage3')
//     .src="assets/img/acrylic/acrylic3.jpg";
//     document.getElementById('myImage4')
//     .src="assets/img/acrylic/acrylic4.jpg";
//     document.getElementById('myImage5')
//     .src="assets/img/acrylic/acrylic5.jpg";
//     document.getElementById('message')
//     .innerHTML="Hii! GeeksforGeeks people";
// };
class Laser extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                {/* Page Header Start */}
                <div className="laser-header">
                {/* <img src="" alt="Image" /> */}
                    <div className="containera">
                    <div className="ro2">
                        <div className="col-12">
                        <h2>Laser</h2>
                        </div>
                        <div className="col-12">
                        <a href="/home">Home</a>
                        <a href="/laser">Laser</a>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Page Header End */}
                {/* Class Start */}
                <div id='trophyo' className="class">
                    {/* <div className="containera"> */}
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
                            {/* <li data-filter="*" className="filter-active"> */}
                            {/*************/}
                            {/* <li data-filter="*" onClick>   
                            Trophy
                            </li>
                            <li data-filter=".filter-1" onClick={before6}>Acrylic</li>
                            <li data-filter=".filter-2" onClick={before}>Acrylic boxes</li>
                            <li data-filter=".filter-3" onClick={before2}>Wooden engravings</li>
                            <li data-filter=".filter-4" onClick={before3}>Keytags</li>
                            <li data-filter=".filter-5" onClick={before4}>Acrylic photo stand</li>
                            <li data-filter=".filter-6" onClick={before5}>Name boards</li> */}
                            {/********************/}
                            <li data-filter="*"><a href='#trophyo'>Trophy</a></li>
                            <li data-filter=".filter-1"><a href='#acrylict'>Acrylic</a></li>
                            <li data-filter=".filter-2"><a href='#boxest'>Acrylic boxes</a></li>
                            <li data-filter=".filter-3"><a href='#woodenf'>Wooden engravings</a></li>
                            <li data-filter=".filter-4"><a href='#keyf'>Keytags</a></li>
                            <li data-filter=".filter-5"><a href='#stands'>Acrylic photo stand</a></li>
                            <li data-filter=".filter-6"><a href='#nboards'>Name boards</a></li>
                            {/********************/}
                            <a className="btn" href="/product">
                                Upload a Photo
                                </a>
                        </ul>
                            {/**************/}
                        </div>
                    </div>
                    <div className="row class-containera">
                        <div
                        className="col-lg-4 col-md-6 col-sm-12 class-item filter-1 wow fadeInUp"
                        data-wow-delay="0.0s"
                        >
                        <div className="class-wrap">
                            <div className="class-img" >
                            <img id="myImage" src="assets/img/trophy/trophy1.jpg" alt="Image" />
                            <div class="class-social">
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                            <div class="class-social">
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                {/*************/}
                {/* Class Start */}
                <div id='acrylict' className="class">
                    {/* <div className="containera"> */}
                    <div className="container ct">
                    <div
                        className="section-header text-center wow zoomIn"
                        data-wow-delay="0.1s"
                    >
                        <p>Showing 1003 products</p>
                        {/* <h2>Yoga Class Shedule</h2> */}
                    </div>
                    {/* <div className="row">
                        <div className="col-12"> */}
                            {/* <div className="btno">
                            <button className="btnq" onClick>Trophy</button>
                            
                            <button className="btnq"onClick={before6}>Acrylic</button>
                            <button className="btnq" onClick={before}>Acrylic boxes</button>
                            <button className="btnq" onClick={before1}>Fancy frames</button>
                            <button className="btnq" onClick={before2}>Wooden engravings</button>
                            <button className="btnq" onClick={before3}>Keytags</button>
                            <button className="btnq" onClick={before4}>Acrylic photo stand</button>
                            <button className="btnq"onClick={before5}>Name boards</button>
                            </div> */}
                            {/**************/}
                            {/* <ul id="class-filter"> */}
                            {/* <li data-filter="*" className="filter-active"> */}
                            {/* <li data-filter="*" onClick>   
                            Trophy
                            </li>
                            <li data-filter=".filter-1" onClick={before6}>Acrylic</li>
                            <li data-filter=".filter-2" onClick={before}>Acrylic boxes</li>
                            {/* <li data-filter=".filter-3" onClick={before1}>Fancy frames</li> */}
                            {/* <li data-filter=".filter-3" onClick={before2}>Wooden engravings</li>
                            <li data-filter=".filter-4" onClick={before3}>Keytags</li>
                            <li data-filter=".filter-5" onClick={before4}>Acrylic photo stand</li>
                            <li data-filter=".filter-6" onClick={before5}>Name boards</li>
                            <a className="btn" href="/product">
                                Upload a Photo
                                </a>  */}
                        {/* </ul> */}
                            {/**************/}
                        {/* </div>
                    </div> */}
                    <div className="row class-containera">
                        <div
                        className="col-lg-4 col-md-6 col-sm-12 class-item filter-1 wow fadeInUp"
                        data-wow-delay="0.0s"
                        >
                        <div className="class-wrap">
                            <div className="class-img" >
                            <img id="myImage" src="assets/img/trophy/trophy1.jpg" alt="Image" />
                            <div class="class-social">
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                            <div class="class-social">
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                {/*************/}
                {/*************/}
                {/* Class Start */}
                <div id='boxest' className="class">
                    {/* <div className="containera"> */}
                    <div className="container ct">
                    <div
                        className="section-header text-center wow zoomIn"
                        data-wow-delay="0.1s"
                    >
                        <p>Showing 1003 products</p>
                        {/* <h2>Yoga Class Shedule</h2> */}
                    </div>
                    {/* <div className="row">
                        <div className="col-12"> */}
                            {/* <div className="btno">
                            <button className="btnq" onClick>Trophy</button>
                            
                            <button className="btnq"onClick={before6}>Acrylic</button>
                            <button className="btnq" onClick={before}>Acrylic boxes</button>
                            <button className="btnq" onClick={before1}>Fancy frames</button>
                            <button className="btnq" onClick={before2}>Wooden engravings</button>
                            <button className="btnq" onClick={before3}>Keytags</button>
                            <button className="btnq" onClick={before4}>Acrylic photo stand</button>
                            <button className="btnq"onClick={before5}>Name boards</button>
                            </div> */}
                            {/**************/}
                            {/* <ul id="class-filter"> */}
                            {/* <li data-filter="*" className="filter-active"> */}
                            {/* <li data-filter="*" onClick>   
                            Trophy
                            </li>
                            <li data-filter=".filter-1" onClick={before6}>Acrylic</li>
                            <li data-filter=".filter-2" onClick={before}>Acrylic boxes</li>
                            {/* <li data-filter=".filter-3" onClick={before1}>Fancy frames</li> */}
                            {/* <li data-filter=".filter-3" onClick={before2}>Wooden engravings</li>
                            <li data-filter=".filter-4" onClick={before3}>Keytags</li>
                            <li data-filter=".filter-5" onClick={before4}>Acrylic photo stand</li>
                            <li data-filter=".filter-6" onClick={before5}>Name boards</li>
                            <a className="btn" href="/product">
                                Upload a Photo
                                </a>  */}
                        {/* </ul> */}
                            {/**************/}
                        {/* </div>
                    </div> */}
                    <div className="row class-containera">
                        <div
                        className="col-lg-4 col-md-6 col-sm-12 class-item filter-1 wow fadeInUp"
                        data-wow-delay="0.0s"
                        >
                        <div className="class-wrap">
                            <div className="class-img" >
                            <img id="myImage" src="assets/img/trophy/trophy1.jpg" alt="Image" />
                            <div class="class-social">
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                            <div class="class-social">
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                {/*************/}
                {/*************/}
                {/* Class Start */}
                <div id='woodenf' className="class">
                    {/* <div className="containera"> */}
                    <div className="container ct">
                    <div
                        className="section-header text-center wow zoomIn"
                        data-wow-delay="0.1s"
                    >
                        <p>Showing 1003 products</p>
                        {/* <h2>Yoga Class Shedule</h2> */}
                    </div>
                    {/* <div className="row">
                        <div className="col-12"> */}
                            {/* <div className="btno">
                            <button className="btnq" onClick>Trophy</button>
                            
                            <button className="btnq"onClick={before6}>Acrylic</button>
                            <button className="btnq" onClick={before}>Acrylic boxes</button>
                            <button className="btnq" onClick={before1}>Fancy frames</button>
                            <button className="btnq" onClick={before2}>Wooden engravings</button>
                            <button className="btnq" onClick={before3}>Keytags</button>
                            <button className="btnq" onClick={before4}>Acrylic photo stand</button>
                            <button className="btnq"onClick={before5}>Name boards</button>
                            </div> */}
                            {/**************/}
                            {/* <ul id="class-filter"> */}
                            {/* <li data-filter="*" className="filter-active"> */}
                            {/* <li data-filter="*" onClick>   
                            Trophy
                            </li>
                            <li data-filter=".filter-1" onClick={before6}>Acrylic</li>
                            <li data-filter=".filter-2" onClick={before}>Acrylic boxes</li>
                            {/* <li data-filter=".filter-3" onClick={before1}>Fancy frames</li> */}
                            {/* <li data-filter=".filter-3" onClick={before2}>Wooden engravings</li>
                            <li data-filter=".filter-4" onClick={before3}>Keytags</li>
                            <li data-filter=".filter-5" onClick={before4}>Acrylic photo stand</li>
                            <li data-filter=".filter-6" onClick={before5}>Name boards</li>
                            <a className="btn" href="/product">
                                Upload a Photo
                                </a>  */}
                        {/* </ul> */}
                            {/**************/}
                        {/* </div>
                    </div> */}
                    <div className="row class-containera">
                        <div
                        className="col-lg-4 col-md-6 col-sm-12 class-item filter-1 wow fadeInUp"
                        data-wow-delay="0.0s"
                        >
                        <div className="class-wrap">
                            <div className="class-img" >
                            <img id="myImage" src="assets/img/trophy/trophy1.jpg" alt="Image" />
                            <div class="class-social">
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                            <div class="class-social">
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                {/*************/}
                {/*************/}
                {/* Class Start */}
                <div id='keyf' className="class">
                    {/* <div className="containera"> */}
                    <div className="container ct">
                    <div
                        className="section-header text-center wow zoomIn"
                        data-wow-delay="0.1s"
                    >
                        <p>Showing 1003 products</p>
                        {/* <h2>Yoga Class Shedule</h2> */}
                    </div>
                    {/* <div className="row">
                        <div className="col-12"> */}
                            {/* <div className="btno">
                            <button className="btnq" onClick>Trophy</button>
                            
                            <button className="btnq"onClick={before6}>Acrylic</button>
                            <button className="btnq" onClick={before}>Acrylic boxes</button>
                            <button className="btnq" onClick={before1}>Fancy frames</button>
                            <button className="btnq" onClick={before2}>Wooden engravings</button>
                            <button className="btnq" onClick={before3}>Keytags</button>
                            <button className="btnq" onClick={before4}>Acrylic photo stand</button>
                            <button className="btnq"onClick={before5}>Name boards</button>
                            </div> */}
                            {/**************/}
                            {/* <ul id="class-filter"> */}
                            {/* <li data-filter="*" className="filter-active"> */}
                            {/* <li data-filter="*" onClick>   
                            Trophy
                            </li>
                            <li data-filter=".filter-1" onClick={before6}>Acrylic</li>
                            <li data-filter=".filter-2" onClick={before}>Acrylic boxes</li>
                            {/* <li data-filter=".filter-3" onClick={before1}>Fancy frames</li> */}
                            {/* <li data-filter=".filter-3" onClick={before2}>Wooden engravings</li>
                            <li data-filter=".filter-4" onClick={before3}>Keytags</li>
                            <li data-filter=".filter-5" onClick={before4}>Acrylic photo stand</li>
                            <li data-filter=".filter-6" onClick={before5}>Name boards</li>
                            <a className="btn" href="/product">
                                Upload a Photo
                                </a>  */}
                        {/* </ul> */}
                            {/**************/}
                        {/* </div>
                    </div> */}
                    <div className="row class-containera">
                        <div
                        className="col-lg-4 col-md-6 col-sm-12 class-item filter-1 wow fadeInUp"
                        data-wow-delay="0.0s"
                        >
                        <div className="class-wrap">
                            <div className="class-img" >
                            <img id="myImage" src="assets/img/trophy/trophy1.jpg" alt="Image" />
                            <div class="class-social">
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                            <div class="class-social">
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                {/*************/}
                {/*************/}
                {/* Class Start */}
                <div id='stands' className="class">
                    {/* <div className="containera"> */}
                    <div className="container ct">
                    <div
                        className="section-header text-center wow zoomIn"
                        data-wow-delay="0.1s"
                    >
                        <p>Showing 1003 products</p>
                        {/* <h2>Yoga Class Shedule</h2> */}
                    </div>
                    {/* <div className="row">
                        <div className="col-12"> */}
                            {/* <div className="btno">
                            <button className="btnq" onClick>Trophy</button>
                            
                            <button className="btnq"onClick={before6}>Acrylic</button>
                            <button className="btnq" onClick={before}>Acrylic boxes</button>
                            <button className="btnq" onClick={before1}>Fancy frames</button>
                            <button className="btnq" onClick={before2}>Wooden engravings</button>
                            <button className="btnq" onClick={before3}>Keytags</button>
                            <button className="btnq" onClick={before4}>Acrylic photo stand</button>
                            <button className="btnq"onClick={before5}>Name boards</button>
                            </div> */}
                            {/**************/}
                            {/* <ul id="class-filter"> */}
                            {/* <li data-filter="*" className="filter-active"> */}
                            {/* <li data-filter="*" onClick>   
                            Trophy
                            </li>
                            <li data-filter=".filter-1" onClick={before6}>Acrylic</li>
                            <li data-filter=".filter-2" onClick={before}>Acrylic boxes</li>
                            {/* <li data-filter=".filter-3" onClick={before1}>Fancy frames</li> */}
                            {/* <li data-filter=".filter-3" onClick={before2}>Wooden engravings</li>
                            <li data-filter=".filter-4" onClick={before3}>Keytags</li>
                            <li data-filter=".filter-5" onClick={before4}>Acrylic photo stand</li>
                            <li data-filter=".filter-6" onClick={before5}>Name boards</li>
                            <a className="btn" href="/product">
                                Upload a Photo
                                </a>  */}
                        {/* </ul> */}
                            {/**************/}
                        {/* </div>
                    </div> */}
                    <div className="row class-containera">
                        <div
                        className="col-lg-4 col-md-6 col-sm-12 class-item filter-1 wow fadeInUp"
                        data-wow-delay="0.0s"
                        >
                        <div className="class-wrap">
                            <div className="class-img" >
                            <img id="myImage" src="assets/img/trophy/trophy1.jpg" alt="Image" />
                            <div class="class-social">
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                            <div class="class-social">
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                {/*************/}
                {/*************/}
                {/* Class Start */}
                <div id='nboards' className="class">
                    {/* <div className="containera"> */}
                    <div className="container ct">
                    <div
                        className="section-header text-center wow zoomIn"
                        data-wow-delay="0.1s"
                    >
                        <p>Showing 1003 products</p>
                        {/* <h2>Yoga Class Shedule</h2> */}
                    </div>
                    {/* <div className="row">
                        <div className="col-12"> */}
                            {/* <div className="btno">
                            <button className="btnq" onClick>Trophy</button>
                            
                            <button className="btnq"onClick={before6}>Acrylic</button>
                            <button className="btnq" onClick={before}>Acrylic boxes</button>
                            <button className="btnq" onClick={before1}>Fancy frames</button>
                            <button className="btnq" onClick={before2}>Wooden engravings</button>
                            <button className="btnq" onClick={before3}>Keytags</button>
                            <button className="btnq" onClick={before4}>Acrylic photo stand</button>
                            <button className="btnq"onClick={before5}>Name boards</button>
                            </div> */}
                            {/**************/}
                            {/* <ul id="class-filter"> */}
                            {/* <li data-filter="*" className="filter-active"> */}
                            {/* <li data-filter="*" onClick>   
                            Trophy
                            </li>
                            <li data-filter=".filter-1" onClick={before6}>Acrylic</li>
                            <li data-filter=".filter-2" onClick={before}>Acrylic boxes</li>
                            {/* <li data-filter=".filter-3" onClick={before1}>Fancy frames</li> */}
                            {/* <li data-filter=".filter-3" onClick={before2}>Wooden engravings</li>
                            <li data-filter=".filter-4" onClick={before3}>Keytags</li>
                            <li data-filter=".filter-5" onClick={before4}>Acrylic photo stand</li>
                            <li data-filter=".filter-6" onClick={before5}>Name boards</li>
                            <a className="btn" href="/product">
                                Upload a Photo
                                </a>  */}
                        {/* </ul> */}
                            {/**************/}
                        {/* </div>
                    </div> */}
                    <div className="row class-containera">
                        <div
                        className="col-lg-4 col-md-6 col-sm-12 class-item filter-1 wow fadeInUp"
                        data-wow-delay="0.0s"
                        >
                        <div className="class-wrap">
                            <div className="class-img" >
                            <img id="myImage" src="assets/img/trophy/trophy1.jpg" alt="Image" />
                            <div class="class-social">
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                            <div class="class-social">
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                                    {/* <a href="/product"><i class="fab fa-twitter"></i></a> */}
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fas fa-ellipsis-h"></i></a>
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
                {/*************/}
                {/* Discount Start */}
                <div
                    className="bef wow zoomIn"
                    data-wow-delay="0.1s"
                    style={{ marginBottom: 90 }}
                >
                    <div className="containera">
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

export default Laser;
