import React, {useState} from "react";
import Button from "../UI/button/Button";
import './navbar.css';
import "../UI/button/button.css";

const Navbar = () => {
   const [showMenu, setShowMenu] = useState(false);

   const toggleMenu = () => {
       setShowMenu(!showMenu);
   };

    return (
        
            <nav className="container navbar">
                <div className="logo">
                    <h2>G<span>&</span>JM<span>SOCIO</span></h2>
                </div>
                <menu>
                    <ul className="nav-links" id={showMenu ? "nav-links-mobile" : 
                    "nav-links-mobile-hide"}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#download">Download</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#subscribe">Subscribe</a></li>
                        
                        <li className="nav-btn"> 
                           <Button text={"Get Started"}
                            btnClass={"btn-dark"}
                            href={"#faq"}/>
                        </li>
                    </ul>
                </menu>
                <div className="menu-icons" onClick={toggleMenu}>
                    {
                        showMenu ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>
                    }
                </div> 
            </nav>
    
    )
}
export default Navbar;