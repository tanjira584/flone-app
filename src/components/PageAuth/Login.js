import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Login.css";

const Login = () => {
    return (
        <div className="login-form">
            <form>
                <div class="mb-3">
                    <label for="email" class="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Enter your email"
                    />
                </div>
                <div class="mb-4">
                    <label for="password" class="form-label">
                        Password
                    </label>
                    <input
                        type="email"
                        class="form-control"
                        id="password"
                        placeholder="Enter your password"
                    />
                </div>
                <input type="submit" className="form-control" value="Login" />
                <p className="text-center py-2">
                    New to Flone App? <button>Create New Account.</button>
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

export default Login;
