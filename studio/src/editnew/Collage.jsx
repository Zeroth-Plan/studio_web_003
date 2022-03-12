import React, { Component } from 'react';

class Collage extends Component {
    render() {
        return (
            <div>
                {/********
        *********** */ }
        <div id="collage" className="main"> 
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
                        <h2>Collage Creations</h2>
                        </div>
                        <div className="col-12">
                        <p> Is your girlfriend’s birthday coming next week? This is the perfect gift you 
                            can give. Upload your memories you have shared with your special one and we will 
                            create a heartwarming photo collage for you.</p>
                        <p>You will be given an opportunity to review the collage design through WhatsApp or 
                        Email before we proceed printing.</p>    
                        </div>
                    </div>
                    </div>
                  {/************* */}
                  {/* : Is your girlfriend’s birthday coming next week? This is the perfect gift you 
can give. Upload your memories you have shared with your special one and we will 
create a heartwarming photo collage for you. */}
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
                    
                {/* </form></div> */}
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

export default Collage;
