import React from "react";
import blog1 from "../../images/blog1.jpg";
import blog2 from "../../images/blog2.jpg";
import blog3 from "../../images/blog3.jpg";

const BlogSection = () => {
    return (
        <div className="blog-area">
            <div className="container-md container">
                <div className="section-info text-center mb-5">
                    <h2 className="">Our Blogs</h2>
                </div>
                <div className="row g-5">
                    <div className="col-md-4">
                        <div className="blog-single">
                            <div className="img">
                                <img
                                    src={blog1}
                                    className="img-fluid w-100"
                                    alt=""
                                />
                            </div>
                            <div className="blog-info text-center mx-4 p-4">
                                <h4>A guide to latest trends</h4>
                                <span className="fst-italic">By Admin</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blog-single">
                            <div className="img">
                                <img
                                    src={blog2}
                                    className="img-fluid w-100"
                                    alt=""
                                />
                            </div>
                            <div className="blog-info text-center mx-4 p-4">
                                <h4>A guide to latest trends</h4>
                                <span className="fst-italic">By Admin</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blog-single">
                            <div className="img">
                                <img
                                    src={blog3}
                                    className="img-fluid w-100"
                                    alt=""
                                />
                            </div>
                            <div className="blog-info text-center mx-4 p-4">
                                <h4>A guide to latest trends</h4>
                                <span className="fst-italic">By Admin</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
