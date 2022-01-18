import React, { Component } from 'react';
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';
import './FlexUp.css'

class Flexup extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                 {/* Page Header Start */}
                 <div className="flexup-header">
                    <div className="containerq">
                    <div className="ro5flup">
                        
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
                        <h2> Flex, Banners & Stickers</h2>
                        </div>
                        {/* <div className="col-12">
                        <p>Choose the perfect gift for any occasion!</p>
                        </div> */}
                    </div>
                    </div>
                  {/************* */}
                  <div className="gnna2b">
                      {/**********/}
                  <div className="col-12f">
                        <p>Select material</p>
                        </div>
                  <div className="droupSelec">
                    <select class="form-control">
                        <option>Flex printing</option>
                        <option>Sticker printing</option>
                        <option>Fabric printing</option>
                        <option>PV paper printing(plastic)</option>
                        
                        
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
                <button type="button" class="btn cart">Add to cart</button>
                
            </div> 
            </div>{/*gann2b*/}
            {/* Uploaded image area*/}
        </div>
                 {/* Discount Start */}
                <div
                    className="dflexupload wow zoomIn"
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
        );
    }
}

export default Flexup;
