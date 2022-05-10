import React from "react";
import './Card.css';
import DeleteImage from "../../icons/delete.png" 


const Card = ({id, title, handleDelete}) => (
    <li data-card={id} className="card">
        <input className="checkbox" type="checkbox" id={`item-${id}`}/>
        <label htmlFor={`item-${id}`} className="card__label">{title}</label>
        <button onClick={() => handleDelete(id)} type="button" className="button-del">
            <img className="button-del__image" src={DeleteImage} alt="deletar"/>
        </button>
    </li>
)
export default Card
