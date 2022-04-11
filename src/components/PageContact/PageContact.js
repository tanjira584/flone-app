import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import "./PageContact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGlobe,
    faLocationDot,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";

const PageContact = () => {
    return (
        <div>
            <Header></Header>
            <Breadcrumb pageName="Contact"></Breadcrumb>
            <div className="py-5">
                <div className="container-md container-fluid">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9269051309343!2d91.09947981543196!3d23.78561709334594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37540ce0d3df048f%3A0x551a963f42fefb68!2sDeli%20Jame%20Mosque!5e0!3m2!1sen!2sbd!4v1649665013553!5m2!1sen!2sbd"
                        title="Google map of our location"
                        width="100%"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="container-md container-fluid mt-3">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="contact-info">
                                <div className="single-contact-info">
                                    <div className="contact-icon">
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={faPhone}
                                        ></FontAwesomeIcon>
                                    </div>
                                    <div className="contact-info-dec">
                                        <p>+88001613071257</p>
                                        <p>+88001620282092</p>
                                    </div>
                                </div>
                                <div className="single-contact-info">
                                    <div className="contact-icon">
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={faGlobe}
                                        ></FontAwesomeIcon>
                                    </div>
                                    <div className="contact-info-dec">
                                        <p>tanjira584@gmail.com</p>
                                        <p>tanjir@gmail.com</p>
                                    </div>
                                </div>
                                <div className="single-contact-info">
                                    <div className="contact-icon">
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={faLocationDot}
                                        ></FontAwesomeIcon>
                                    </div>
                                    <div className="contact-info-dec">
                                        <p>Address goes here,</p>
                                        <p>street, Crossroad 123.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="contact-form">
                                <h4 className="mb-4">Get In Touch</h4>
                                <form>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="mb-4">
                                                <label
                                                    for="name"
                                                    className="form-label"
                                                >
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="mb-4">
                                                <label
                                                    for="email"
                                                    className="form-label"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="mb-4">
                                                <label
                                                    for="subject"
                                                    className="form-label"
                                                >
                                                    Subject*
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="subject"
                                                    placeholder=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className=" mb-4">
                                                <label
                                                    for="orderNotes"
                                                    className="form-label"
                                                >
                                                    Order notes
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Notes about your order, e.g. special notes for delivery. "
                                                    name=""
                                                    id="orderNotes"
                                                    cols="30"
                                                    rows="5"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <input
                                                className="send-btn"
                                                type="submit"
                                                value="SEND"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PageContact;
