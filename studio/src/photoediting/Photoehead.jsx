import React, { Component } from 'react';
import './PhotoEdit.css'

class Photoehead extends Component {
    render() {
        return (
            <div>
                 {/* Page Header Start */}
                 <div className="edit-header">
                {/* <img src="assets/img/frame3.jpg" alt="Image" /> */}
                    <div className="containerd">
                    <div className="rowin">
                        <div className="col-12">
                        <h2>Photo Editing</h2>
                        </div>
                        <div className="col-12">
                        <a href="/home">Home</a>
                        <a href="/photoedit">Photo Editing</a>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Page Header End */}
            </div>
        );
    }
}

export default Photoehead;
