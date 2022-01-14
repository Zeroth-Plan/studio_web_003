import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
    render() {
        return (
            <div>
                            <section className="login-block">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4 login-sec">
                      <h2 className="text-center">Login Now</h2>
                      <form className="login-form">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1" className="text-uppercase">
                            Username
                          </label>
                          <input type="text" className="form-control" placeholder />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1" className="text-uppercase">
                            Password
                          </label>
                          <input type="password" className="form-control" placeholder />
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" />
                            <small>Remember Me</small>
                          </label>
                          
                          <button type="submit"  className="btn btn-login float-right">
                          <a href="/home">
                            Submit
                            </a>
                          </button>
                          
                        </div>
                      </form>
                      {/* <div className="copy-text">
                        Created with <i className="fa fa-heart" /> by{" "}
                        <a href="http://grafreez.com">Grafreez.com</a>
                      </div> */}
                    </div>
                    <div className="col-md-8 banner-sec">
                      <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-ride="carousel"
                      >
                        <ol className="carousel-indicators">
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to={0}
                            className="active"
                          />
                          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                        </ol>
                        <div className="carousel-inner" role="listbox">
                          <div className="carousel-item active">
                            <img
                              className="d-block img-fluid"
                              src="assets/img/pf1.jpg"
                              alt="First slide"
                            />
                            <div className="carousel-caption d-none d-md-block">
                              <div className="banner-text">
                                <h2>Photography</h2>
                                <p>
                                  {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                  do eiusmod tempor incididunt ut labore et dolore magna
                                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation */}
                                  We are a photo booth service provider based in Sri Lanka and we specialize in providing high quality,
                                   fun, professional, user friendly and cost effective open air photo booth rental services for your events held island wide.

                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img
                              className="d-block img-fluid"
                              src="assets/img/lg3.jpg"
                              alt="First slide"
                            />
                            <div className="carousel-caption d-none d-md-block">
                              <div className="banner-text">
                                <h2>Events</h2>
                                <p>
                                We are a photo booth service provider based in Sri Lanka and we specialize in providing high quality, 
                                fun, professional, user friendly and cost effective open air photo booth rental services for your events held island wide.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img
                              className="d-block img-fluid"
                              src="assets/img/lg.jpeg"
                              alt="First slide"
                            />
                            <div className="carousel-caption d-none d-md-block">
                              <div className="banner-text">
                                <h2>Portrait Photography</h2>
                                <p>
                                We are a photo booth service provider based in Sri Lanka and we specialize in providing high quality, 
                                fun, professional, user friendly and cost effective open air photo booth rental services for your events held island wide.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>                   
            </div>
        );
    }
}

export default Login;
