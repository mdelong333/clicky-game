import React from "react";
import "./style.css";

function Navbar (props) {
    return (
        <nav className="navbar navbar-expand-sm">
            <div className="navbar-nav flex-container">
                <h5 className="nav-item logo">Clicky Game</h5>
                <h5 className="message nav-item"></h5>
                <h5 className="score nav-item">Score: {props.score} | High Score: {props.highScore}</h5>
            </div>
        </nav>
    );
};

export default Navbar;