import React, { Component } from 'react';
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';
import './Edit.css'

class Edit extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                 {/* Page Header Start */}
                 <div className="pagedit-header">
                    <div className="containerq">
                    <div className="ro5dp">
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
               
               
                {/*********
                 * ********
                 */}
                 {/********
        *********** */ }
        <div className="maina"> 
            {/* For demo purpose */}
            <div className="imagebox">
                    <div className="box1"></div>
                    <div className="box2"></div>
                    <div className="box3"></div>
                    <div className="box4"></div>
            </div>
                
             <div className="gnnab">
             <div className="containerq">
                    <div className="row">
                        <div className="col-12">
                        <h2>Photo Editing</h2>
                        </div>
                        {/* <div className="col-12">
                        <p>Revamp your style with the latest designer trends in men’s clothing or 
                        achieve a perfectly curated wardrobe thanks to our line-up of timeless pieces.</p>
                        </div> */}
                    </div>
                    </div>
                  {/************* */}
                  <div className="droupSelec">
                    <select class="form-control">
                        <option>8x10 – maximum photos 5</option>
                        <option>8x12 – maximum photos 8 </option>
                        <option>10x12 – maximum photos 12</option>
                        <option>10x15 – maximum photos 14 </option>
                        <option>12x15 – maximum photos 18 </option>
                        <option>12x18 – maximum photos 20 </option>
                        <option>16x20 – maximum photos 26 </option>
                        <option>16x24 – maximum photos 34 </option>
                        <option>20x30 – maximum photos 40 </option>
                        <option>24x36 – maximum photos 50 </option>
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
                            <input type="text" className="form-control" placeholder="Write a description" />
                        </div>
                    {/* <div className="col">
                            <input type="text" className="form-control" placeholder="Last name" />
                        </div> */}
                    </div>
                </form>
                {/***************/}
                <div className="col-12 two tickOption">
                        <p>Select an occasion</p>
                        <div className="form-check">
                            <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Birthday
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
                            Farewell
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
                            Anniversary
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
                            Promotion
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
                            An Opening
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
                            Other
                            </label>
                        </div>
                        {/* <div className="form-check">
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
                        </div> */}
                        </div>
                        {/******* */}
                         {/******* */}
                                <form>
                                    <div className="form-row">
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Add a quote wishing them? " />
                                        </div>
                                    {/* <div className="col">
                                            <input type="text" className="form-control" placeholder="Last name" />
                                        </div> */}
                                    </div>
                                </form>
                {/***************/}
                {/* <button type="button" class="btn cart">Add to cart</button> */}
                <a className="btn cart" href="/cart">
                                Add to cart
                                </a>
            </div> 
            {/* Uploaded image area*/}
        </div>
                 {/* Discount Start */}
                <div
                    className="dpe wow zoomIn"
                    data-wow-delay="0.1s"
                    style={{ marginBottom: 90 }}
                >
                    <div className="containerdpe">
                    
                    </div>
                </div>
                {/* Discount End */}
                <Footer/>
            </div>
        );
    }
}

export default Edit;
