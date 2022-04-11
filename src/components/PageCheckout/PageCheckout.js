import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./PageCheckout.css";

const PageCheckout = () => {
    return (
        <div>
            <Header></Header>
            <Breadcrumb pageName="Checkout"></Breadcrumb>
            <div className="container-md container-fluid py-5">
                <div className="row">
                    <div className="col-md-7">
                        <div className="billing-details">
                            <h4 className="mb-4">Billing Details</h4>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div class="billing-info mb-4">
                                        <label
                                            for="firstName"
                                            class="form-label"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="firstName"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div class="billing-info mb-4">
                                        <label
                                            for="lastName"
                                            class="form-label"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="lastName"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div class="billing-info mb-4">
                                        <label
                                            for="companyName"
                                            class="form-label"
                                        >
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="companyName"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div class="billing-info mb-3">
                                        <label
                                            for="selectCountry"
                                            class="form-label"
                                        >
                                            Country
                                        </label>
                                        <select
                                            className="form-control"
                                            name=""
                                            id="selectCountry"
                                        >
                                            <option value="">Bangladesh</option>
                                            <option value="">France</option>
                                            <option value="">
                                                United State
                                            </option>
                                            <option value="">Pakistan</option>
                                            <option value="">India</option>
                                            <option value="">Kwuiet</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div class="billing-info mb-4">
                                        <label
                                            for="streetAddress"
                                            class="form-label"
                                        >
                                            Street Address
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control mb-3"
                                            id="lastName"
                                            placeholder="House number and state name "
                                        />
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="lastName"
                                            placeholder="Apartment, suite, unite etc"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div class="billing-info mb-4">
                                        <label
                                            for="townCity"
                                            class="form-label"
                                        >
                                            Town / City
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="townCity"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div class="billing-info mb-4">
                                        <label
                                            for="stateCountry"
                                            class="form-label"
                                        >
                                            State / Country
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="stateCountry"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div class="billing-info mb-4">
                                        <label
                                            for="postcodeZip"
                                            class="form-label"
                                        >
                                            Postcode / Zip
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="postcodeZip"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div class="billing-info mb-4">
                                        <label for="phone" class="form-label">
                                            Phone
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="phone"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div class="billing-info mb-4">
                                        <label for="email" class="form-label">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            class="form-control"
                                            id="email"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                                <h5>Additional Information.</h5>
                                <div className="col-lg-12">
                                    <div class="billing-info mb-4">
                                        <label
                                            for="orderNotes"
                                            class="form-label"
                                        >
                                            Order notes
                                        </label>
                                        <textarea
                                            className="form-control"
                                            placeholder="Notes about your order, e.g. special notes for delivery. "
                                            name=""
                                            id="orderNotes"
                                            cols="30"
                                            rows="5"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 px-4">
                        <div className="order-recet">
                            <h4 className="mb-4">Your Order</h4>
                            <div className="recet-box">
                                <div className="recet-top">
                                    <ul>
                                        <li>Product</li>
                                        <li>Total</li>
                                    </ul>
                                </div>
                                <div className="recet-middle">
                                    <ul>
                                        <li>
                                            <p>
                                                Lorem ipsum chair one X{" "}
                                                <span>6</span>
                                            </p>
                                            <p>
                                                $<span>93.00</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Lorem ipsum chair two X{" "}
                                                <span>1</span>
                                            </p>
                                            <p>
                                                $<span>10.00</span>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="recet-bottom">
                                    <ul>
                                        <li>Shipping</li>
                                        <li>Free Shipping</li>
                                    </ul>
                                </div>
                                <div className="recet-total">
                                    <ul>
                                        <li>Total</li>
                                        <li>
                                            $<span>103.60</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="place-order mt-4">
                                <button className="place-order-btn w-100">
                                    Place Order
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

export default PageCheckout;
