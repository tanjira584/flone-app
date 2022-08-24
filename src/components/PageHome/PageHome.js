import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Slider from "./Slider";
import "./PageHome.css";
import SupportSection from "./SupportSection";
import HomeProduct from "./HomeProduct";
import BlogSection from "./BlogSection";

const PageHome = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <SupportSection></SupportSection>
            <HomeProduct></HomeProduct>
            <BlogSection></BlogSection>
            <Footer></Footer>
        </div>
    );
};

export default PageHome;
