import React, { Component } from 'react';
import './Laser.css'

class Laserhead extends Component {
    render() {
        return (
            <div>
                {/* Page Header Start */}
                <div className="laser-header">
                {/* <img src="" alt="Image" /> */}
                    <div className="containera">
                    <div className="ro2">
                        <div className="col-12">
                        <h2>Laser</h2>
                        </div>
                        <div className="col-12">
                        <a href="/home">Home</a>
                        <a href="/laser">Laser</a>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Page Header End */}
            </div>
        );
    }
}

export default Laserhead;
