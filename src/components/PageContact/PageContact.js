import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const PageContact = () => {
    return (
        <div>
            <Header></Header>
            <Breadcrumb pageName="Contact"></Breadcrumb>
            <div style={{ height: "600px" }}></div>
            <Footer></Footer>
        </div>
    );
};

export default PageContact;
