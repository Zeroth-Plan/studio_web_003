import React, { Component } from 'react';

class Resizing extends Component {
    render() {
        return (
            <div>
                 {/********
        *********** */ }
        <div id="resize" className="main"> 
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
                        <h2>Resizing</h2>
                        </div>
                        <div className="col-12">
                        <p>Choose the perfect gift for any occasion!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est officiis corrupti, id suscipit rem cupiditate. Iste, optio. Possimus, blanditiis repellat cum recusandae temporibus repudiandae. Necessitatibus dolore minus maxime modi dicta.</p>
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

export default Resizing;
