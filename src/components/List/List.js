import React from "react";
import './List.css';
import Card from "../Card/Card";


const List = () => {
    const cards = [
        {id: 1, title: "Qualquer coisa"},
        {id: 2, title: "Outra Coisa"},
        {id: 3, title: "Repete a outra coisa"}
    ]
    return(
    <ul data-list className="cards">
        {
            cards.map((card) => (<Card id={card.id} title={card.title}/>))
        }
        
    </ul>
)}


export default List
