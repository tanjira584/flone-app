import React from "react";
import slider1 from "../../images/slider1.png";

const Slider = () => {
    return (
        <div className="home-slider">
            <div className="container-md container">
                <div className="slider">
                    <div className="row">
                        <div className="col-md-6 d-flex flex-column justify-content-center">
                            <div className="slide-content">
                                <h5>Smart Products</h5>
                                <h1>Summer Offer 2022 Collection</h1>
                                <a href="http://localhost:3000/shop">
                                    Shop now
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 pt-5">
                            <div className="slide-img">
                                <img src={slider1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
