import React, { Component } from 'react';
import './Editnew.css'
import Navigation from '../navigation/Navigation';
import Photoehead from '../photoediting/Photoehead';
import Retouching from './Retouching';
import Resizing from './Resizing';
import Patch from './Patch';
import Collage from './Collage';
import Blackwhite from './Blackwhite';
import Background from './Background';
import Photoebottom from '../photoediting/Photoebottom';
import Footer from '../footer/Footer';

class Editnew extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Photoehead/>
                 <div  className="class">
                    {/* <div className="containerd"> */}
                    <div className="container ct">
                    <div
                        className="section-header text-center wow zoomIn"
                        data-wow-delay="0.1s"
                    >
                        <p>Showing 1003 products</p>
                        {/* <h2>Yoga Class Shedule</h2> */}
                    </div>
                    <div className="row">
                        <div className="col-12">
                        <ul id="class-filter">
                            {/* <li data-filter="*" className="filter-active"> */}
                            {/*************/}
                            {/* <li data-filter="*" onClick={editb}>   
                            Retouching
                            </li>
                            <li data-filter=".filter-1" onClick={editb1}>Resizing</li>
                            <li data-filter=".filter-2" onClick={editb2}>Patch removal</li>
                            <li data-filter=".filter-3" onClick={editb3}>Photo collage</li>
                            <li data-filter=".filter-4" onClick={editb4}>Black and White colour</li>
                            <li data-filter=".filter-5" onClick={editb5}>Background changes</li> */}
                            {/****************/}
                            <li data-filter="*"><a href='#retouching'>Retouching</a></li>
                            <li data-filter=".filter-1"><a href='#resize'>Resizing</a></li>
                            <li data-filter=".filter-2"><a href='#patch'>Patch removal</a></li>
                            <li data-filter=".filter-3"><a href='#collage'>Photo collage</a></li>
                            <li data-filter=".filter-4"><a href='#black'>Black and White colour</a></li>
                            <li data-filter=".filter-5"><a href='#background'>Background changes</a></li>
                            {/****************/}
                            <a className="btn" href="/edit">
                                Upload a Photo
                                </a>
                        </ul>
                        </div>
                    </div>
            </div>
            </div>
            <Retouching/>
            <Resizing/>
            <Patch/>
            <Collage/>
            <Blackwhite/>
            <Background/>
            <Photoebottom/>
            <Footer/>
            </div>
        );
    }
}

export default Editnew;
