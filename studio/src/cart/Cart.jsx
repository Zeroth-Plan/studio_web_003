import React, { Component } from 'react';
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';
import './Cart.css'

class Cart extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                 {/* Page Header Start */}
                 <div className="header">
                    <div className="containerq">
                    <div className="ro9">
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
                {/***********/}
                <div className="main1">
                <div className="maino">
                <div className="order">
                    <h3>Your cart</h3>
                    <p>Not ready to checkout?Continue Studio</p>
                </div>
                {/******************/}
                <div className="flexf">
                <div className="fbox1"></div>
                <div className="include1">
                <h3>Frame</h3>
                <p>Size:L</p>
                <p>Quantity:1</p>
                <p>Description:***************</p>
                </div>
                </div>
                {/***************** */}
                {/******************/}
                <div className="flexf1">
                <div className="fbox"></div>
                <div className="include">
                <h3>Laser</h3>
                <p>Size:L</p>
                <p>Quantity:1</p>
                <p>Description:***************</p>
                </div>
                </div>
                {/***************** */}
                {/* Button trigger modal */}
                <div className="policy">
                            <button
                                type="button"
                                className="btn return2"
                                data-toggle="modal"
                                data-target="#exampleModalLong"
                            >
                                Return Policy
                            </button>
                            {/* Modal */}
                            <div
                                className="modal fade"
                                id="exampleModalLong"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="exampleModalLongTitle"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">
                                        Return Policy
                                    </h5>
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                         Commodi facilis quidem soluta adipisci ab, obcaecati doloribus sed aut odit eos 
                                         repellendus dolor aspernatur eligendi hic molestias! Facilis totam nam mollitia?
                                         Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                         Accusantium aperiam perferendis quam sapiente laborum ipsam expedita, aspernatur
                                          nam quisquam sunt cum harum consequuntur molestias pariatur culpa saepe et. 
                                          Voluptatibus, accusantium!
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolore aperiam voluptates soluta quia, natus quod maxime totam voluptas. 
                                          Fuga nam officiis eius distinctio. 
                                          Modi et odit voluptatem dolor ratione.</span>
                                    </button>
                                    </div>
                                    <div className="modal-body">...</div>
                                    <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    {/* <button type="button" className="btn btn-primary">
                                        Save changes
                                    </button> */}
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                {/****************************/}
                <div className="optionbox">
                            {" "}
                            <select>
                                <option>Shipping Option</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>{" "}
                            </div>
                            {/*************** */}
                            <div className="optionbox">
                            {" "}
                            <select>
                                <option>Shipping Option</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>{" "}
                            </div>
                            </div>
                            {/**************/}
                            <div className="left">
                                <h3>Order Summary</h3>
                                {/* <button className="btnq">submit</button> */}
                                <button type="button" class="btn orderb">Submit</button>
                            </div>
                            </div>
                 {/* Discount Start */}
                 <div
                    className="aft wow zoomIn"
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
                <Footer/>
            </div>
        );
    }
}

export default Cart;
