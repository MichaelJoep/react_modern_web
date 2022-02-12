import React from "react";

import './footer.css';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container footer">
                <div className="footer-box">
                    <h4>Useful Links</h4>
                    <a href="#">&bull; Support</a>
                    <a href="#">&bull; About</a>
                    <a href="#">&bull; Learn</a>
                    <a href="#">&bull; Messenger</a>
                    <a href="#">&bull; Hosting</a>
                </div>
                <div className="footer-box">
                <h4>Support</h4>
                    <a href="#">&bull; Support</a>
                    <a href="#">&bull; About</a>
                    <a href="#">&bull; Learn</a>
                    <a href="#">&bull; Messenger</a>
                    <a href="#">&bull; Hosting</a>
                </div>
                <div className="footer-box">
                <h4>Contact Us</h4>
                    <div className="footer-contact">
                        <p>
                        <i className="fas fa-map-marker"></i>&nbsp; Address: Port Harcourt
                        </p>
                        <p>
                        <i className="fas fa-phone"></i>&nbsp; Phone: +234 8069 4926 49
                        </p>
                        <p>
                        <i className="fab fa-whatsapp"></i>&nbsp; whatsApp: +234 9057 8368 03
                        </p>
                        <p>
                        <i className="fas fa-envelope"></i>&nbsp; Email: michaelp4great@gmail.com
                        </p>
                    </div>
                </div>
                <div className="footer-box">
                <div className="logo">
                    <h2>G<span>&</span>JM<span>SOCIO</span></h2>
                    <p className="u-text-small u-text-dark">
                        &copy; Copyright 2022
                    </p>
                </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;