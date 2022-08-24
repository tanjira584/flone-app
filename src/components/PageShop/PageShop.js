import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import ShopSidebar from "./ShopSidebar";
import "./PageShop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl, faTh, faThLarge } from "@fortawesome/free-solid-svg-icons";
import SingleProduct from "../SingleProduct/SingleProduct";
import { useProducts } from "../../hooks/products";
import { useState } from "react";
import { useEffect } from "react";

const PageShop = () => {
    // const [products] = useProducts();
    const [totalPage, setTotalPage] = useState(1);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(12);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [page, size]);

    useEffect(() => {
        fetch("http://localhost:5000/productCount")
            .then((res) => res.json())
            .then((data) => {
                const count = data.count;
                const pages = Math.ceil(count / 12);
                setTotalPage(pages);
            });
    }, []);
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
                                            Showing {page * size + 12} of 136
                                            result
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
                                        {products.length > 0 &&
                                            products.map((product) => (
                                                <div
                                                    className="col-lg-4"
                                                    key={product._id}
                                                >
                                                    <SingleProduct
                                                        product={product}
                                                    ></SingleProduct>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                                <div className="pagination text-center mt-5 py-4">
                                    <div className="text-center mx-auto">
                                        {[...Array(totalPage).keys()].map(
                                            (number) => (
                                                <button
                                                    key={number}
                                                    onClick={() =>
                                                        setPage(number)
                                                    }
                                                    className={
                                                        page === number
                                                            ? "text-light bg-success mx-2 py-2 px-3"
                                                            : "mx-2 py-2 px-3"
                                                    }
                                                >
                                                    {number + 1}
                                                </button>
                                            )
                                        )}
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
