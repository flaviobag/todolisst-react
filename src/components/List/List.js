import React from "react";
import './List.css';
import Card from "../Card/Card";


const List = ({cards}) => {
    
    return(
    <ul data-list className="cards">
        {
            cards.map((card) => (<Card id={card.id} title={card.title}/>))
        }
    </ul>
)}


export default List
