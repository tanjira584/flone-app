import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./PageCart.css";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";

const PageCart = () => {
    const [cart, setCart] = useCart();
    console.log(cart);
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
                            {cart.map((product) => (
                                <tr>
                                    <td className="product-thumbnail">
                                        <img
                                            className="img-fluid"
                                            src={product.img}
                                            alt=""
                                        />
                                    </td>
                                    <td className="product-name">
                                        <p>{product.name}</p>
                                    </td>
                                    <td className="product-per-price">
                                        <p>
                                            $<span>{product.price}</span>
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
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="container-md container-fluid pb-5">
                <div className="d-flex justify-content-between align-item-center">
                    <Link className="cart-to-shop" to="/shop">
                        continue shipping
                    </Link>
                    <button className="clear-cart">Clear shopping cart</button>
                </div>
            </div>
            <div className="container-md container-fluid mb-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="cart-tax">
                            <div className="cart-tax-content">
                                <h5>Estimate Shipping And Tax</h5>
                                <p>
                                    Enter your destination to get a shipping
                                    estimate.
                                </p>
                                <div className="mb-4">
                                    <label
                                        htmlFor="country"
                                        className="form-label"
                                    >
                                        *Country
                                    </label>
                                    <select
                                        className="form-control"
                                        name=""
                                        id="country"
                                    >
                                        <option value="">Bangladesh</option>
                                        <option value="">France</option>
                                        <option value="">United State</option>
                                        <option value="">India</option>
                                        <option value="">Pakistan</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="region"
                                        className="form-label"
                                    >
                                        *Region / State
                                    </label>
                                    <select
                                        className="form-control"
                                        name=""
                                        id="region"
                                    >
                                        <option value="">Bangladesh</option>
                                        <option value="">France</option>
                                        <option value="">United State</option>
                                        <option value="">India</option>
                                        <option value="">Pakistan</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="postal-code"
                                        className="form-label"
                                    >
                                        *Zip / Postal Code
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                    />
                                </div>
                                <button className="cart-tax-btn">
                                    Get A Quote
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cart-tax">
                            <div className="cart-tax-content">
                                <h5>Use Coupon Code</h5>
                                <p>Enter your coupon code if you have one.</p>

                                <div className="mb-4">
                                    <input
                                        className="form-control"
                                        type="text"
                                    />
                                </div>
                                <button className="cart-coupon-btn">
                                    Apply Coupon
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cart-tax">
                            <div className="cart-tax-content">
                                <h5>Cart Total</h5>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="m-0">Total Products</p>
                                    <h5>
                                        $<span>39.00</span>
                                    </h5>
                                </div>
                                <div className="grand-total d-flex justify-content-between align-items-center mb-3">
                                    <h5>Grand Total</h5>
                                    <h5>
                                        $<span>339.00</span>
                                    </h5>
                                </div>
                                <button className="cart-proceed-btn w-100">
                                    Proceed to checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PageCart;
