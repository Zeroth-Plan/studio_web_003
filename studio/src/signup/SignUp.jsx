import React, { Component } from 'react';
import './SignUp.css'

class Signup extends Component {
    render() {
        return (
            <div className='bodyq'>
                                <div className="signup-form">
                {/* <form action="/examples/actions/confirmation.php" method="post"> */}
                <form action="#" method="post">
                    <h2>Sign Up</h2>
                    <p>Please fill in this form to create an account!</p>
                    <hr />
                    <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                        <span className="input-group-text">
                            <span className="fa fa-user" />
                        </span>
                        </div>
                        <input
                        type="text"
                        className="form-control"
                        name="username"
                        placeholder="Username"
                        required="required"
                        />
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fa fa-paper-plane" />
                        </span>
                        </div>
                        <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email Address"
                        required="required"
                        />
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fa fa-lock" />
                        </span>
                        </div>
                        <input
                        type="text"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        required="required"
                        />
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fa fa-lock" />
                            <i className="fa fa-check" />
                        </span>
                        </div>
                        <input
                        type="text"
                        className="form-control"
                        name="confirm_password"
                        placeholder="Confirm Password"
                        required="required"
                        />
                    </div>
                    </div>
                    <div className="form-group">
                    <label className="form-check-label">
                        <input type="checkbox" required="required" /> I accept the{" "}
                        <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>
                    </label>
                    </div>
                    <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg">
                        Sign Up
                    </button>
                    </div>
                </form>
                <div className="text-center">
                    Already have an account? <a href="/login">Login here</a>
                </div>
                </div>
            </div>
        );
    }
}

export default Signup;
