import React, { Component } from 'react';

class Background extends Component {
    render() {
        return (
            <div>
                 {/********
        *********** */ }
        <div id="background" className="main"> 
            {/* For demo purpose */}
            <div className="imageboxpd">
                    {/* <div className="box1"></div>
                    <div className="box2"></div>
                    <div className="box3"></div>
                    <div className="box4"></div> */}
            </div>
                
             <div className="gnna">
             <div className="containerq">
                    <div className="row">
                        <div className="col-12">
                        <h2>Background Changes</h2>
                        </div>
                        <div className="col-12">
                        <p>Do you have a photo that you like but the background… not so much? 
                            Upload your photos to add a new background to your image</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos adipisci perspiciatis accusantium sequi quaerat non, recusandae commodi, quo iste molestias labore nihil cupiditate aliquam neque eligendi. Fuga aspernatur dicta reprehenderit.</p>    
                        </div>
                    </div>
                    </div>
                  {/************* */}
                  {/* <div className="droupSelec">
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
                 </div> */}
                 {/************** */}
                 {/***************** */}
                 {/* <div className="custom-file">
                        <input type="file" className="custom-file-input" id="customFile" />
                        <label className="custom-file-label" htmlFor="customFile">
                        Choose file
                        </label>
                 </div> */}
                {/******* */}
                 {/* <form>
                    <div className="form-row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder=" Write Design Description" />
                        </div> */}
                    {/* <div className="col">
                            <input type="text" className="form-control" placeholder="Last name" />
                        </div> */}
                    {/* </div>
                </form> */}
                {/***************/}
                {/* <button type="button" class="btn cart">Add to cart</button> */}
                <a className="btn cart" href="/edit">
                Upload a Photo
                                </a>
            </div> 
            {/* Uploaded image area*/}
        </div>
            </div>
        );
    }
}

export default Background;
