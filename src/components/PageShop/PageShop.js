import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import ShopSidebar from "./ShopSidebar";
import "./PageShop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl, faTh, faThLarge } from "@fortawesome/free-solid-svg-icons";
import SingleProduct from "../SingleProduct/SingleProduct";

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
                        <div className="col-lg-9">
                            <div className="px-4">
                                <div className="grid-controller mb-4 d-flex align-items-center justify-content-start">
                                    <div className="select-price">
                                        <select name="" id="">
                                            <option value="">Default</option>
                                            <option value="">
                                                Price - High to Low
                                            </option>
                                            <option value="">
                                                Price - Low to High
                                            </option>
                                        </select>
                                    </div>
                                    <div className="result-counter">
                                        <p className="m-0">
                                            Showing 15 of 136 result
                                        </p>
                                    </div>

                                    <div className="grid-icon ms-auto">
                                        <button>
                                            <FontAwesomeIcon
                                                className="icon"
                                                icon={faThLarge}
                                            ></FontAwesomeIcon>
                                        </button>
                                        <button>
                                            <FontAwesomeIcon
                                                className="icon"
                                                icon={faTh}
                                            ></FontAwesomeIcon>
                                        </button>
                                        <button>
                                            <FontAwesomeIcon
                                                className="icon"
                                                icon={faListUl}
                                            ></FontAwesomeIcon>
                                        </button>
                                    </div>
                                </div>
                                <div className="all-shop-products mt-5">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <SingleProduct></SingleProduct>
                                        </div>
                                        <div className="col-lg-4">
                                            <SingleProduct></SingleProduct>
                                        </div>
                                        <div className="col-lg-4">
                                            <SingleProduct></SingleProduct>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer></Footer>
        </div>
    );
};

export default PageShop;
