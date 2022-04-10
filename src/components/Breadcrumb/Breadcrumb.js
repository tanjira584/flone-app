import React from "react";
import "./Breadcrumb.css";
import { Link } from "react-router-dom";

const Breadcrumb = ({ pageName }) => {
    return (
        <div className="breadcrumb-area">
            <ul className="mx-auto">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>/</li>
                <li>{pageName}</li>
            </ul>
        </div>
    );
};

export default Breadcrumb;
