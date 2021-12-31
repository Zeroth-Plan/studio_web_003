import React, { Component } from 'react';
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';
import './Product.css'
class Product extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                
                {/* Page Header Start */}
                <div className="pag-header">
                    <div className="containerq">
                    <div className="ro5">
                        {/* <div className="col-12">
                        <h2>Frames</h2>
                        </div>
                        <div className="col-12">
                        <p>Revamp your style with the latest designer trends in men’s clothing or 
                        achieve a perfectly curated wardrobe thanks to our line-up of timeless pieces.</p>
                        </div> */}
                    </div>
                    </div>
                </div>
                {/* Page Header End */}
                {/* Team Start */}
                {/* <div className="team">
                    <div className="container"> 
                     <div
                        className="section-header text-center wow zoomIn"
                        data-wow-delay="0.1s"
                    >
                        <p>Yoga Trainer</p>
                        <h2>Expert Yoga Trainer</h2>
                    </div> 
                    <div className="row">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.0s">
                        <div className="team-item">
                            <div className="team-img">
                            <img src="assets/img/q.jpg" alt="Image" />
                            <div className="team-social">
                                <a href>
                                <i className="fab fa-twitter" />
                                </a>
                                <a href>
                                <i className="fab fa-facebook-f" />
                                </a>
                                <a href>
                                <i className="fab fa-linkedin-in" />
                                </a>
                                <a href>
                                <i className="fab fa-instagram" />
                                </a>
                            </div>
                            </div>
                            <div className="team-text">
                            <h2>Millie Harper</h2>
                            <p>Yoga Teacher</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="team-item">
                            <div className="team-img">
                            <img src="assets/img/w.jpg" alt="Image" />
                            <div className="team-social">
                                <a href>
                                <i className="fab fa-twitter" />
                                </a>
                                <a href>
                                <i className="fab fa-facebook-f" />
                                </a>
                                <a href>
                                <i className="fab fa-linkedin-in" />
                                </a>
                                <a href>
                                <i className="fab fa-instagram" />
                                </a>
                            </div>
                            </div>
                            <div className="team-text">
                            <h2>Lilly Fry</h2>
                            <p>Yoga Teacher</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="team-item">
                            <div className="team-img">
                            <img src="assets/img/r.jpg" alt="Image" />
                            <div className="team-social">
                                <a href>
                                <i className="fab fa-twitter" />
                                </a>
                                <a href>
                                <i className="fab fa-facebook-f" />
                                </a>
                                <a href>
                                <i className="fab fa-linkedin-in" />
                                </a>
                                <a href>
                                <i className="fab fa-instagram" />
                                </a>
                            </div>
                            </div>
                            <div className="team-text">
                            <h2>Elise Moran</h2>
                            <p>Yoga Teacher</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="team-item">
                            <div className="team-img">
                            <img src="assets/img/t.jpg" alt="Image" />
                            <div className="team-social">
                                <a href>
                                <i className="fab fa-twitter" />
                                </a>
                                <a href>
                                <i className="fab fa-facebook-f" />
                                </a>
                                <a href>
                                <i className="fab fa-linkedin-in" />
                                </a>
                                <a href>
                                <i className="fab fa-instagram" />
                                </a>
                            </div>
                            </div>
                            <div className="team-text">
                            <h2>Kate Glover</h2>
                            <p>Yoga Teacher</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div> */}
                {/* Team End */}
                            {/* <div className="container py-5"> */}
            {/* For demo purpose */}
            {/* <header className="text-white text-center">
                <h1 className="display-4">Bootstrap image upload</h1>
                <p className="lead mb-0">
                Build a simple image upload button using Bootstrap 4.
                </p>
                <p className="mb-5 font-weight-light">
                Snippet by
                <a href="https://bootstrapious.com" className="text-white">
                    <u>Bootstrapious</u>
                </a>
                </p>
                <img
                src="https://bootstrapious.com/i/snippets/sn-img-upload/image.svg"
                alt
                width={150}
                className="mb-4"
                />
            </header> */}
             {/* <div className="row py-4">
                <div className="col-lg-6 mx-auto"> */}
                {/* Upload image input*/}
                {/* <div className="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
                    <input
                    id="upload"
                    type="file"
                    onchange="readURL(this);"
                    className="form-control border-0"
                    />
                    <label
                    id="upload-label"
                    htmlFor="upload"
                    className="font-weight-light text-muted"
                    >
                    Choose file
                    </label>
                    <div className="input-group-append">
                    <label
                        htmlFor="upload"
                        className="btn btn-light m-0 rounded-pill px-4"
                    >
                        {" "}
                        <i className="fa fa-cloud-upload mr-2 text-muted" />
                        <small className="text-uppercase font-weight-bold text-muted">
                        Choose file
                        </small>
                    </label>
                    </div>
                </div>  */}
                {/* Uploaded image area*/}
                {/* <div className="imagebox">
                    <div className="box1"></div>
                    <div className="box2"></div>
                    <div className="box3"></div>
                    <div className="box4"></div>
                </div> */}
                {/* <p className="font-italic text-white text-center">
                    The image uploaded will be rendered inside the box below.
                </p>
                <div className="image-area mt-4">
                    <img
                    id="imageResult"
                    src="#"
                    alt
                    className="img-fluid rounded shadow-sm mx-auto d-block"
                    />
                </div> */}
                {/* </div>
            </div>
            </div> */}
                {/*********
                 * ********
                 */}
                 {/********
        *********** */ }
        <div className="main"> 
            {/* For demo purpose */}
            <div className="imagebox">
                    <div className="box1"></div>
                    <div className="box2"></div>
                    <div className="box3"></div>
                    <div className="box4"></div>
            </div>
                
             <div className="gnna">
             <div className="containerq">
                    <div className="row">
                        <div className="col-12">
                        <h2>Frames</h2>
                        </div>
                        <div className="col-12">
                        <p>Revamp your style with the latest designer trends in men’s clothing or 
                        achieve a perfectly curated wardrobe thanks to our line-up of timeless pieces.</p>
                        </div>
                    </div>
                    </div>
                  {/************* */}
                  <div className="droupSelec">
                    <select class="form-control">
                        <option>Default select</option>
                        <option>Default </option>
                        <option>Default select1</option>
                    </select>
                 </div>
                 {/************** */}
                 {/***************** */}
                 <div className="custom-file">
                        <input type="file" className="custom-file-input" id="customFile" />
                        <label className="custom-file-label" htmlFor="customFile">
                        Choose file
                        </label>
                 </div>
                {/******* */}
                 <form>
                    <div className="form-row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="First name" />
                        </div>
                    {/* <div className="col">
                            <input type="text" className="form-control" placeholder="Last name" />
                        </div> */}
                    </div>
                </form>
                {/***************/}
                <button type="button" class="btn cart">Add to cart</button>
                
            </div> 
            {/* Uploaded image area*/}
        </div>
                 {/* Discount Start */}
                <div
                    className="disc wow zoomIn"
                    data-wow-delay="0.1s"
                    style={{ marginBottom: 90 }}
                >
                    <div className="containerq">
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
                {/* <div className="foot wow fadeIn" data-wow-delay="0.3s">
                    <div className="container-fluid">
                    <div className="container">
                        <div className="foot-info">
                        <a href="index.html" className="foot-logo">
                            Mi<span>la</span>ns
                        </a> */}
                        {/* <h3>123 Street, New York, USA</h3> */}
                        {/* <div className="footer-menu">
                            <p>+012 345 67890</p>
                            <p>info@example.com</p>
                        </div> */}
                        {/* <div className="foot-social">
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
            </div>
        )
    }
}

export default Product;
