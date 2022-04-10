import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="container-md container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-box">
                            <div className="footer-logo">
                                <h1>Flone.</h1>
                            </div>
                            <div className="">
                                <p>
                                    These example sentences are selected
                                    automatically from various online news
                                    sources to . Views expressed in the examples
                                    do not represent the opinion of
                                    Merriam-Webster or its editors.
                                </p>
                                <p>&copy; 2022 Flone.</p>
                                <p>All Right Reserved.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="footer-box">
                            <h5>About us</h5>
                            <ul>
                                <li>
                                    <a href=" ">About Us</a>
                                </li>
                                <li>
                                    <a href=" ">Store Location</a>
                                </li>
                                <li>
                                    <a href=" ">Contact</a>
                                </li>
                                <li>
                                    <a href=" ">Orders Tracking</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="footer-box">
                            <h5>Useful Links</h5>
                            <ul>
                                <li>
                                    <a href=" ">Returns</a>
                                </li>
                                <li>
                                    <a href=" ">Support's Policy</a>
                                </li>
                                <li>
                                    <a href=" ">Size Guide</a>
                                </li>
                                <li>
                                    <a href=" ">FAQ's</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6">
                        <div className="">
                            <h5>Follow Us</h5>
                            <ul>
                                <li>
                                    <a href=" ">Facebook</a>
                                </li>
                                <li>
                                    <a href=" ">Twitter</a>
                                </li>
                                <li>
                                    <a href=" ">Instagram</a>
                                </li>
                                <li>
                                    <a href=" ">Youtube</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-box">
                            <h5>Subscribe</h5>
                            <div>
                                <p>
                                    Get E-mail updates about our latest shop and
                                    special offers.
                                </p>
                                <form>
                                    <input
                                        type="email"
                                        className="form-control mb-2 mt-3"
                                        placeholder="Enter Email"
                                    />
                                    <input type="submit" value="SUBSCRIBE" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
