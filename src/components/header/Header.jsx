import React from "react";
import Button from "../UI/button/Button";
import "./header.css"
import PhotoHeader from "../../assets/phone-header-bg.png";
import './header.css';
import "../UI/button/button.css";



const Header = () => {
    return (
        <section id="header">
            <div className="container header">
                <div className="header-left">
                    <h1>
                    <span>The best leading</span>
                    <span>cross-platform secured</span>
                    <span>messaging system</span>
                    </h1>
                    <p className="u-text-small u-text-light">G&JMSOCIO Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laboriosam officia minima perferendis quibusdam incidunt odit. 
                        Quasi recusandae facilis atque deleniti?
                    </p>
                    <div className="header-octa">
                        <Button text={"Learn More"} 
                        btnClass={"btn-dark"}
                        href={"#faq"}/>
                        <Button text={"Explore Now"}
                        btnClass={"btn-orange"}
                        href={"#"}/>
                    </div>
                   
                </div>
                <div className="header-right">
                    <img src={PhotoHeader} alt="phone"/>
                </div>
            </div>
            <div className="floating-icon">
                <a href="#features">
                <i class="fas fa-mouse mouse"></i>
                </a>
            </div>
        </section>
    )
}
export default Header;