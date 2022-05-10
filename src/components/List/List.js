import React from "react";
import './List.css';
import Card from "../Card/Card";


const List = ({cards, setCards}) => {
    const handleDelete = (id) => {
        const newCards = cards.filter((cards) => cards.id !== id)
        setCards(newCards)
    }
    
    return(
    <ul className="cards">
        {
            cards.map((card, index) => (<Card key={index} handleDelete={handleDelete} id={card.id} title={card.title} />))
        }
    </ul>
)}


export default List
