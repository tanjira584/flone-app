import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useProductCategories, useProductTags } from "../../hooks/products";
import "./ShopSidebar.css";

const ShopSidebar = () => {
    const [prodCategories] = useProductCategories();
    const [prodTags] = useProductTags();

    return (
        <div className="shop-sidebar">
            <div className="sidebar-search mb-5">
                <h4 className="mb-4">Search</h4>
                <div className="input-group">
                    <input type="text" name="" id="" />
                    <span>
                        <FontAwesomeIcon
                            className="icon"
                            icon={faSearch}
                        ></FontAwesomeIcon>
                    </span>
                </div>
            </div>
            <div className="sidebar-categories mb-5">
                <h4 className="mb-4">Categories</h4>
                <ul>
                    <li>
                        <button>
                            <span className="custom-check"></span> All
                            Categories
                        </button>
                    </li>
                    {prodCategories.map((category) => (
                        <li key={category}>
                            <button>
                                <span className="custom-check"></span>
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="sidebar-color mb-5">
                <h4 className="mb-4">Color</h4>
                <ul>
                    <li>
                        <button>
                            <span className="custom-check"></span> All Color
                        </button>
                    </li>
                    <li>
                        <button>
                            <span className="custom-check"></span> White
                        </button>
                    </li>
                    <li>
                        <button>
                            <span className="custom-check"></span> Black
                        </button>
                    </li>
                    <li>
                        <button>
                            <span className="custom-check"></span> Brown
                        </button>
                    </li>
                    <li>
                        <button>
                            <span className="custom-check"></span> Blue
                        </button>
                    </li>
                </ul>
            </div>
            <div className="sidebar-size mb-5">
                <h4 className="mb-4">Color</h4>
                <ul>
                    <li>
                        <button>
                            <span className="custom-check"></span> All Size
                        </button>
                    </li>
                    <li>
                        <button>
                            <span className="custom-check"></span> X
                        </button>
                    </li>
                    <li>
                        <button>
                            <span className="custom-check"></span> M
                        </button>
                    </li>
                    <li>
                        <button>
                            <span className="custom-check"></span> XL
                        </button>
                    </li>
                    <li>
                        <button>
                            <span className="custom-check"></span> XXL
                        </button>
                    </li>
                </ul>
            </div>
            <div className="sidebar-tags mb-5">
                <h4 className="mb-4">Tags</h4>
                <ul>
                    {prodTags.map((tag) => (
                        <li key={tag}>
                            <button>{tag}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ShopSidebar;
