import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./PageCart.css";

const PageCart = () => {
    return (
        <div className="cart-page">
            <Header></Header>
            <Breadcrumb pageName="cart"></Breadcrumb>
            <div className="container-md container-fluid py-5">
                <h4>Your Cart Items</h4>
                <div className="table-responsive cart-table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">image</th>
                                <th scope="col">product name</th>
                                <th scope="col">Unit price</th>
                                <th scope="col">qty</th>
                                <th scope="col">subtotal</th>
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
                                <td className="product-quantity">
                                    <div className="cart-plus-minus">
                                        <button className="dec qtybutton">
                                            -
                                        </button>
                                        <input
                                            className="cart-plus-minus-box"
                                            type="text"
                                            readOnly
                                            value="1"
                                        />
                                        <button className="inc qtybutton">
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td className="product-subtotal">
                                    <p>
                                        $<span>99.00</span>
                                    </p>
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
                                <td className="product-quantity">
                                    <div className="cart-plus-minus">
                                        <button className="dec qtybutton">
                                            -
                                        </button>
                                        <input
                                            className="cart-plus-minus-box"
                                            type="text"
                                            readOnly
                                            value="1"
                                        />
                                        <button className="inc qtybutton">
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td className="product-subtotal">
                                    <p>
                                        $<span>45.00</span>
                                    </p>
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
                                <td className="product-quantity">
                                    <div className="cart-plus-minus">
                                        <button className="dec qtybutton">
                                            -
                                        </button>
                                        <input
                                            className="cart-plus-minus-box"
                                            type="text"
                                            readOnly
                                            value="1"
                                        />
                                        <button className="inc qtybutton">
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td className="product-subtotal">
                                    <p>
                                        $<span>60.00</span>
                                    </p>
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
            <Footer></Footer>
        </div>
    );
};

export default PageCart;
