import React, { Component } from 'react';
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';
import './Upload.css'

class Upload extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                {/* Page Header Start */}
                <div className="heade">
                    <div className="containers">
                    <div className="rom">
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
                {/**********
                 * *******
                */}
                   <div className="big">
                       <div className="small">
                           <div className="formon">
                           <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput1">Email address</label>
                                        <input
                                        type="email"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="name@example.com"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Example select</label>
                                        <select className="form-control" id="exampleFormControlSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
                                        <select multiple className="form-control" id="exampleFormControlSelect2">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1">Custom text</label>
                                        <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows={3}
                                        defaultValue={""}
                                        />
                                    </div>
                                    </form>
                           </div>
                       </div>
                       {/******************** */}
                       <div className="upload">
                       
                        <input type="file" className="custom-file-input" id="customFile" />
                        <label className="custom-file-label" htmlFor="customFile">
                        Choose file
                        </label>
                       </div>
                       {/************ */}
                       {/* <div className="boximg"></div> */}
                       {/*************** */}
                      </div> 
                      {/* Discount Start */}
                <div
                    className="af wow zoomIn"
                    data-wow-delay="0.1s"
                    style={{ marginBottom: 90 }}
                >
                    <div className="containers">
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

export default Upload;
