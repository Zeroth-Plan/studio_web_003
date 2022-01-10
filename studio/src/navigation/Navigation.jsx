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
                        <a href="/home" className="nav-item nav-link">
                            Home
                        </a>
                        {/* <a href="/upload" className="nav-item nav-link">
                            Shop
                        </a> */}
                        <div className="nav-item dropdown">
                            <a href="/services" className="nav-link dropdown-toggle" data-toggle="dropdown">
                                Services
                            </a>
                            <div className="dropdown-menu">
                                <a href="/frame" className="dropdown-item">
                                Frame
                                </a>
                                <a href="/photoedit" className="dropdown-item">
                                Photo Editing
                                </a>
                                <a href="/photoprint" className="dropdown-item">
                                Photo Printing
                                </a>
                                <a href="/photoservice" className="dropdown-item">
                                Photography Service
                                </a>
                                <a href="/laser" className="dropdown-item">
                                Laser
                                </a>
                                <a href="/mug" className="dropdown-item">
                                Mug
                                </a>
                                <a href="/flex" className="dropdown-item">
                                Flex
                                </a>
                            </div>
                            </div>
                        {/*******************/}
                        <a href="/product" className="nav-item nav-link">
                            Products
                        </a>
                        <a href="/about" className="nav-item nav-link">
                            About
                        </a>
                        <a href="/login" className="nav-item nav-link">
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
