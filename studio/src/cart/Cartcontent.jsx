import React, { Component } from 'react';
import './Cart.css'

class Cartcontent extends Component {
    render() {
        return (
            <div>
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
                            {/* <div className="optionbox">
                            {" "}
                            <select>
                                <option>Shipping Option</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>{" "}
                            </div> */}
                            <button type="button" class="btn paynow">Pay Now</button>
                            </div>
                            {/**************/}
                            <div className="left">
                                <h3>Order Summary</h3>
                                {/* <button className="btnq">submit</button> */}
                                <button type="button" class="btn orderb">Submit</button>
                            </div>
                            </div>
            </div>
        );
    }
}

export default Cartcontent;
