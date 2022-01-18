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
                        
                    </div>
                    </div>
                </div>
                {/* Page Header End */}
               
                {/*********
                 * ********
                 */}
                 {/********
        *********** */ }
        <div className="main"> 
            {/* For demo purpose */}
            <div className="imageboxpd">
                    <div className="box1"></div>
                    <div className="box2"></div>
                    <div className="box3"></div>
                    <div className="box4"></div>
            </div>
                
             <div className="gnna">
             <div className="containerq">
                    <div className="row">
                        <div className="col-12">
                        <h2>Gift items</h2>
                        </div>
                        <div className="col-12">
                        <p>Choose the perfect gift for any occasion!</p>
                        </div>
                    </div>
                    </div>
                  {/************* */}
                  <div className="droupSelec">
                    <select class="form-control">
                        <option>Mugs</option>
                        <option>Crystals</option>
                        <option>Trophies</option>
                        <option>Clocks</option>
                        <option>Plates</option>
                        <option>T-shirts</option>
                        <option>Caps</option>
                        <option>Rocks</option>
                        <option>Tiles </option>
                        <option>Badges </option>
                        <option>Rubber seals</option>
                        <option>Plastic Id cards</option>
                        <option>Key tags</option>
                        <option>Wooden Engraving</option>
                        <option>Wooden Laser photograph</option>
                        <option>Acrylic boxes</option>
                        <option>Acrylic photo stands</option>
                        <option>Name boards</option>
                        
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
                            <input type="text" className="form-control" placeholder=" Write Design Description" />
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
                    className="disc wow zoomIn"
                    data-wow-delay="0.1s"
                    style={{ marginBottom: 90 }}
                >
                    <div className="containerq">
                   
                    </div>
                </div>
                {/* Discount End */}
                {/* Footer Start */}
                <Footer/>
                
            </div>
        )
    }
}

export default Product;
