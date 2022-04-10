import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Register.css";

const Register = ({ handleAuthForm }) => {
    return (
        <div className="register-form">
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="password"
                        placeholder="Enter your password"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="ConfirmPassword" className="form-label">
                        Confirm Password
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="ConfirmPassword"
                        placeholder="Confirm your password"
                    />
                </div>
                <input
                    type="submit"
                    className="form-control"
                    value="Register"
                />
                <p className="text-center py-2">
                    Already have an account?{" "}
                    <button onClick={() => handleAuthForm("login")}>
                        Login
                    </button>
                </p>
                <div className="or-div d-flex align-items-center justify-content-center">
                    <div className="or-left"></div>
                    <div className="or">or</div>
                    <div className="or-right"></div>
                </div>
                <div className="google-log mt-4">
                    <button>
                        <span className="me-2">
                            <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                        </span>
                        Continue With Google
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;
