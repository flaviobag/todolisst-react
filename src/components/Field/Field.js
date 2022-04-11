import React from "react"
import "./Field.css"
import LoginImage from "../../icons/login.png" 


const Field = () => (
    <div data-field className="field"> 
        <input data-input  type="text" className="field__input" placeholder="What would you like to do today?" aria-label="What would you like to do today?"/>
        <button class="field__button"><img className="field__image" src={LoginImage} alt="submit"/></button>  
    </div> 
)

export default Field
