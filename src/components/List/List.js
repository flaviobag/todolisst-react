import React from "react";
import './List.css';
import Card from "../Card/Card";
import { deleteItems } from "../../api/config";


const List = ({cards, setCards}) => {
    const handleDelete = (id) => {
        const newCards = cards.filter((cards) => cards.id !== id)
        setCards(newCards)
        deleteItems(id)
    }
    
    return(
    <ul className="cards">
        {
            cards.map((card) => (<Card key={card.id} handleDelete={handleDelete} id={card.id} title={card.title} />))
        }
    </ul>
)}


export default List
