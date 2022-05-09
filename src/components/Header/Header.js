import React from "react";
import './Header.css';
import Button from "../Button/Button";

const Header = ({open,setOpen}) => (
    <header className="header">
        <h1 data-title className="header__title">
        </h1>
        <h2 className="header__subtitle"><span data-greeting></span>You've got <span data-counter></span> things to do today!</h2>  
        <Button type="button" onClick={() => setOpen(!open)}>{open ? '-' : '+'}</Button>
    </header>
)
export default Header
