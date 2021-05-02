import React from 'react';
import {
    FaFacebookF,
    FaTwitter,
    FaPinterest,
    FaInstagram,
    FaPlay,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div>

            <div className="contact">
                <div className="container">
                    <div className="contactSection">
                        <div className="row justifyConter">
                            <div className="col-6">
                                <div className="contactSection-logo">
                                    {/* <img src="/images/logo.png" alt="" /> */}
                                    <h2 style={{color:'white'}}>My portfolio</h2>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor inci- didunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exe- rcitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat.
              </p>
                                <ul className="contactCircles">
                                    <li>
                                        <FaFacebookF className="contactIcon" />
                                    </li>
                                    <li>
                                        <FaTwitter className="contactIcon" />
                                    </li>
                                    <li>
                                        <FaPinterest className="contactIcon" />
                                    </li>
                                    <li>
                                        <FaInstagram className="contactIcon" />
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                        <p style={{ color: 'white', display: 'flex', justifyContent: 'center' }}>Copyright © 2021, All Right Reserved Shakiazzaman Shakil</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;