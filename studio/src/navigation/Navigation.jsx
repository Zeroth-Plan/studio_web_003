import React, { Component } from 'react';
import './Navigation.css'

class Navigation extends Component {
    render() {
        return (
            <div>
                <div className="navbar navbar-expand-lg bg-dark navbar-dark">
                    <div className="container-fluid">
                    <a href="index.html" className="navbar-brand">
                        Mi<span>la</span>ns
                    </a>
                    <button
                        type="button"
                        className="navbar-toggler"
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-between"
                        id="navbarCollapse"
                    >
                        <div className="navbar-nav ml-auto">
                        <a href="#" className="nav-item nav-link">
                            Home
                        </a>
                        <a href="#" className="nav-item nav-link">
                            Shop
                        </a>
                        <a href="#" className="nav-item nav-link">
                            Products
                        </a>
                        <a href="#" className="nav-item nav-link">
                            About
                        </a>
                        <a href="#" className="nav-item nav-link">
                            Login
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;
