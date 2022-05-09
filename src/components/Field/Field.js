import React from "react"
import "./Field.css"
import LoginImage from "../../icons/login.png" 


const Field = ({title, setTitle}) => (
    <div className="field"> 
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="field__input" placeholder="What would you like to do today?" aria-label="What would you like to do today?"/>
        <button className="field__button"><img className="field__image" src={LoginImage} alt="submit"/></button>  
    </div> 
)

export default Field
