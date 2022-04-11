import React from "react";
import './Button.css';

const Button = (props) => (
    <button data-button type={props.type} className="button" aria-label="Adicionar">{props.children}                  
    </button>  
)

export default Button
