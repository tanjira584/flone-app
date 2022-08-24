import React from "react";
import { useProducts } from "../../hooks/products";
import SingleProduct from "../SingleProduct/SingleProduct";

const HomeProduct = () => {
    const [products] = useProducts();
    return (
        <div>
            <div className="container-md container">
                <div className="section-info text-center">
                    <h2>Daily Deals!</h2>
                    <ul className="mt-3">
                        <li>New Arrivals</li>
                        <li>Best Sellers</li>
                        <li>Sales Items</li>
                    </ul>
                </div>
                <div className="all-shop-products mt-5">
                    <div className="row g-5">
                        {products.length > 0 &&
                            products.slice(0, 8).map((product) => (
                                <div className="col-lg-3" key={product._id}>
                                    <SingleProduct
                                        product={product}
                                    ></SingleProduct>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProduct;
