import React from "react";
import "./feat.css";

const Feat = ({heading, icon, text}) => {
    return (
        <div className="feature">
            <div className="feature-icon">
            <div className="far fa-square"></div>
            
                <div className="inner-icon">
                    
                    {icon}

                </div>
            </div> 
            <div className="feature-text">
                <h3>{heading}</h3>
                <p className="u-text-small">
                    {text}
                </p>
                
            </div>
        </div>
    )
}
export default Feat;