import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Login from "./Login";
import Register from "./Register";
import "./PageAuth.css";

const PageAuth = () => {
    const [authForm, setAuthForm] = useState("login");
    const handleAuthForm = (type) => {
        setAuthForm(type);
    };
    const showAuthForm = () => {
        if (authForm === "login") {
            return <Login handleAuthForm={handleAuthForm}></Login>;
        } else {
            return <Register handleAuthForm={handleAuthForm}></Register>;
        }
    };
    return (
        <div>
            <Header></Header>
            <Breadcrumb pageName="login register"></Breadcrumb>
            <div className="auth-type d-flex justify-content-center py-5">
                <h2
                    onClick={() => handleAuthForm("login")}
                    style={
                        authForm === "login"
                            ? { color: "#a749ff" }
                            : { color: "inherit" }
                    }
                >
                    Login
                </h2>
                <h2>
                    <span>|</span>
                </h2>
                <h2
                    onClick={() => handleAuthForm("register")}
                    style={
                        authForm === "login"
                            ? { color: "inherit" }
                            : { color: "#a749ff" }
                    }
                >
                    Register
                </h2>
            </div>
            <div className="auth-container">{showAuthForm()}</div>

            <Footer></Footer>
        </div>
    );
};

export default PageAuth;
