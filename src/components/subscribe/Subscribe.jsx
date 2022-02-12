import React from "react";

import './subscribe.css';

const Subscribe = () => {
    return (
        <section id="subscribe">
            <div className="container subscribe">
                <h2>You Can Subscribe Now!</h2>
                <form action="">
                    <div className="form-control">
                        <input type="text" placeholder="Enter your Email..."/>
                        <button type="submit">Subscribe</button>
                    </div>
                </form>
                <div className="social-icons">
                    <div className="social-icon">
                        <i className="fab fa-facebook-f"></i>
                    </div>
                    <div className="social-icon">
                        <i className="fab fa-google-plus-g"></i>
                    </div>
                    <div className="social-icon">
                        <i className="fab fa-twitter"></i>
                    </div>
                    <div className="social-icon">
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Subscribe;