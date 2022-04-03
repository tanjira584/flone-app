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
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faInstagram,
    faPinterest,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./HeaderMain.css";

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
