import React, { Component } from 'react';
import './Navigation.css'

class Navigation extends Component {
    render() {
        return (
            <div>
                <div className="navbar navbar-expand-lg bg-dark navbar-dark ">
                    <div className="container-fluid">
                    {/* <a href="index.html" className="navbar-brand"> */}
                    {/* <a href="/home" className="navbar-brand">
                        Mi<span>la</span>ns
                    </a> */}
                    {/***********/}
                    <a href="/home">
                    <img className="milanslogo"  src="assets/img/logo black and white with artboard-01.svg" alt="Imag4" />
                    </a>
                    {/***********/}
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
                        {/* <a href="/home" className="nav-item nav-link">
                            Home
                        </a> */}
                        {/* <div className="search-container">
                                    <form action="/action_page.php">
                                        <input type="text" placeholder="Search.." name="search" />
                                        <button type="submit">
                                        <i className="fa fa-search" />
                                        </button>
                                    </form>
                                    </div> */}
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
                                <a href="/flex" className="dropdown-item">
                                Flex
                                </a>
                            </div>
                            </div>
                        {/*******************/}
                        <div className="nav-item dropdown">
                            <a href="/product" className="nav-link dropdown-toggle" data-toggle="dropdown">
                            Products
                            </a>
                            <div className="dropdown-menu">
                                <a href="/laser" className="dropdown-item">
                                Laser Works
                                </a>
                                <a href="/mug" className="dropdown-item">
                                Sublimations Items
                                </a>
                                <a href="/metal" className="dropdown-item">
                                Metal
                                </a>
                            </div>
                            </div>

                        {/*******************/}
                        <a href="/about" className="nav-item nav-link">
                            About
                        </a>
                        <a href="/login" className="nav-item nav-link fas fa-sign-in-alt">
                            {/* Login */}
                        </a>
                        
                        {/**************/}
                        <a className="shopping-cart" href="/cart"
                        className="nav-item nav-link fas fa-shopping-cart" >
                        </a>
                        {/*********************/}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;
