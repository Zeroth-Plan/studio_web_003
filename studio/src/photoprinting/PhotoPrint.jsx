import React, { Component } from 'react';
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';
import './PhotoPrint.css'

class Photoprint extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                {/* Page Header Start */}
                <div className="print-header">
                    <div className="containero">
                    <div className="ro4">
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
                {/************ */}
                        <div className="print"> 
                    {/* For demo purpose */}
                    <div className="imageboxe">
                            <div className="box5"></div>
                            <div className="box6"></div>
                            <div className="box7"></div>
                            <div className="box8"></div>
                    </div>
                        
                    <div className="printo">
                    <div className="containero">
                            <div className="row">
                                <div className="col-12">
                                <h2>Print your photos</h2>
                                </div>
                                <div className="col-12">
                                {/* <p>Revamp your style with the latest designer trends in men’s clothing or 
                                achieve a perfectly curated wardrobe thanks to our line-up of timeless pieces.</p> */}
                                <p> Upload your photos and get them printed right to your doorstep.</p>
                                </div>
                            </div>
                            </div>
                        {/************* */}
                        {/* <div className="droupSelec">
                            <select class="form-control">
                                <option>Default select</option>
                                <option>Default </option>
                                <option>Default select1</option>
                            </select>
                        </div> */}
                        {/************** */}
                        <div className="col-12 one">
                        <p>Colour</p>
                        </div>
                        <div className="picker">
                            <span className="dot1" />
                            <span className="dot2" />
                            <span className="dot3" />
                            <span className="dot4" />
                            <span className="dot5" />
                        </div>
                        {/***************** */}
                        <div className="col-12 two">
                        <p>Size</p>
                        </div>
                        <div className="spicker">
                            <div className="s1">XS</div>
                            <div className="s2">S</div>
                            <div className="s3">M</div>
                            <div className="s4">L</div>
                            <div className="s5">XL</div>
                            <div className="s6">XXl</div>
                            <div className="s7">3XL</div>
                        </div>
                        {/****************** */}
                        <div className="col-12 cbox">
                        <p>Upload good quality, clear, sharp images. Please avoid uploading low quality photos 
                           downloaded from social media (Facebook, WhatsApp) for a better print. </p>
                        <div className="custom-file cf">
                                <input type="file" className="custom-file-input" id="customFile" />
                                <label className="custom-file-label" htmlFor="customFile">
                                Choose file
                                </label>
                        </div>
                        </div>
                        {/******* */}
                        <div className="col-12 two tickOption">
                        <p>Choose a laminating type</p>
                        <div className="form-check">
                            <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Normal Laminating
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            defaultChecked
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Matte Laminating
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault3"
                            defaultChecked
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Glitter Laminating
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault4"
                            defaultChecked
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Semi Glitter Laminating
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault5"
                            defaultChecked
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Velvet Laminating
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault6"
                            defaultChecked
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Glitter Curve Laminating
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault7"
                            defaultChecked
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Gloss Laminating
                            </label>
                        </div>
                        </div>
                        {/******* */}
                        {/* <form>
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="First name" />
                                </div>
                            <div className="col">
                                    <input type="text" className="form-control" placeholder="Last name" />
                                </div>
                            </div>
                        </form> */}
                        {/***************/}
                        <button type="button" class="btn cart">Add to cart</button>
                        
                    </div> 
                </div>
                {/************** */}
                 {/* Discount Start */}
                 <div
                    className="b wow zoomIn"
                    data-wow-delay="0.1s"
                    style={{ marginBottom: 90 }}
                >
                    <div className="containero">
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

export default Photoprint;
