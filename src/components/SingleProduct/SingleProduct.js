import {
    faCartShopping,
    faEye,
    faHeart,
    faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./SingleProduct.css";

const SingleProduct = () => {
    return (
        <div className="single-product-box">
            <div className="single-product-img mb-3">
                <img className="img-fluid" src="images/flower/1.jpg" alt="" />
                <div className="product-action">
                    <div className="pro-wishlist">
                        <button>
                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                        </button>
                    </div>
                    <div className="pro-cart">
                        <button>
                            <FontAwesomeIcon
                                className="me-2"
                                icon={faCartShopping}
                            ></FontAwesomeIcon>
                            add to cart
                        </button>
                    </div>
                    <div className="pro-quick">
                        <button>
                            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                        </button>
                    </div>
                </div>
            </div>
            <div className="single-product-info text-center">
                <p className="product-title">Lorem ipsum flower one</p>
                <ul className="product-rating">
                    <li>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    </li>
                </ul>
                <p className="product-price">
                    $<span>15.5</span>
                </p>
            </div>
        </div>
    );
};

export default SingleProduct;
