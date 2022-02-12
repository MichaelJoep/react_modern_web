import React from "react";

import "./button.css";

const Button = ({text, btnClass, href}) => {
    return (
        <a href={href} className={`btn ${btnClass}`}>{text}</a>
    )
}
export default Button;