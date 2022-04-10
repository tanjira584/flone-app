import React from "react";
import "./Breadcrumb.css";

const Breadcrumb = ({ pageName }) => {
    return (
        <div className="breadcrumb-area">
            <ul className="mx-auto">
                <li>
                    <a href=" ">Home</a>
                </li>
                <li>/</li>
                <li>{pageName}</li>
            </ul>
        </div>
    );
};

export default Breadcrumb;
