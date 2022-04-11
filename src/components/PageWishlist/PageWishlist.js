import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./PageWishlist.css";

const PageWishlist = () => {
    return (
        <div>
            <Header></Header>
            <Breadcrumb pageName="Wishlist"></Breadcrumb>
            <div className="container-md container-fluid py-5">
                <h4>Your Wish Lists</h4>
                <div className="table-responsive wishlist-table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">image</th>
                                <th scope="col">product name</th>
                                <th scope="col">Unit price</th>

                                <th scope="col">add to cart</th>
                                <th scope="col">action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="product-thumbnail">
                                    <img
                                        className="img-fluid"
                                        src="images/furniture/1.jpg"
                                        alt=""
                                    />
                                </td>
                                <td className="product-name">
                                    <p>Lorem ipsum chair one</p>
                                </td>
                                <td className="product-per-price">
                                    <p>
                                        $<span>99.00</span>
                                    </p>
                                </td>
                                <td className="add-cart">
                                    <button className="wish-to-cart">
                                        add to cart
                                    </button>
                                </td>
                                <td className="product-remove">
                                    <button>
                                        <FontAwesomeIcon
                                            icon={faTimes}
                                        ></FontAwesomeIcon>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="product-thumbnail">
                                    <img
                                        className="img-fluid"
                                        src="images/furniture/2.jpg"
                                        alt=""
                                    />
                                </td>
                                <td className="product-name">
                                    <p>Lorem ipsum chair two</p>
                                </td>
                                <td className="product-per-price">
                                    <p>
                                        $<span>45.00</span>
                                    </p>
                                </td>
                                <td className="add-cart">
                                    <button className="wish-to-cart">
                                        add to cart
                                    </button>
                                </td>
                                <td className="product-remove">
                                    <button>
                                        <FontAwesomeIcon
                                            icon={faTimes}
                                        ></FontAwesomeIcon>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="product-thumbnail">
                                    <img
                                        className="img-fluid"
                                        src="images/furniture/3.jpg"
                                        alt=""
                                    />
                                </td>
                                <td className="product-name">
                                    <p>Lorem ipsum chair three</p>
                                </td>
                                <td className="product-per-price">
                                    <p>
                                        $<span>60.00</span>
                                    </p>
                                </td>
                                <td className="add-cart">
                                    <button className="wish-to-cart">
                                        add to cart
                                    </button>
                                </td>
                                <td className="product-remove">
                                    <button>
                                        <FontAwesomeIcon
                                            icon={faTimes}
                                        ></FontAwesomeIcon>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="container-md container-fluid pb-5">
                <div className="d-flex justify-content-between align-item-center">
                    <Link className="wishlist-to-shop" to="/shop">
                        continue shipping
                    </Link>
                    <button className="clear-wishlist">Clear Wishlist</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PageWishlist;
