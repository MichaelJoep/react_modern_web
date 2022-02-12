import React from "react";
import PhoneFeatures from "../../assets/phone-features.png";
import './feature.css';
import Feat from "./Feat";
import { featureList } from "./data.js";

const Features = () => {
    return (
        <section id="features">
            <div className="containers features">
                <div className="u-title">
                  <i class='fas fa-bookmark'></i>
                  <i class='fas fa-star'></i>
                    <h2>Core Features</h2>
                    <p className="u-text-small">
                        G&JMSOCIO Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         Adipisci, voluptate minima. Provident molestiae aperiam eveniet illum 
                         fugiat! Blanditiis!
                    </p>
                </div>
            </div>
            <div className="features-content">
                <div className="features-left">
                    <img src={PhoneFeatures} alt="phone"/>
                </div>
                <div className="features-right">
                    {
                        featureList.map((feature) => (
                            <Feat key={feature.id} icon={feature.icon}
                            heading={feature.heading} text={feature.text}/>
                        ))
                    }
                    
                </div>
            </div>
        </section>
    )
}
export default Features;