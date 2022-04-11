import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
    faHeart,
    faShoppingCart,
    faUserAlt,
    faBars,
    faTimes,
    faPhone,
    faEnvelope,
    faSearch,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faInstagram,
    faPinterest,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./HeaderMain.css";
import { Link, NavLink } from "react-router-dom";

const HeaderMain = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const handleMobileMenu = (isOpen) => {
        if (!isOpen) {
            setMobileMenu(false);
        } else {
            setMobileMenu(true);
        }
        console.log(mobileMenu);
    };
    return (
        <section className="main-header">
            <div className="container-fluid container-md">
                <div className="menu-area d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <h1>Flone.</h1>
                    </div>
                    <div className="main-menu d-none d-lg-block">
                        <ul>
                            <li>
                                <NavLink
                                    to="/"
                                    className={(navInfo) =>
                                        navInfo.isActive ? "active" : " "
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/shop"
                                    className={(navInfo) =>
                                        navInfo.isActive ? "active" : " "
                                    }
                                >
                                    Shop
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/collection"
                                    className={(navInfo) =>
                                        navInfo.isActive ? "active" : " "
                                    }
                                >
                                    Collection
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/blogs"
                                    className={(navInfo) =>
                                        navInfo.isActive ? "active" : " "
                                    }
                                >
                                    Blogs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={(navInfo) =>
                                        navInfo.isActive ? "active" : " "
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/auth"
                                    className={(navInfo) =>
                                        navInfo.isActive ? "active" : " "
                                    }
                                >
                                    Login Register
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="header-icons d-flex">
                        <div className="user-icon">
                            <FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon>
                        </div>
                        <div className="wish-icon">
                            <div className="count">0</div>
                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                        </div>
                        <div className="cart-icon">
                            <div className="count">0</div>
                            <FontAwesomeIcon
                                icon={faShoppingCart}
                            ></FontAwesomeIcon>
                            <div className="cart-summery">
                                <ul>
                                    <li>
                                        <div className="cart-summery-img">
                                            <img
                                                src="images/furniture/1.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="cart-summery-info">
                                            <p>Lorem Ipsum Furniture one</p>
                                            <p>
                                                Qty: <span>1</span>
                                            </p>
                                            <p>$40.00</p>
                                        </div>
                                        <div className="cart-summery-icon">
                                            <FontAwesomeIcon
                                                icon={faTrash}
                                            ></FontAwesomeIcon>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cart-summery-img">
                                            <img
                                                src="images/furniture/2.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="cart-summery-info">
                                            <p>Lorem Ipsum Furniture two</p>
                                            <p>
                                                Qty: <span>1</span>
                                            </p>
                                            <p>$30.00</p>
                                        </div>
                                        <div className="cart-summery-icon">
                                            <FontAwesomeIcon
                                                icon={faTrash}
                                            ></FontAwesomeIcon>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cart-summery-img">
                                            <img
                                                src="images/furniture/3.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="cart-summery-info">
                                            <p>Lorem Ipsum Furniture three</p>
                                            <p>
                                                Qty: <span>1</span>
                                            </p>
                                            <p>$46.00</p>
                                        </div>
                                        <div className="cart-summery-icon">
                                            <FontAwesomeIcon
                                                icon={faTrash}
                                            ></FontAwesomeIcon>
                                        </div>
                                    </li>
                                </ul>
                                <div className="cart-summery-cost d-flex justify-content-between align-items-center">
                                    <p>Total</p>
                                    <p>$220.00</p>
                                </div>
                                <div className="cart-summery-btns">
                                    <Link to="/checkout">Checkout</Link>
                                    <Link to="/cart">view cart</Link>
                                </div>
                            </div>
                        </div>
                        <div className="toggle-icon d-block d-lg-none">
                            <button onClick={() => handleMobileMenu(true)}>
                                <FontAwesomeIcon
                                    icon={faBars}
                                ></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`offcanvas-mobile-menu ${
                    mobileMenu ? "active" : " "
                }`}
                id="offcanvas-mobile-menu"
            >
                <button
                    className="offcanvas-menu-close"
                    id="offcanvas-menu-close-trigger"
                    onClick={() => handleMobileMenu(false)}
                >
                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                </button>
                <div className="offcanvas-container">
                    <div className="offcanvas-content">
                        <div className="mobile-search">
                            <form action="">
                                <input
                                    type="search"
                                    placeholder="Search..."
                                    name=""
                                    id=""
                                />
                                <button>
                                    <FontAwesomeIcon
                                        icon={faSearch}
                                    ></FontAwesomeIcon>
                                </button>
                            </form>
                        </div>
                        <nav className="offcanvas-navigation">
                            <ul>
                                <li className="active">
                                    <a href=" ">Home</a>
                                </li>
                                <li>
                                    <a href=" ">Shop</a>
                                </li>
                                <li>
                                    <a href=" ">Collection</a>
                                </li>
                                <li>
                                    <a href=" ">Blogs</a>
                                </li>
                                <li>
                                    <a href=" ">Contact us</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="mobile-menu-middle">
                            <div className="mobile-lang mb-4">
                                <h6>Choose Language</h6>
                                <select name="" id="">
                                    <option value="en">English</option>
                                    <option value="frc">France</option>
                                    <option value="bn">Bangla</option>
                                </select>
                            </div>
                            <div className="mobile-currency">
                                <h6>Choose Currency</h6>
                                <select name="" id="">
                                    <option value="usd">USD</option>
                                    <option value="eur">EUR</option>
                                    <option value="taka">TAKA</option>
                                </select>
                            </div>
                        </div>
                        <div className="mobile-menu-widget">
                            <div className="mobile-menu-address">
                                <ul>
                                    <li>
                                        <FontAwesomeIcon
                                            className="me-2"
                                            icon={faPhone}
                                        ></FontAwesomeIcon>
                                        +88001613071257
                                    </li>
                                    <li>
                                        <FontAwesomeIcon
                                            className="me-2"
                                            icon={faEnvelope}
                                        ></FontAwesomeIcon>
                                        tanjira584@gmail.com
                                    </li>
                                </ul>
                            </div>
                            <div className="mobile-menu-social">
                                <ul>
                                    <li>
                                        <a href=" ">
                                            <FontAwesomeIcon
                                                icon={faFacebook}
                                            ></FontAwesomeIcon>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="  ">
                                            <FontAwesomeIcon
                                                icon={faTwitter}
                                            ></FontAwesomeIcon>
                                        </a>
                                    </li>
                                    <li>
                                        <a href=" ">
                                            <FontAwesomeIcon
                                                icon={faInstagram}
                                            ></FontAwesomeIcon>
                                        </a>
                                    </li>
                                    <li>
                                        <a href=" ">
                                            <FontAwesomeIcon
                                                icon={faPinterest}
                                            ></FontAwesomeIcon>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;
