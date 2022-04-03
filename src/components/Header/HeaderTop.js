import React from "react";
import "./HeaderTop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const HeaderTop = () => {
    return (
        <section className="header-top d-none d-lg-block">
            <div className="container-fluid container-md d-flex justify-content-between align-items-center">
                <div className="header-top-left d-flex justify-content-between align-items-center">
                    <div className="convert-lang">
                        <div className="languages">
                            <p>
                                English{" "}
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faAngleDown}
                                ></FontAwesomeIcon>
                            </p>
                            <div className="lang-list">
                                <ul>
                                    <li>
                                        <button>English</button>
                                    </li>
                                    <li>
                                        <button>France</button>
                                    </li>
                                    <li>
                                        <button>Bangla</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="convert-currency">
                        <div className="currencies">
                            <p>
                                USD{" "}
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faAngleDown}
                                ></FontAwesomeIcon>
                            </p>
                            <div className="currency-list">
                                <ul>
                                    <li>
                                        <button>USD</button>
                                    </li>
                                    <li>
                                        <button>EUR</button>
                                    </li>
                                    <li>
                                        <button>TAKA</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="help-no">
                        <p>
                            Call us: <span>+88001613071257</span>
                        </p>
                    </div>
                </div>
                <div className="header-top-right">
                    <p>
                        Free delivery on order over
                        <span className="text-danger"> $200.00</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeaderTop;
