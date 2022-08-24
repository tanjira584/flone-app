import React from "react";
import support1 from "../../images/support1.png";
import support2 from "../../images/support2.png";
import support3 from "../../images/support3.png";
import support4 from "../../images/support4.png";

const SupportSection = () => {
    return (
        <div className="support-area">
            <div className="container-md container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="support-box d-flex align-items-center">
                            <div className="img">
                                <img src={support1} alt="" />
                            </div>
                            <div className="content">
                                <h5>Free Shipping</h5>
                                <p className="mb-0">
                                    Free shipping on all order
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="support-box  d-flex align-items-center">
                            <div className="img">
                                <img src={support2} alt="" />
                            </div>
                            <div className="content">
                                <h5>Support 24/7</h5>
                                <p className="mb-0">
                                    Free shipping on all order
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="support-box  d-flex align-items-center">
                            <div className="img">
                                <img src={support3} alt="" />
                            </div>
                            <div className="content">
                                <h5>Money Return</h5>
                                <p className="mb-0">
                                    Free shipping on all order
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="support-box  d-flex align-items-center">
                            <div className="img">
                                <img src={support4} alt="" />
                            </div>
                            <div className="content">
                                <h5>Order Discount</h5>
                                <p className="mb-0">
                                    Free shipping on all order
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportSection;
