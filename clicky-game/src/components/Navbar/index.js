import React from "react";
import "./style.css";

function Navbar (props) {
    return (
        <nav className="navbar navbar-expand-sm">
            <ul className="navbar-nav flex-container">
                <h5 className="nav-item logo">Clicky Game</h5>
                <li className="message nav-item"></li>
                <li className="score nav-item">Score: {props.score} || High Score: {props.highScore}</li>
            </ul>
        </nav>
    );
};

export default Navbar;