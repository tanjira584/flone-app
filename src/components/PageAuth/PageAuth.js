import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Login from "./Login";
import Register from "./Register";
import "./PageAuth.css";

const PageAuth = () => {
    return (
        <div>
            <Header></Header>
            <Breadcrumb pageName="login register"></Breadcrumb>
            <div className="auth-type d-flex justify-content-center py-5">
                <h2>Login</h2>
                <h2>
                    <span>|</span>
                </h2>
                <h2>Register</h2>
            </div>
            <div className="auth-container">
                <Login></Login>
            </div>
            <div style={{ height: "600px" }}></div>
            <Footer></Footer>
        </div>
    );
};

export default PageAuth;
