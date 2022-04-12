import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import ShopSidebar from "./ShopSidebar";
import "./PageShop.css";

const PageShop = () => {
    return (
        <div>
            <Header></Header>
            <Breadcrumb pageName="Shop"></Breadcrumb>
            <main className="shop-page-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="">
                                <ShopSidebar></ShopSidebar>
                            </div>
                        </div>
                        <div className="col-lg-9"></div>
                    </div>
                </div>
            </main>

            <Footer></Footer>
        </div>
    );
};

export default PageShop;
