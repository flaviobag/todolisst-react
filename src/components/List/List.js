import React from "react";
import './List.css';
import Card from "../Card/Card";


const List = () => (
    <ul data-list className="cards">
        <Card id="1" title="Qualquer coisa"/>
        <Card id="2" title="Outra Coisa"/>
    </ul>
)
export default List
