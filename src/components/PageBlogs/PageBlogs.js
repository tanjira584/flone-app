import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const PageBlogs = () => {
    return (
        <div>
            <Header></Header>
            <Breadcrumb pageName="blogs"></Breadcrumb>
            <div style={{ height: "600px" }}></div>
            <Footer></Footer>
        </div>
    );
};

export default PageBlogs;
