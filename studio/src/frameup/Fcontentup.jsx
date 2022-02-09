import React, { Component } from 'react';
import './FrameUp.css'

class Fcontentup extends Component {
    render() {
        return (
            <div>
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
                        <h2>Frames</h2>
                        </div>
                        {/* <div className="col-12">
                        <p>Choose the perfect gift for any occasion!</p>
                        </div> */}
                    </div>
                    </div>
                  {/************* */}
                  <div className="ganna2ba">
                      {/**********/}
                  <div className="col-12f">
                        <p>Select frame type</p>
                        </div>
                  <div className="droupSelec">
                    <select class="form-control">
                        <option> Wooden frames</option>
                        <option> Liquid frames</option>
                        <option> Fancy frames</option>
                        <option> MDF frames</option>
                        <option> Ply Mount</option>
                        
                       
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
                {/* <button type="button" class="btn cart" >Add to cart</button> */}
                <a className="btn cart" href="/cart">
                                Add to cart
                                </a>
            </div>
            </div>{/*ganna2ba} 
            {/* Uploaded image area*/}
        </div>
            </div>
        );
    }
}

export default Fcontentup;
