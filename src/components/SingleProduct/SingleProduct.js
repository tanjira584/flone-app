import {
    faCartShopping,
    faEye,
    faHeart,
    faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import useCart from "../../hooks/useCart";
import { addToDb } from "../../utilities/fakeDb";
import "./SingleProduct.css";

const SingleProduct = ({ product }) => {
    const [cart, setCart] = useCart();

    const handleAddToCart = (selectedProduct) => {
        console.log(product.name);
        let newCart = [];
        const exists = cart.find(
            (product) => product._id === selectedProduct._id
        );
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter(
                (product) => product._id !== selectedProduct._id
            );
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct._id);
    };
    return (
        <div className="single-product-box">
            <div className="single-product-img mb-3">
                <img className="img-fluid" src={product.img} alt="" />
                <div className="product-action">
                    <div className="pro-wishlist">
                        <button>
                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                        </button>
                    </div>
                    <div className="pro-cart">
                        <button onClick={() => handleAddToCart(product)}>
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
                <p className="product-title">{product.name}</p>
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
                    $<span>{product.price}</span>
                </p>
            </div>
        </div>
    );
};

export default SingleProduct;
